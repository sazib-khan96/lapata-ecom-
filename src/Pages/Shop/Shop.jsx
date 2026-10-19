import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../../Component/Product/Product';

const Shop = () => {
    const Products = useLoaderData()

    return (
       
          
           <div className='px-3 md:grid grid-cols-4 gap-5 mt-8'>
            {
                Products.map(product => <Product product={product} key={product.id}></Product> )
            }
           </div>
        
    );
};

export default Shop;