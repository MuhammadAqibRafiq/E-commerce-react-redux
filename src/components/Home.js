import React from 'react'
import { useSelector } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'

const Home = () => {
    const state = useSelector(state => state.ProductReducer.products)
    // console.log(state)
    return (
        <div>
                <h3>Home</h3>
            <div className='product'>
                {
                    state.map(product => (
                        <div key={product.id}>
                            <div className='products'>
                                <div className='img' >
                                     <Link to={`/detail/${product.id}`}><img src= {`/images/${product.image}`} alt='' width='200px' /></Link>
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
                }
            </div>
        </div>
    )
}

export default Home
