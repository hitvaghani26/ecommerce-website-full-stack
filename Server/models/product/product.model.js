
import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    required: false,
  },
  gender: {
    type: String,
    enum: ['all', 'man', 'woman'],
    default: 'all',
  },
  isForSale:{
    type: Boolean,
    default: false,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
}, {timestamps: true}); 

export const Product = mongoose.model('Product', productSchema);

// module.exports = Product;
