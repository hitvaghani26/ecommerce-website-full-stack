import { Cart } from '../models/Cart/cart.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Product } from "../models/product/product.model.js"

// Get cart details by user ID
const getCartByUserId = asyncHandler(async (req, res) => {
let total = 0;
    const cart = await Cart.findOne({ user: req.user._id }).populate('products.product', 'productName price image');

    if (!cart) {
        const newCart = new Cart({
            user: req.user._id,
            products: []
        });

        const updatedCart = await newCart.save();

        res.status(200).json(new ApiResponse(200, updatedCart, 'Cart created successfully'));
    }
    if(cart){

        total = await calculateTotal(cart._id);
    }
    else{
        total = await calculateTotal(updatedCart._id);
    }
    res.status(200).json(new ApiResponse(200, {cart, total}, 'Cart details fetched successfully'));

});

const updateCartByUserId = asyncHandler(async (req, res) => {
    let total = 0;
    const { productId, quantity } = req.body;
    if(quantity <= 0){
        throw new ApiError(400, "Quantity should be greater than 0");
    }
    // Find the user's cart
    const userCart = await Cart.findOne({ user: req.user._id });

    // If the user already has a cart, update it based on the provided productId and quantity
    const existingProduct = userCart.products.find((p) => p.product.equals(productId));

    if (existingProduct) {
        // If the product exists in the cart, update its quantity
        existingProduct.quantity = quantity || 1;
    }
   
     else {
        // If the product doesn't exist in the cart, add it
        userCart.products.push({ product: productId, quantity: quantity || 1 });
    }



    // Save the updated cart
    const updatedCart = await userCart.save();

total  = await calculateTotal(userCart._id);
   
        

    res.status(200).json(new ApiResponse(200, {updatedCart, total}, 'Cart updated successfully'));
});


async function calculateTotal(cartid) {
    let total = 0;
    const aggregationPipeline = [
        {
          $match: {
            _id: cartid
          }
        },
        {
          $unwind: "$products"
        },
        {
          $lookup: {
            from: "products", // Replace with your actual product collection name
            localField: "products.product",
            foreignField: "_id",
            as: "products.productInfo"
          }
        },
        {
          $unwind: "$products.productInfo"
        },
        {
          $addFields: {
            "products.totalPrice": {
              $multiply: ["$products.quantity", "$products.productInfo.price"]
            }
          }
        },
        {
          $group: {
            _id: "$_id",
            cartTotal: { $sum: "$products.totalPrice" }
          }
        }
      ];
      
      await Cart.aggregate(aggregationPipeline)
        .exec()
        .then(result => {
            
           total = result.length > 0? result[0].cartTotal : 0;
          
        })
        .catch(err => {
          throw new ApiError(500, err.message);
        });
        console.log("total is ", total);
        return total;
}

const isProductInCart = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    console.log(productId, req.user._id);
    const userCart = await Cart.findOne({ user: req.user._id });
    console.log(userCart);
    
     let   existingProduct = await userCart.products.find((p) => p.product.equals(productId));
     if(existingProduct){

         res.status(200).json(new ApiResponse(200, existingProduct, 'Cart updated successfully'));
     }
     else{
        res.status(200).json(new ApiResponse(200, false, 'Cart updated successfully'));

     }


});



const deleteCartByUserId = asyncHandler(async (req, res) => {
    let total = 0;

    const { productId } = req.body;

    // Find the user's cart
    const userCart = await Cart.findOne({ user: req.user._id });

    if (!userCart) {
        throw new ApiError(404, 'Cart not found');
    }

    // Find the index of the product in the cart based on the provided product ID
    const productIndex = userCart.products.findIndex((p) => p.product.equals(productId));

    if (productIndex === -1) {
        throw new ApiError(404, 'Product not found in the cart');
    }

    // Remove the product from the cart based on the index
    userCart.products.splice(productIndex, 1);

    // Update the total if needed (you may want to recalculate the total based on the updated products)



    total = await calculateTotal(userCart._id);
    const updatedCart = await userCart.save();

    console.log("delete api call");
    res.status(200).json(new ApiResponse(200, {updatedCart, total}, 'Cart updated successfully'));
});


export { getCartByUserId, updateCartByUserId, deleteCartByUserId, isProductInCart };
