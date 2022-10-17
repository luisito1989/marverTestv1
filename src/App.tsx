import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./components/main/Main"
import Detail from './components/detail/Detail'
import { AppProvider } from './context/AppProvider'

const App = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/details/:id' element={<Detail/>} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
