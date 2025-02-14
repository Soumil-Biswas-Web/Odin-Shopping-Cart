import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { setCart } from './store/cart';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // const storedCart = [];
    dispatch(setCart(storedCart));
  }, [dispatch]); // Run only on mount

  return(
    <div className='flex flex-col w-full min-h-full justify-between'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
