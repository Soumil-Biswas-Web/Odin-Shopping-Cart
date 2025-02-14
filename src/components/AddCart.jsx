import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setCart } from '../store/cart';

export default function AddCart({item, setter}) {

    const items = useSelector((state) => state.cartReducer.value);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(items);
    }, [items])

    const [input, setInput] = useState(1);
    
    const qtyInc = () => {
        setInput(input+1);
    }

    const qtyDec = () => {
        setInput(input-1);
    }

    const addToCart = () => {
        const updatedCart = items.some(cartItem => cartItem.id === item.id)
        ? items.map(cartItem => 
            cartItem.id === item.id 
                ? { ...cartItem, input: cartItem.input + input } 
                : cartItem
          )
        : [...items, { id: item.id, input }];

        dispatch(setCart(updatedCart));
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.log(updatedCart);
        setter(false);
    }

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
        <div className='flex flex-col w-1/2 items-center bg-neutral-800 rounded-2xl p-5'>
            <img src={item.image} alt={item.title} 
                className='rounded-lg aspect-[4/3] object-contain bg-white w-1/2 p-2'
            />
            <h3 className='my-5 text-ellipsis'>{item.title}</h3>

            <div className='flex items-center gap-3'>
                <button onClick={qtyDec}>-</button>
                <input type="number" value={input} className='w-15 h-full border-2 text-center'/>
                <button onClick={qtyInc}>+</button>

                <button onClick={addToCart}>Add to Cart</button>
                <button onClick={() => {setter(false)}}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
