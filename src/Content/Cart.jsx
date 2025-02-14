import React, { useEffect, useState } from 'react'
import { cartItems } from '../data/cartItems'
import ShopItem from '../components/ShopItem';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Cart() {
    
  const items = useSelector((state) => state.cartReducer.value);

  const itemArray = useLoaderData() || [];  // Items fetched from API

  let [cartArray, setCartArray] = useState([]); // Resultant display of items in the cart page

  useEffect(() => {
    setCartArray(
      items.map(item => {
        const index = itemArray.findIndex(arrayItem => arrayItem.id === item.id);
        return itemArray[index];
      }).filter(item => item !== undefined) // Filter out undefined values
    );
  }, [items])

  if (cartArray.length <= 0) {
    return (
      <div>
        Lotta heat in the opp bloc, Arthur. You sure you bought the goods?
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col'>
      {cartArray.map((item, index) => (
        <ShopItem item={item} key={item.id} isShop={false} qty={items[index].input}/>
      ))}
    </div>
  )
}

Cart.loader = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    // console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
}