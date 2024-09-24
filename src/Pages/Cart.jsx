import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { removeFromCart } from '../Slices/cartSlice'
import { useDispatch } from 'react-redux'
import { incrementQuantity } from '../Slices/cartSlice'
import { decrementQuantity } from '../Slices/cartSlice'
import { checkoutCart } from '../Slices/cartSlice'

function Cart() {

  const dispatch= useDispatch()
  const nav=useNavigate()

  const {cart} = useSelector((state)=>state.cartReducer)

  const handleToast=()=>{
    dispatch(checkoutCart())
    toast.success('Order Completed')
    nav('/')
  }

  return (
    <>
    <div className='container-fluid p-3'>
      <Row className='m-3'>
        <Col sm={12} md={8}>
      {
        cart?.length>0 ?
        <table className='table table-bordered border shadow border-2 border-dark rounded-5'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart?.map(item=>(
<tr>
            <td>{item?.id}</td>
            <td>{item?.title}</td>
            <td>
              <img src={item?.thumbnail} alt="" />
            </td>
            <td>{item?.price}</td>
            <td className='d-flex'>
              <button className='btn' onClick={()=>{dispatch(incrementQuantity(item?.id))}}>+</button>
              <input type="text" className='w-25 form-control' value={item?.quantity} />
              <button className='btn' onClick={()=>{dispatch(decrementQuantity(item?.id))}}>-</button>
            </td>
            <td>
              <button className='btn' onClick={()=>{dispatch(removeFromCart(item?.id))}}>
            <i className="fa-solid fa-trash" style={{color: "#ff0000",}} />
            </button>
            </td>
          </tr>
            ))
          }
        </tbody>
      </table>
      :
      <h3>Add Products to Cart</h3>
      }
     
      </Col>
      <Col sm={12} md={4}>
        <div className='border shadow rounded-4 border-2 p-5 border-dark'>
          <h4>Total Items: {cart.length}</h4>
          <h3>Total Amount: {cart?.reduce((prev,item)=>prev+(item?.price*item?.quantity),0).toFixed(2)}</h3>
          <div className='my-3 d-grid' >
            <button className='btn btn-success' onClick={handleToast}>CheckOut</button>
          </div>
        </div>
        <Link className='btn btn-primary my-3' to={'/'}>Shop More</Link>
      </Col>
      </Row>
    </div>
    </>
  )
}

export default Cart