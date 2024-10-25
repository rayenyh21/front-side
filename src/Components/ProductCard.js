import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductPanier } from '../redux/slices/PannierSlice'

const ProductCard = (product) => {
  const dispatch=useDispatch()
  return (
    <div>
      <h3> {product.name}</h3>
      <img width="30%" src={product.poster} alt ='Image product not found'/>
      <h3> {product.description}</h3>
      <h3> {product.price}</h3>
      <button onClick={()=> {dispatch(addProductPanier(product))}}>Add to card </button>
      

    </div>
  )
}

export default ProductCard
