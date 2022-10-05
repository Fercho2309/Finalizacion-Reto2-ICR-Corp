import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login/> }/>
      <Route path='/Menu' element={ <Menu/> }/>
    </Routes>
  </BrowserRouter>
  )

}

export default App
