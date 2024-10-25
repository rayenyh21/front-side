import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { GetProducts } from '../redux/slices/ProductSlice'
import ProductList from '../Components/ProductList'
import Panier from '../Components/Panier'
import './HomeStyle.css';

const Home = () => {
  const {isLoading , error , products}=useSelector(state=> state.products)
 // to import action 
   const dispatch= useDispatch()

   useEffect(()=>{
    dispatch(GetProducts())
   },[])

  return (
    <>
    <div className='hm'>
      {isLoading && <h1> isLoading</h1>}
      <ProductList products={products}/>
      {console.log(error)}
      <Panier/>
      
    </div>
    <div>
      <footer>
        2023-2024 © Copyright MyWay.tn. All Rights Reserved.
      </footer>

  </div>
    </>
  )
}

export default Home
