import { createContext, useEffect, useState, ReactNode} from "react";
import {ContextStruct} from './Types'

export const DataContext= createContext<ContextStruct | null>(null)
const title = 'My Notes'


 export const ContextProvider = ({children}: {children: ReactNode}) => {
    const [search, setSearch] = useState('')
    return (
    <DataContext.Provider  value={{
        title, search, setSearch
    }}>
        {children}
    </DataContext.Provider>
    )
}



