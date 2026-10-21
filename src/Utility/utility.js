import { toast } from "react-toastify";

const getProductData = () =>{
   const  getJsonData = localStorage.getItem('wishlist')
   if(getJsonData){
      const products = JSON.parse(getJsonData)
      return products;
      
   }
   return []
}

const setProductData = (id) => {
    const stringData = getProductData()
    if(!stringData.includes(id)){
       const data = [...stringData,id]
     
       const saveData = JSON.stringify(data)
       
       localStorage.setItem('wishlist', saveData)
      //  localStorage.setItem('wishlist',JSON.stringify(data))
        toast.success('Product added to wishlist!')
    }
    else{
      toast.error('Product is already in your wishlist!!')
    }

  
}

export {setProductData,getProductData}