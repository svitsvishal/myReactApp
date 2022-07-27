import cartredux from "./cartredux";
import {configureStore} from '@reduxjs/toolkit'


export default configureStore({
    reducer: {cart: cartredux}
})