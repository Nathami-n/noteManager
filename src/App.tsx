import {Header} from './components'
import {ContextProvider} from './utils/ContextProvider'

const App = () => {
  return (
    <main className='md:w-[60%] w-[80%] mx-auto border border-black h-[99vh] overflow-y-auto'>
    <ContextProvider>
      <Header/>
    </ContextProvider>
    </main>
  )
}

export default App