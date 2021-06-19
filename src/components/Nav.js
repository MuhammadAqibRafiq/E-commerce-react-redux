import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from 'react-redux';
// import CartReducer from '../store/reducer/CartReducer';

const Nav = () => {
    const {totalquantity} = useSelector(state => state.CartReducer)

    return (
        <div className='Navbar'>
            <Link to='/cart'>
                <div className='basket'>
                <AiOutlineShopping size='50'/>
                <span>{totalquantity}</span>
                </div>
                
            </Link>
        </div>
    )
}

export default Nav
