import React,{useState} from 'react' 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { searchProduct } from '../Slices/slice';
import { useDispatch } from 'react-redux';

function Header() {
  const {cart} = useSelector((state)=>state.cartReducer)
  const {items} = useSelector((state=>state.wishReducer))

  const [key,setKey] = useState('')
  const dispatch = useDispatch()
  return (
    <>
        <div>  
        <Navbar  className="bg-primary">
        <Container> 
          <Navbar.Brand href="#home" style={{color:'whitesmoke'}}>
            <Link to={'/'} style={{textDecoration:'none',color:'whitesmoke'}}>
                <i className="fa-solid fa-cart-shopping" style={{color:'whitesmoke'}} />
                {' '}
                E-Kart
            </Link>
          </Navbar.Brand>
         <div className='d-flex'>
            <div className='d-flex'>
              <input type="text" onChange={(e)=>setKey(e.target.value)} placeholder='Search Products' className=" form-control" />
              <button className='btn btn-success me-3' onClick={()=>dispatch(searchProduct(key))}>Search</button>  
            </div> 
          <Link to={'/wish'} className='btn border-1 border-white me-3' style={{color:'whitesmoke'}} >
          <i className="fa-solid fa-heart" style={{color: "#fa0064",}} />{'  '}
            Wishlist
            <sup className='bg-dark rounded-pill p-1 ms-1'>{items?.length}</sup>
          </Link>
          <Link to={'/cart'} className='border-1 border-white btn' style={{color:'whitesmoke'}} >
          <i className="fa-solid fa-cart-shopping" style={{color: "#74C0FC",}} />{' '}
            Cart
            <sup className='bg-secondary rounded p-1 ms-1'>{cart?.length}</sup>
          </Link>
          </div>
        </Container>
      </Navbar>
        </div>
    </>
  )
}

export default Header