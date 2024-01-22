import e from "express";
import { Product } from "../models/product/product.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary, deleteOnCloudinary } from "../utils/cloudnaryFileHandle.js";

const createProduct = asyncHandler(async (req, res) => {
    const { productName, productType, price, description, image, gender, tags, isForSale } = req.body;
    // console.log(req.body);
    if ([productName, productType, description, gender, tags].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }



    const imageLocalPath = req.files?.image[0]?.path;
    console.log('Image Local Path:', imageLocalPath);

    if (!imageLocalPath) {
        throw new ApiError(400, "Image is required");
    }

    const Cimage = await uploadOnCloudinary(imageLocalPath);
    console.log(Cimage);
    if (!Cimage) {
        throw new ApiError(500, "Something went wrong while uploading image to cloudinary");
    }


    const newProduct = new Product({
        productName,
        productType,
        price,
        description,
        image: Cimage.url,
        gender,
        tags,
        isForSale,
    });
    const savedProduct = await newProduct.save();

    if (!savedProduct) {
        throw new ApiError(500, "Something went wrong while saving the product");
    }

    res.status(201).json(
        new ApiResponse(201, savedProduct, "Product created successfully")
    );
});

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (!products) {
        throw new ApiError(404, "No products found");
    }
    res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
    );
});
const getOneProducts = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
        throw new ApiError(404, "Product not found");
    }
    res.status(200).json(
        new ApiResponse(200, product, "Product fetched successfully")
    );
})
const updateProduct = asyncHandler(async (req, res) => {
    console.log(req.files);
    if (!req.files?.image) {
        const { productName, productType, price, description, imageurl, gender, tags, isForSale } = req.body;
        console.log(req.body);
        if ([productName, productType, description, gender, tags].some((field) => field?.trim() === "")) {
            throw new ApiError(400, "All fields are required");
        }
        const newProduct = {
            productName,
            productType,
            price,
            description,
            image: imageurl,
            gender,
            tags,
            isForSale,
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, newProduct, { new: true });
        if (!updatedProduct) {
            throw new ApiError(404, "Product not found");
        }

        res.status(200).json(new ApiResponse(200, updatedProduct, "No file received"));


    }
    else {
        console.log("hi");
        const { productName, productType, price, description, oldimageurl, gender, tags, isForSale } = req.body;

        const imageLocalPath = req.files?.image[0]?.path;
        console.log('Image Local Path:', imageLocalPath);

        if (!imageLocalPath) {
            throw new ApiError(400, "Image is required");
        }

        const publicIdMatch = oldimageurl.match(/\/([^\/]+)\.(png|jpeg|jpg)/);
        console.log(publicIdMatch);
        const publicId = publicIdMatch? publicIdMatch[1] : '';
        if(publicId == ''){
            new ApiError(400, "Something went wrong while uploading image to cloudinary");
        }
        console.log(publicId);
        const result = await deleteOnCloudinary(publicId);
        if(result.result === "not found"){  
            throw new ApiError(400, "no image found");
        }
        if(result.result === "error"){
            throw new ApiError(500, "Something went wrong while deleting image from cloudinary");
        }
        
        const Cimage = await uploadOnCloudinary(imageLocalPath);
        console.log(Cimage);
        if (!Cimage) {
            throw new ApiError(500, "Something went wrong while uploading image to cloudinary");
        }


        const newProduct = {
            productName,
            productType,
            price,
            description,
            image: Cimage.url,
            gender,
            tags,
            isForSale,
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, newProduct, { new: true });
        if (!updatedProduct) {
            throw new ApiError(404, "Product not found");
        }

        res.status(200).json(new ApiResponse(200, updatedProduct, " file received"));

    }

});
const getManProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({gender:'man'});
    if (!products) {
        throw new ApiError(404, "No products found");
    }
    res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
    ); 
})
const getWomanProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({gender:'woman'});
    if (!products) {
        throw new ApiError(404, "No products found");
    }
    res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
    ); 
})

const getPruductCategoryShort = asyncHandler(async (req, res) => {
    let category = req.params.category;
    if (category =='All'){
        category = ["woman" , "man", "all"];
    }
    const shorttype = req.params.shorttype || 1;
  async  function getProductByCateBySort(category,sortname, sortvalue){
    let sortQury = {};
    sortQury[sortname] = sortvalue;
        return  products = await Product.find({gender: {$in:category}})
        .collation({locale: 'en', strength: 2})
        .sort(sortQury);
    }
    let products ;
    // const products = await Product.find({gender:category});
    if(shorttype =='pricelow'){
         products = await getProductByCateBySort(category,'price',1);
    }
    else if(shorttype =='pricehigh'){
       
         products = await getProductByCateBySort(category,'price',-1);
    }
    else if(shorttype == 'new'){
         
         products = await getProductByCateBySort(category,'createdAt',-1);
    }
    else if(shorttype == 'old'){
       
         products = await getProductByCateBySort(category,'createdAt',1);
    }
    else if(shorttype == 'atoz'){
         
         products = await getProductByCateBySort(category,'productName',1);
    }
    else if(shorttype == 'ztoa'){
       
         products = await getProductByCateBySort(category,'productName',-1);

    }
    if(! products){
        throw new ApiError(404, "No products found or invalid shorttype");
    }
    

    console.log(products);
    res.status(200).json(
        new ApiResponse(200, products, "Products fetched ")
    );
})

const newProduct = asyncHandler(async (req, res) => {
    let products;
    if(req.params.type){
        if(req.params.type == 'all'){
             products = await Product.find({}).sort({ createdAt: -1 }).limit(8);
        }
        else if(req.params.type == 'woman'){
             products = await Product.find({gender:'woman'}).sort({ createdAt: -1 }).limit(8);
        }
        else if(req.params.type =='man'){
             products = await Product.find({gender:'man'}).sort({ createdAt: -1 }).limit(8);
        }
    }
    else{

         products = await Product.find({}).sort({ createdAt: -1 }).limit(8);
    }
    
    
    if (!products) {
        throw new ApiError(404, "No products found");
    }
    res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
    );
})
const trendingProduct = asyncHandler(async (req, res) => {

    const products = await Product.find({}).sort({ createdAt: -1 }).limit(9);

    
    if (!products) {
        throw new ApiError(404, "No products found");
    }
    res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
    );


})
export { createProduct, getProducts, getOneProducts, updateProduct, getWomanProducts, getManProducts, getPruductCategoryShort, newProduct,trendingProduct };
