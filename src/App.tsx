import { AppProps } from './utils/Types.tsx'
import { Outlet } from "react-router-dom"

const App = ({children}: AppProps) => {
  return (
    <main className='md:w-[60%] w-[80%] mx-auto border shadow-xl rounded-xl shadow-gray-300  h-[99vh] overflow-y-auto'>
      {children}
    </main>
  )
}

export default App