import React,{useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch , useSelector } from 'react-redux';

const Details = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductReducer)
    console.log(product)
  useEffect(() => {
     dispatch({type:'PRODUCT',id})
  }, [id])
  
    return (
        <div>
           <h1>DETAILS</h1> 
           <div>
               <div className='image'>
                   <img src={`/images/${product.image}`} alt='' />
               </div>
               <div className='name'>
               {product.name}
               </div>
               <div className='price'>
               {product.price}
               </div>
              
           </div>
        </div>
    )
}
export default Details
