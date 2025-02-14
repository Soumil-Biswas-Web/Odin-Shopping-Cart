import React from 'react'
import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'
import HomeItemCol from '../components/HomeItemCol';

export default function Home() {

  const itemArray = useLoaderData() || [];
  // console.log(itemArray);

  let jewelery = [];
  let electronics = [];
  let mensCloth = [];
  let womensCloth = [];

  for (let item of itemArray) {
    if (item.category === "jewelery") {
      jewelery.push(item);
    }
    if (item.category === "electronics") {
      electronics.push(item);
    }
    if (item.category === "men's clothing") {
      mensCloth.push(item);
    }
    if (item.category === "women's clothing") {
      womensCloth.push(item);
    }
  }

  let itemLoc = [jewelery, electronics, mensCloth, womensCloth];

  return (
    <div className='flex flex-col items-center gap-5 h-full'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='font-bold'>Helo, Fren</h1>
        <h2 className='text-3xl font-bold'>It's time to Consoom.</h2>
        <div className='flex gap-5 justify-center'>
          <Link to={"shop"}>
            <button>All items</button>
          </Link>
          <Link to={"cart"}>
            <button>My Cart</button>
          </Link>
        </div>
      </div>

      <div className='m-5 p-5 bg-neutral-600 rounded-4xl w-[95%] h-full flex justify-evenly'>
        {itemLoc.map((category, index) => (
          <HomeItemCol category={category} key={(index + "_")}/>          
        ))}
      </div>
    </div>
  )
}

Home.loader = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    // console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
}