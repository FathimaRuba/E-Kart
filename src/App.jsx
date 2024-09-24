import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header'
import Home from './Pages/Home'
import View from './Pages/View'
import Wish from './Pages/Wish'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';


function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/wish' element={<Wish/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
