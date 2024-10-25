import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateOrder } from '../redux/slices/OrderSlice'
import ProductPanierCard from './ProductPanierCard'
import ProductList from './ProductList'

const Panier = () => {
    const {products} =useSelector(state=> state.panier)
    const  dispatch=useDispatch()
  return (
    <div>
        {
         products.map((el)=> <ProductPanierCard product ={el}/>)
        }
        <button onClick={()=>dispatch(CreateOrder({ProductList:products}))}> Add All orders</button>
    </div>
  )
}

export default Panier
