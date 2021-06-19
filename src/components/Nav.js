import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShopping } from "react-icons/ai";

const Nav = () => {
    return (
        <div>
            <Link to='/cart'>
                <div className='basket'>
                <AiOutlineShopping size='50'/>
                <span>5</span>
                </div>
                
            </Link>
        </div>
    )
}

export default Nav
