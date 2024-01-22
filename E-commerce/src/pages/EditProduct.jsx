import React, { useState, useEffect, Fragment } from 'react';
import useCustomApi from '../hooks/ApiHook';
import { useParams } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import Loader from '../components/Loader';


const EditProduct = () => {
  const { data, error, loading, customFetchData } = useCustomApi();
  // const [oldImageUrl , setOldImgageUrl] = useState('');
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({
    productName: '',
    productType: '',
    price: 0,
    description: '',
    imageurl: '',
    oldImageUrl: '',
    image: null,
    gender: 'all',
    tags: '',
    isForSale: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'file') {
      // Handle file input separately
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        image: event.target.files[0],
      }));

    } else if (type === 'checkbox') {
      // Handle checkbox input
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        [name]: checked,
      }));

    }
    else if (name === 'price') {
      // Convert price to a number
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        [name]: parseFloat(value) || 0,
      }));
    }
    else {
      // Handle other inputs
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  useEffect(() => {

    customFetchData(`/products/getoneproduct/${id}`, 'GET', null, {}, 'application/json');


  }, []);
  useEffect(() => {
    if (data?.data) {
      setProductDetails({
        productName: data.data.productName,
        productType: data.data.productType,
        price: data.data.price,
        description: data.data.description,
        imageurl: data.data.image,
        oldImageUrl: data.data.image,
        gender: data.data.gender,
        tags: data.data.tags,
        isForSale: data.data.isForSale,
      });
      // setOldImgageUrl(data.data.image);
    }
  }, [data])
  // console.log(productDetails);  



  // Handle form submission for updating the product
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const price = isNaN(productDetails.price) ? 0 : parseFloat(productDetails.price);

    const formData = new FormData();
    formData.append('productName', productDetails.productName);
    formData.append('productType', productDetails.productType);
    formData.append('price', productDetails.price);
    formData.append('description', productDetails.description);
    formData.append('imageurl', productDetails.imageurl);
    formData.append('image', productDetails.image);
    formData.append('oldimageurl', productDetails.oldImageUrl);
    formData.append('gender', productDetails.gender);
    formData.append('tags', productDetails.tags);
    formData.append('isForSale', productDetails.isForSale);

    customFetchData(`/products/update/${id}`, 'post', null, formData, 'multipart/form-data');

  };
  // console.log("data is ", data);

  return (
    <Fragment>
      <AdminHeader />
      <div className="flex   flex-col justify-center px-6 py-12 lg:px-8 font-Montserrat relative min-h-screen min-w-screen">

        {!loading && <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit product
          </h2>
        </div>}

        {!loading && <div className="mt-10 w-full sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 ">
            <div className=''>
              <label htmlFor="productName" className="block text-sm font-medium leading-6 text-gray-900">
                Product Name
              </label>
              <div className="mt-2 ">
                <input
                  id="productName"
                  name="productName"
                  type="text"
                  value={productDetails.productName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="productType" className="block text-sm font-medium leading-6 text-gray-900">
                Product Type
              </label>
              <div className="mt-2">
                <input
                  id="productType"
                  name="productType"
                  type="text"
                  value={productDetails.productType}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="number"
                  value={productDetails.price}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={productDetails.description}
                  onChange={handleChange}
                  required
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select

                  id="gender"
                  name="gender"
                  value={productDetails.gender}
                  onChange={handleChange}
                  required
                  className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                >
                  <option value="all">All Genders</option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium leading-6 text-gray-900">
                Tags
              </label>
              <div className="mt-2">
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  value={productDetails.tags}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                Product Image
                <img src={productDetails?.imageurl} className='h-64'></img>
              </label>
              <div className="mt-2">
                <input
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleChange}
                  accept="image/*"
                  required
                  className=" w-full"
                />
              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor="isForSale" className="inline-block  text-sm font-medium leading-6 text-gray-900">
                Is For Sale
              </label>
              <div className="ml-2">
                <input
                  id="isForSale"
                  name="isForSale"
                  type="checkbox"
                  checked={productDetails.isForSale}
                  onChange={handleChange}
                  className="form-checkbox inline-block h-4 w-4 text-orange-600 transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div className='bg-orange-500 rounded-md hover:bg-orange-600'>
              <button
                onClick={handleUpdateProduct}
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-orange-600"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>}
        {loading && <div className='absolute h-screen w-screen top-0 flex justify-center items-center'>
          <Loader />
          </div>}
      </div>
    </ Fragment>

  );
};

export default EditProduct;
