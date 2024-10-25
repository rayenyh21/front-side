import {configureStore} from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import ProductSlice from './slices/ProductSlice'
import PannierSlice from './slices/PannierSlice'
import OrderSlice from './slices/OrderSlice'


export default  configureStore ({reducer : {user:userSlice , products: ProductSlice, panier:PannierSlice, order:OrderSlice}})
// if ther's a lot of reducers we add , after userSlices 