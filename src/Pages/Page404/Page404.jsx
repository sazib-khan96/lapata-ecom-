import React from 'react';
import { useNavigate } from 'react-router';

const Page404 = () => {
    const navigate = useNavigate()
    const backToHomeHandle = () =>{
        navigate('/')
    }
    return (
        <div className='flex items-center flex-col justify-center h-screen'>
           <div className='p-12 border border-gray-200 shadow-sm rounded-2xl'>
             <h1 className='text-3xl my-5'>Oops! Page Not Found</h1>
            <h3>Don't worry, let's get you back on track.</h3>
            <button onClick={backToHomeHandle} className='bg-gray-800 px-4 py-2 text-white mt-5 mx-auto'>Back to Home</button>
           </div>
        </div>
    );
};

export default Page404;