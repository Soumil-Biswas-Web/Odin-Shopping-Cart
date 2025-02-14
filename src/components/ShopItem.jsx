import React, { useState } from 'react'
// import { addItems, removeItem } from '../data/cartItems'
import { FaRegTrashAlt } from "react-icons/fa";
import AddCart from './AddCart';
import { useSelector,useDispatch } from 'react-redux';
import { setCart } from '../store/cart';

export default function ShopItem({item, isShop = true, qty}) {

  const items = useSelector((state) => state.cartReducer.value);
  const dispatch = useDispatch();
  
  const removeItem = (id) => {
    let newitems;
    items.forEach((item, index) => {
        if (item.id === id) {
            newitems = items.toSpliced(index, 1);
        }
    })
    dispatch(setCart(newitems));
    localStorage.setItem("cart", JSON.stringify(newitems))
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='flex w-full border-b-2 p-5 hover:bg-neutral-700 duration-150'>
        <img src={item.image} alt={item.title} 
            className='rounded-lg aspect-[4/3] object-contain bg-white w-1/4 p-2'
        />
        <div className='flex flex-col text-left px-5 w-full'>
            <h3 className='text-lg font-bold'>{item.title}</h3>
            <p className='text-ellipsis overflow-hidden h-12'>{item.description}</p>
            <h2 className='text-2xl font-semibold'>{("$" + item.price)}</h2>
            {!isShop && (
              <p>{"Quantity: " + qty}</p>
            )}
            <div className="flex w-full justify-end">
              {isShop ? 
                    <button onClick={() => {setShowModal(true)}}>Add to Cart</button>
                :
                <button onClick={() => {removeItem(item.id)}}>
                  <FaRegTrashAlt />
                </button>
              }
            </div>
        </div>

        {showModal && <AddCart item={item} setter={setShowModal}/>}
    </div>
  )
}
