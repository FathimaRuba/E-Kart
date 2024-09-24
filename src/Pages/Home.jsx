import React,{useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductThunk } from '../Slices/slice';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { nextPage,prevPage } from '../Slices/slice';

function Home() {

  const dispatch = useDispatch()

  const {products,loading,error,currentPage,productsPerPage} = useSelector((state)=>state.productReducer)

  useEffect(()=>{
    dispatch(fetchProductThunk())
    console.log(products);
  },[])

 
  const totalPages = Math.ceil(products?.length/productsPerPage)
  const lastIndex = currentPage*productsPerPage
  const firstIndex = lastIndex-productsPerPage
  const visibleProducts = products.slice(firstIndex,lastIndex) 

  const handleNext = () => {
    if(currentPage<totalPages){
      dispatch(nextPage())
    }
  }

  const handlePrev = () => {
    if(currentPage>1){
      dispatch(prevPage())
    }
  }

  return (
    <>
    
    <header className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                <Carousel>
      <Carousel.Item>
        <img className='img-fluid'  height={'300px'}
        src='https://t4.ftcdn.net/jpg/02/90/43/57/360_F_290435760_M4HMzXeulRDdHe9xc5KtaL9cnnkUYLjk.jpg'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid' height={'300px'} 
        src='https://t4.ftcdn.net/jpg/02/90/43/57/360_F_290435760_M4HMzXeulRDdHe9xc5KtaL9cnnkUYLjk.jpg'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid'   height={'200px'} 
        src='https://t4.ftcdn.net/jpg/02/90/43/57/360_F_290435760_M4HMzXeulRDdHe9xc5KtaL9cnnkUYLjk.jpg'
        />
      </Carousel.Item>
    </Carousel>
                </div>
            </div>
    </header>

    
          <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                  loading ?
                  <h3 >
                  <Spinner animation="border" role="status">
                  </Spinner>
                  <span >Loading...</span>
                  </h3>
                  :
                  (
                    error?.length > 0 ?
                    <h3>{error}</h3>
                    :
                   <>
                    {
                      visibleProducts?.map(item=>(
                        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={item?.thumbnail} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{item?.title}</h5>
                                    ${item?.price}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  <Link to={`/view/${item?.id}`} className='btn btn-primary'>View More</Link>
                                  </div>
                            </div>
                        </div>
                    </div>
                      ))
                    }
                    </>
                  )
                }
                    </div>
            </div>
        </section>
      <div className='mt-4 mb-3 d-flex justify-content-center'>
        <div>
                <button className='btn' onClick={handlePrev}>
                <i className="fa-solid fa-angles-left" />
                </button>
                {' '}
                {currentPage}/{totalPages}
                {' '}
                <button className='btn' onClick={handleNext}>
                <i className="fa-solid fa-angles-right" />
                </button>
        </div>
      </div>
        


                
    </>
  )
}

export default Home