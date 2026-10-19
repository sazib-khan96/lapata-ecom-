import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


const SingleProduct = () => {
    const data = useLoaderData()
    const {id} = useParams()
   const singledata = data.find(item => item.id === id)
const {name,img,price,rating,category,description} = singledata
   
   
    return (
        <div className='flex gap-8 mt-8  mx-auto'>
          <div className='bg-amber-50 p-8 rounded-2xl'>
             <img src={img} alt="" className='w-6/10 mx-auto rounded-2xl' />
          </div>
          <div>
            <p>{category}</p>
            <h1 className='text-3xl mb-8'>{name}</h1>
            <p>{description}</p>
            <p>{rating}</p>
            <p className='text-black font-bold'>{price} tk</p>


            <div className='flex gap-5 mt-10'>
                <button className='bg-black text-white px-4 py-2'>Add To Card</button>
                <button>Buy Now</button>
            </div>
          </div>



        </div>
    );
};

export default SingleProduct;