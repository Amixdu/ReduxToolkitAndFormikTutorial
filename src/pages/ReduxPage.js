import React from 'react'
import Modal from '../components/Modal'
import Navbar from '../components/NavBar'
import CartContainer from '../components/CartContainer'
import { useSelector } from 'react-redux'

const ReduxPage = () => {
    const { isOpen } = useSelector((state) => state.modal)
    return (
        <main>
            {isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </main>
    )
}

export default ReduxPage
