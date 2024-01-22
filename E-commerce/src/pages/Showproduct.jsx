import React, { useEffect, Fragment } from 'react'
import EditCard from '../components/card/EditCard'
import useCustomApi from '../hooks/ApiHook'

import AdminHeader from '../components/admin/AdminHeader';




const Showproduct = () => {
  const { data, error, loading, customFetchData } = useCustomApi();


  useEffect(() => {
    customFetchData("/products/getproducts", "GET", null, {}, "application/json");
  }, [])



  return (
      <Fragment>
<AdminHeader></AdminHeader>
    <div>
       {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.data && (
        <div className='md:flex justify-between w-full   flex-wrap'>
          {data.data.map((product) => (
            <div key={product._id} className='p-1 md:w-1/3'>
              <EditCard 
              id= {product._id}
              type= {product.productType}
              name={product.productName}
              price={product.price}
              description={product.description}
              image={product.image}
              isForSale={product.isForSale}
              tags={product.tags}
              gender={product.gender}
              />
            </div>
          ))} 
        </div>
      )}
    </div>
      </Fragment>
  )
}

export default Showproduct