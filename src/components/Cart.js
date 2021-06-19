import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {totalprice,totalquantity,products} = useSelector(state=>state.CartReducer)
    return (
        <div className='cart__container'>

            <div className='cart__tprice'>
                   Total Price : {totalprice}
            </div>
            <div className='cart__tquantity'>
                    Total Product Quantity : {totalquantity}
            </div>
            <div>
                {
                    products.map(prod =>{
                        return(<div classNam='cart__prod' >
                        <div ><img src={`/images/${prod.image}`} width='70px'/></div>
                        <div>Name : {prod.name} </div>
                        <div>Price : {prod.price} </div> 
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart
