import React from 'react'
import ShopItem from '../components/ShopItem';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export default function Shop() {
  
  const itemArray = useLoaderData() || [];

  return (
    <div className='w-full flex flex-col'>
      {itemArray.map((item) => (
        <ShopItem item={item} key={item.id}/>
      ))}
    </div>
  )
}

Shop.loader = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    // console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
}