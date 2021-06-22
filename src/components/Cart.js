import React from 'react'
import { useSelector } from 'react-redux'
import { Button , Badge , Row, Col, Container } from 'react-bootstrap';

const Cart = () => {
    const { totalprice, totalquantity, products } = useSelector(state => state.CartReducer)


    return (
        <div className='cart__container'>

<table className="table table-hover table-sm">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody >
                {
                    products.map(prod => {
                        return (
                        <tr classNam='cart__prod ' >
                            <th scope="row"><img src={`/images/${prod.image}`} width='50px' /></th> 
                            <td>{prod.name}</td>
                            <td>{prod.price} </td>
                            <td>{prod.quantity}</td>
                        </tr>
                        )
                    })
                }
  </tbody>
</table>


<table className="table">

    <thead className='thead-dark table-sm'>
    <tr>
      <th scope="row">TOTAL QUANTITY</th>
      <th scope="row">TOTAL AMOUNT</th>
    </tr>
    </thead>

    <tbody>
    <tr>
                    <td>{totalquantity} </td>     
                    <td>${totalprice}</td>
     </tr>
    </tbody>

</table>

            {/* Without css */}

            {/* <div className='cart__tprice'>
                   Total Price : {totalprice}
            </div>
            <div className='cart__tquantity'>
                    Total Product Quantity : {totalquantity}
            </div> */}
            {/* <div>
                {
                    products.map(prod => {
                        return (<div classNam='cart__prod' >
                            <div ><img src={`/images/${prod.image}`} width='70px' /></div>
                            <div>Name : {prod.name} </div>
                            <div>Price : {prod.price} </div>
                        </div>
                        )
                    })
                }
            </div> */}
        </div>
    )
}

export default Cart
