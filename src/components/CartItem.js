import React from 'react'
import { ChevronUp, ChevronDown } from '../icons'
import { removeItem, change } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch()
    return (
        <div className='cart-item'>
            <img src={img} alt={title} />

            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
            </div>

            <div>
                <button className='amount-btn' onClick={() => dispatch(change({ id: id, up: true }))}>
                    <ChevronUp />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={() => {
                        if (amount <= 1){
                            dispatch(removeItem(id))
                            return
                        }
                        dispatch(change({ id: id, up: false }))
                    }}>
                    <ChevronDown />
                </button>
            </div>
        </div>
    )
}

export default CartItem