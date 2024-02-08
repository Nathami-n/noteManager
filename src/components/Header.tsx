import { SearchNotes } from '.'
import {DataContext} from '../utils/ContextProvider'
import { useContext } from 'react'
import { ContextStruct } from '../utils/Types'


const Header = () => {
    const {title} = useContext(DataContext) as ContextStruct
  return (
    <nav className='w-full bg-blue-700 flex items-center p-5 sticky top-0 '>
        <p className='text-2xl text-white cursor-pointer flex-1'>{title}</p>
        <SearchNotes/>

    </nav>
  )
}

export default Header