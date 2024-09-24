import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFromWishlist } from '../Slices/wishSlice'
import { addToCart } from '../Slices/cartSlice'

function Wish() {

  const dispatch = useDispatch()
  
  const {items} = useSelector((state)=>state.wishReducer)


  const handleCart = (data) => {
    dispatch(addToCart({...data}))
    dispatch(removeFromWishlist(data.id))
  }
  return (
    <>
      <h2 className='text-center my-5'>WishList</h2>
      <div className='row container-fluid p-5'>
        {
          items.length > 0 ?
            items.map(wish=>(
                    <div className="col-3 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={wish?.thumbnail} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{wish?.title}</h5>
                                    {wish?.price}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  <button className='btn' onClick={()=>{dispatch(removeFromWishlist(wish.id))}}>
                                  <i className="fa-solid fa-heart-circle-xmark" style={{color: "#b42222",}} />
                                  </button>
                                  <button className='btn'  onClick={()=>{handleCart(wish)}}>
                                  <i className="fa-solid fa-cart-plus me-2" />
                                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
            ))
          :
          <h3>Nothing Added to Wishlist</h3>
        }
      
                    </div>
    </>
  )
}

export default Wish