import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../../cartItems";
import { openModal } from "../modal/modalSlice";

const URL = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    itemCount: 4,
    total: 0,
    isLoading: true,
}

// export const getCartItems = createAsyncThunk('cart/getCartItems',() => {
//     return fetch(URL).then(res => res.json()).catch((err) => console.log(err))
// })

export const getCartItems = createAsyncThunk('cart/getCartItems', async(someData, thunkAPI) => {
    try {
        // thunkAPI.dispatch(openModal())
        const resp = await axios(URL)
        return resp.data
    } catch (err) {
        console.log(err)
    }
})

const cartSlice = createSlice({
    name: 'cart1',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cartItems = [];
        },
        removeItem:(state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item)=>item.id !== itemId)
        },
        change:(state, action) => {
            const itemId = action.payload.id
            const item = state.cartItems.find((item) => item.id === itemId)
            action.payload.up ? item.amount += 1 : item.amount -= 1
        },
        calculateTotals:(state)=> {
            let itemCnt = 0
            let tot = 0
            state.cartItems.forEach((item) => {
                itemCnt += item.amount
                tot += item.amount * item.price
            })
            state.itemCount = itemCnt
            state.total = tot
        }
    },
    extraReducers:{
        [getCartItems.pending] : (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled] : (state, action) => {
            state.cartItems = action.payload
            state.isLoading = false
        },
        [getCartItems.rejected] : (state) => {
            state.isLoading = false
        }
    }
})

// console.log(cartSlice)
export const { clearCart, removeItem, change, calculateTotals } = cartSlice.actions

export default cartSlice.reducer;