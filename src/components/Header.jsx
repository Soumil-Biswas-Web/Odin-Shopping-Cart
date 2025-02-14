import React, { useEffect, useState } from 'react'
import { GiShop } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {

  const [count, setCount] = useState(0);

  const items = useSelector((state) => state.cartReducer.value);

  useEffect(() => {
    setCount(items.length);
  }, [items])

  return (
    <div className='flex justify-between border-b-2'>
      <Link className='flex items-center h-16 px-5 gap-5' to={""}>
        <GiShop className='w-10 h-10'/>
        <p className='text-3xl font-bold'>Odin-Shop.com</p>
      </Link>
      <Link className='p-5 grid [grid-template-areas:"stack"]' to={"cart"}>
        <FaShoppingCart className='w-10 h-10 [grid-area:stack]'/>
        <p className='[grid-area:stack] text-black mt-1 ml-1'>{count}</p>
      </Link>
    </div>
  )
}
