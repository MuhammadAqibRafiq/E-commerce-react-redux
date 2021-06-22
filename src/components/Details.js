import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button , Badge , Row, Col, Container } from 'react-bootstrap';

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducer)
    const [incQuantity, setincQuantity] = useState(1)
    const decQuantity = () => {
        if (incQuantity > 1) {
            setincQuantity(incQuantity - 1)
        }
    }
    console.log(product)

    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])

    return (
        <Container className='detail__container'>
 
            <div className='detail'>
                <Row className="g-5">
               
                   
                        <div className='image-detail' >
                        <Col className='col__second'>
                            <img src={`/images/${product.image}`} alt='' width='300px' />
                             </Col>
                        </div>
                   

                    <Col className="col__third">

                        <div className='name-detail'>
                            <h2>{product.name}</h2>
                        </div>

                        <div className='price-detail'>
                            Price : <span id='price-detail'>${product.price}</span>
                        </div>

                            <div className='desc'>
                                {product.desc}
                            </div>

                        <div className='quantity-detail d-flex justify-content-center'>
                            <Button variant="danger" onClick={decQuantity}>
                                Inc <Badge variant="light">-</Badge>
                            </Button>
                            <span id='incQuan'>{incQuantity}</span>
                            <Button variant="primary" onClick={() => setincQuantity(incQuantity + 1)}>
                                Dec <Badge variant="light">+</Badge>
                            </Button>                   

                        </div>

                        <div className='Add d-flex justify-content-center'>
                            <Button variant="light" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, incQuantity } })}>ADD TO CART</Button>
                    </div>
                       
                    </Col>
                </Row>
                </div> 

          
        </Container>
    )
}
export default Details;
