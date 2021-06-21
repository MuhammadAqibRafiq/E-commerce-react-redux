import React from 'react'
import { useSelector } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'
import { Card, Row ,Col } from 'react-bootstrap'



const Home = () => {
    const state = useSelector(state => state.ProductReducer.products)
    // console.log(state)
    return (

        <div className='home'>

            <Row  md={4} className="g-4">
                {
                    state.map(product => (
                        
                        <div key={product.id} className='product'>
                            <Col className='col'>
                            <Card style={{ width: '15rem' }} className='card'>

                                <Link to={`/detail/${product.id}`}   >
                                    <Card.Img variant="top" className="pic" src={`/images/${product.image}`} />
                                </Link>

                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                </Card.Body>

                                <Card.Footer>
                                    <small className="text-muted"> {currencyFormatter.format(product.price, { code: 'USD' })}</small>
                                </Card.Footer>

                            </Card>
                            </Col>
                        </div>
                    ))
                }

                            {/* without css */}
                {/* {
                    state.map(product => (
                        <div key={product.id} className='product'>
                            <div className='pro'>
                                <div className='img' >
                                
                                     <Link to={`/detail/${product.id}`}><img src= {`/images/${product.image}`} alt='' /></Link>
                                     </div>
                                 <div className='name'>
                                     {product.name}
                                     </div>  
                                 <div className='price'>
                                     {currencyFormatter.format(product.price, { code: 'USD' })}
                                     </div> 
                                <div>
                                     </div>

                            </div>
                        </div>
                    ))
                } */}
            </Row>

        </div>

    )
}

export default Home
