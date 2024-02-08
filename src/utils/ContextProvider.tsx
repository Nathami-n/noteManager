import { createContext, useEffect, useState, ReactNode } from "react";
import { ContextStruct, obj} from './Types'
import axios from "axios";


export const DataContext = createContext<ContextStruct | null>(null)
const title = 'My Notes'
const BASE_URL = 'http://locahost:3000/'


export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState('')
    const [url, setUrl] = useState('notes');
    const [error, setError] = useState<object | null>(null)
    const [items, setItems] = useState<obj | []>([{id:2, value:'loram ispupsniidj'}, {id:4, value:'lorem ipsun lddhd'}, {id:5, value:'loreemddjiidjigihg'}])

    useEffect(() => {
        const fetchData =  async (uri) => {
            try {
                
                const response = await fetch(uri);
                if(!response.ok) throw new Error('error')
                const data = await response.json();
                setItems(data);
            } catch (err) {
               setError(err);
            } 
        }
        fetchData(`${BASE_URL}${url}`)

    }, [url])

    console.log(items)

    return (
        <DataContext.Provider value={{
            title, search, setSearch, items
        }}>
            {children}
        </DataContext.Provider>
    )
}



