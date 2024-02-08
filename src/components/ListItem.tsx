import React from 'react'
import {FaEdit} from 'react-icons/fa'
const ListItem = ({item}) => {
    const handleEdit = (e) => {
        console.log(e)
    }
  return (
    <li className='flex flex-col justify-start gap-5 w-[90%] mx-auto border rounded-sm border-gray-700 mt-5 p-4'>
        <p className='font-bold text-3xl'>{item.id}</p>
        <p>{item.value}</p>

        <FaEdit role='button' onClick={()=> handleEdit(e)}/>
    </li>
  )
}

export default ListItem