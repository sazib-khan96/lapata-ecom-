import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import imgs from '../../assets/payment.jpg'
import { Star } from 'lucide-react';
import { setProductData } from '../../Utility/utility';


const SingleProduct = () => {
    const data = useLoaderData()
    const {id} = useParams()
   const singledata = data.find(item => item.id === id)
const {name,img,price,rating,category,description,colors} = singledata
   
   const addToCardHandle = (id) =>{
    console.log(id)
    setProductData(id)
   }
    return (
        <div className='md:flex gap-8 mt-8  mx-auto px-10'>
            <title>Lapata - Product details</title>
          <div className='bg-gray-100 p-8 rounded-2xl'>
             <img src={img} alt="" className='w-6/10 mx-auto rounded-2xl' />
          </div>
          <div>
            <p>Category  <span className='text-yellow-700'>{category}</span></p>
            <h1 className='text-3xl mb-8'>{name}</h1>
            <p>{description}</p>
            <p className='flex gap-3 my-5'><Star  className='text-red-400 w-5'/>{rating}</p>
            <p className='text-black font-bold'>Price :{price} tk</p>


            <div className='flex gap-5 mt-10'>
                <button onClick={() => addToCardHandle(id)} className='bg-black text-white px-4 py-2'>Add To Card</button>
                <button>Buy Now</button>
            </div>
            <div className='mt-3'>
                <img src={imgs} alt="" />
            </div>
            <div>
               {
                colors.map(col => <p>{col}</p>)
               }
            </div>
          </div>



        </div>
    );
};

export default SingleProduct;