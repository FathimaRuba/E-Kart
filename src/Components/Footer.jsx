import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-primary p-5 container-fluid'>
        <Row className='text-white'>
          <Col md={4}>
            <h2>Ekart</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus, maxime, maiores .</p>
          </Col>
          <Col md={3} className='flex-column d-flex justify-content-center'>
            <h4>Links</h4>
            <Link to={'/'} className='text-secondary' style={{textDecoration:'none'}}>Home</Link>
            <Link to={'/wish'} className='text-secondary' style={{textDecoration:'none'}}>Wishlist</Link>
            <Link to={'/cart'} className='text-secondary' style={{textDecoration:'none'}}>Cart</Link>
          </Col>
          <Col md={5}>
            <h4>Feedback</h4>
            <input type="text" placeholder='Enter Your Feedback' className='form-control w-75' />
            <button className='btn btn-info my-2'>Send</button>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer