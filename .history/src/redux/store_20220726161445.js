import cartredux from "./cartredux.js";
import {configureStore} from '@reduxjs/toolkit'


export default configureStore({
    reducer: {cart: cartredux}
})