// Import necessary models
import { Wishlist } from '../models/wishlist/wistLisht.model.js';
import { Product } from '../models/product/product.model.js';
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// Controller to add a product to the wishlist
const addToWishlist = asyncHandler(async (req, res) => {
                
    const { productId } = req.body; // Assuming the request body contains the productId to add

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    // Check if the user already has the product in the wishlist
    const existingWishlist = await Wishlist.findOne({ user: req.user._id, products: productId });

    if (existingWishlist) {
        throw new ApiError(404, "Product already in the wishlist");
    }

    // Add the product to the user's wishlist
    const wishlist = await Wishlist.findOneAndUpdate(
        { user: req.user._id },
        { $push: { products: productId } },
        { upsert: true, new: true }
    );


    return res.status(201)
        .json(

            new ApiResponse(
                201,
                wishlist,
                "product added to wishlist successfully"
            )

        )

});

// Controller to remove a product from the wishlist
const removeFromWishlist = asyncHandler(async (req, res) => {

    const { productId } = req.body; // Assuming the request body contains the productId to remove

    // Check if the user has the product in the wishlist
    const existingWishlist = await Wishlist.findOne({ user: req.user._id, products: productId });
    console.log(existingWishlist);
    if (!existingWishlist) {
        throw new ApiError(404, 'Product not found in the wishlist');
    }

    // Remove the product from the user's wishlist
    const updatedWishlist = await Wishlist.findOneAndUpdate(
        { user: req.user._id },
        { $pull: { products: productId } },
        { new: true }
    );

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                updatedWishlist,
                'Product removed from the wishlist successfully'
            )
        );

});
const getWishlistProducts = asyncHandler(async (req, res) => {
    // Retrieve the user's wishlist
    const userWishlist = await Wishlist.findOne({ user: req.user._id })
    if (!userWishlist) {
        throw new ApiError(404, 'Wishlist not found');
    }

    // Extract the products from the wishlist
    const wishlistProducts = userWishlist.products;

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                wishlistProducts,
                'Wishlist products retrieved successfully'
            )
        );
});
const isProductInWishlist = asyncHandler(async (req, res) => {
    const { productId } = req.params;

    // Check if the user has the product in the wishlist
    const existingWishlist = await Wishlist.findOne({ user: req.user._id, products: productId });

    return res.status(existingWishlist ? 200 : 404)
        .json(
            new ApiResponse(
                existingWishlist ? 200 : 404,
                { isInWishlist: existingWishlist ? true : false },
                existingWishlist ? 'Product is in the wishlist' : 'Product is not in the wishlist'
            )
        );
});

const getWishlistProductDetails = asyncHandler(async (req, res) => {
    // Retrieve the user's wishlist
    const userWishlist = await Wishlist.findOne({ user: req.user._id }).populate('products')
    if (!userWishlist) {
        throw new ApiError(404, 'Wishlist not found');
    }

    // Extract the products from the wishlist
    const wishlistProducts = userWishlist.products;

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                wishlistProducts,
                'Wishlist products retrieved successfully'
            )
        );
});

export { addToWishlist, removeFromWishlist, getWishlistProducts, isProductInWishlist, getWishlistProductDetails }