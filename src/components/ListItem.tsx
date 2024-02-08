import React, { ReactNode } from 'react'
import {FaBookReader} from 'react-icons/fa'
import { ItemProps } from '../utils/Types'

const ListItem = ({item}) => {
  const handleRead = ()=> {
  
  }
  return (

    <li className='flex flex-col justify-start gap-5 w-[90%] mx-auto border  rounded-lg shadow-lg shadow-gray-300 hover:scale-105 transition-all cursor-pointer mt-5 p-4'>
        <p className='font-bold text-3xl'>{item.id}</p>
        <p>{item.value}</p>
    <FaBookReader role='button' onClick={handleRead}/>
    </li>
  )
}

export default ListItem