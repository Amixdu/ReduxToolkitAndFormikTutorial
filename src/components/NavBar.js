import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { itemCount } = useSelector((store) => store.cart)
    return (
        <nav>
            <div className='nav-center'>
                <h3> Redux Toolkit </h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{itemCount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar