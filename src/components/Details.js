import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { useDispatch , useSelector } from 'react-redux';

const Details = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductReducer)
    const [incQuantity, setincQuantity] = useState(1)
    const decQuantity = () => {
        if (incQuantity > 1){
            setincQuantity(incQuantity-1)
        }
    }
    console.log(product)

  useEffect(() => {
     dispatch({type:'PRODUCT',id})
  }, [id])
  
    return (
        <div className='detail__container'>

           <h1>DETAILS</h1> 

           <div className='detail'>

               <div className='image-detail' >
                   <img src={`/images/${product.image}`} alt='' width='250px' />
               </div>

               <div className='name-detail'>
               {product.name}
               </div>

               <div className='price-detail'>
               ${product.price}
               </div>

               <div className='quantity-detail'>
                   <button onClick={decQuantity}>-</button>  {incQuantity}  <button onClick={()=> setincQuantity(incQuantity+1)}>+</button>
               </div>
               <div className='Add'>
                   <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,incQuantity}})}>ADD TO CART</button>
               </div>
              
           </div>
        </div>
    )
}
export default Details;
