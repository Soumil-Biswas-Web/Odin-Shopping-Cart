import React, { useState } from 'react'
import AddCart from './AddCart';

export default function HomeItemCol({category}) {

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const [showModal, setShowModal] = useState(false);

  return (
    <div className='m-5 p-5 bg-[var(--background-color)] rounded-4xl flex-1 w-[20%] flex flex-col gap-10'>
        <h2 className='text-3xl font-semibold'>{capitalizeFirstLetter(category[0].category)}</h2>
        <div className='flex flex-col gap-5 justify-evenly flex-1'>
            {category.slice(0,2).map((item, index2) => (
                <div key={index2} className='hover:bg-neutral-500 rounded-lg duration-150 p-2' onClick={() => {setShowModal(true)}}>
                    <img src={item.image} alt={item.title} className='rounded-lg aspect-[4/3] object-contain bg-white'/>
                    <p>{item.title}</p>

                    {showModal && <AddCart item={item} setter={setShowModal}/>}
                </div>
            ))}
        </div>
    </div>
  )
}
