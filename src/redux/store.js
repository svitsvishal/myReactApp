import cartRedux from "./cartRedux";
import {configureStore} from '@reduxjs/toolkit'


export default configureStore({
    reducer: {cart: cartRedux}
})