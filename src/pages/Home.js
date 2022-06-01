import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../api/category'
import Header from '../components/Header'
function Home() {

const [categories,setCategories] = useState()

const init = async () => {
  const result = await getAllCategories();
  setCategories(result.data)
  console.log(result.data);
}
console.log(categories);

useEffect(() => {
  init()
},[])




  return (
   
    <div className='container'>
       <Header/>
        <div className='display-5 text-center'> ALL PRODUCTS</div>
     <Link to = "/product">
      <button className='btn btn-info'>Show all Products</button>
      </Link>
      
      <div className='row m-2 '>
       {categories?.map((category) => (
         <div className='col'>
         {console.log(category.id)}
       
         <div className=' col card bg-dark text-white m-2' key= {category.id}>
           <Link to = '/product'>
           <div className='p-5'>
           {category.name}
           </div>
           
           </Link>
           </div>
        </div>
         
       ))}
      </div>


      


    </div>
  )
}

export default Home;
