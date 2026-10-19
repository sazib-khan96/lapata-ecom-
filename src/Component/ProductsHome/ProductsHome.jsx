import React from 'react';
import { use } from 'react';
import Product from '../Product/Product';
const ProductsHome = ({productsData}) => {
    //get all products useing "use"
    const products = use(productsData)

    console.log(products)
    return (
        <div className='mx-auto py-8 text-center'>
            <h1 className='text-3xl py-3'>Exclusive Three-Piece Collection</h1>
            <p>Upgrade your wardrobe with our latest, premium-quality Salwar Kameez sets.</p>
            {/* all product data maping and thats why i will get a single object */}
            <div className='grid grid-cols-4 gap-5 mt-8'>
              {
                products.map( product => <Product product={product} ></Product>)
              }
            </div>
        </div>
    );
};

export default ProductsHome;