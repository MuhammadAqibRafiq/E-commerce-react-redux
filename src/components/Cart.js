import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Button , Badge } from 'react-bootstrap';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Cart = () => {
    const { totalprice, totalquantity, products } = useSelector(state => state.CartReducer)
    // console.log(products)
    const dispatch = useDispatch();

    return (
        <div className='cart__container'>

            {products.length > 0 ? <>

                <table className="table table-hover table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Inc/Dec</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            products.map((product,id) => {
                                return (
                                    <tr className='cart__prod ' key={id} >
                                        <th scope="row"><img src={`/images/${product.image}`} width='50px' /></th>
                                        <td>{product.name}</td>
                                        <td>${product.price} </td>
                                        <td>{product.quantity}</td>
                                        <td> <div className='quantity-detail-cart'>
                                            <Button variant="danger" onClick={()=>dispatch({type:'DEC' , payload: product.id})} >
                                                Inc <Badge variant="light">-</Badge>
                                            </Button>
                                            <span id='incQuan'>{product.quantity}</span>
                                            <Button variant="primary" onClick={()=>dispatch({type:'INC' , payload: product.id})} >
                                                Dec <Badge variant="light">+</Badge>
                                            </Button>
                                        </div></td>
                                        <td onClick={()=> dispatch({type:"DELETE", payload: product.id})}>< DeleteForeverIcon/></td>

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

            </> : "Your Cart Is Empty"}

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
