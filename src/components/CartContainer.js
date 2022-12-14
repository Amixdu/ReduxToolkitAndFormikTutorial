import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'
import { useNavigate } from 'react-router-dom'

export default function CartContainer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cartItems, itemCount, total } = useSelector((state) => state.cart)

    if (itemCount < 1) {
        return (
            <p> Cart Empty </p>
        )
    }

    else {
        return (
            <section className='cart'>
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>

                <footer>
                    <hr />
                    <div className='cart-total'>
                        <h4>
                            total <span>${total.toFixed(2)}</span>
                        </h4>
                    </div>
                    <button className='btn clear-btn' onClick={() => dispatch(openModal())}>clear cart</button>
                    {'  '}
                    <button className='btn confirm-btn' onClick={() => navigate('/form')}>forms</button>
                </footer>
            </section>
        )
    }    
}
