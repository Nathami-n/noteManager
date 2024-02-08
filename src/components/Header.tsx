import { SearchNotes } from '.'
import { DataContext } from '../utils/ContextProvider'
import { useContext } from 'react'
import { ContextStruct } from '../utils/Types'
import { Outlet } from 'react-router-dom'


const Header = () => {
  const { title } = useContext(DataContext) as ContextStruct
  return (
    <><nav className='w-full bg-gradient-to-r from-emerald-200 to-blue-900 flex items-center p-5 sticky top-0 z-5 '>
      <p className='text-2xl text-white cursor-pointer flex-1'>{title}</p>
      <SearchNotes />

    </nav><Outlet /></>
  )
}

export default Header