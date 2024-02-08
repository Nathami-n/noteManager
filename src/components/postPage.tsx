import { useContext } from "react"
import { DataContext } from "../utils/ContextProvider"
import { ContextStruct } from "../utils/Types"
import { useParams } from "react-router-dom"

const PostPage = () => {
    const {items} = useContext(DataContext) as ContextStruct
    const {id} = useParams()
    const item = items.find(item => item.id.toString() === id);
  return (
    <section>
        <p>{item.value}</p>
    </section>
  )
}

export default PostPage