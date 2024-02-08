import { useContext } from "react"
import { DataContext } from "../utils/ContextProvider"
import { ContextStruct, Item } from "../utils/Types"
import { ListItem } from "."

const Body = () => {
    const {items} = useContext(DataContext) as ContextStruct
    console.log(items)
  return (
    <main>
      <ul>
        {items.map((item:Item ,index:number) => <ListItem item={item} key ={index}/>)}
      </ul>
    </main>
  )
}

export default Body