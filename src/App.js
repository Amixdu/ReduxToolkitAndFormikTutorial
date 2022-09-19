import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import FormPage from './pages/FormPage';
import ReduxPage from './pages/ReduxPage';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if(isLoading){
    return (
      <div className='loading'>
        <h1>Loading ...</h1>
      </div>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ReduxPage />} />
          <Route exact path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
