import { useContext } from 'react'
import {ContextStruct} from '../utils/Types'
import {DataContext} from '../utils/ContextProvider'
const SearchNotes = () => {
    const  {search, setSearch} = useContext(DataContext) as ContextStruct
  return (
   
    <form>
        <input 
        type="text" 
        required
        placeholder='searchNotes'
        className=' outline-none px-4 rounded-xl'
        value = {search}
        onChange={(e)=> setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchNotes