import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Navbar, Form, InputGroup } from 'react-bootstrap';
import logo from './logo.jpg'

function Nav() {
  const { totalquantity } = useSelector(state => state.CartReducer)

  return (
    <div className='Nav'>
      
      <Navbar className="bg-warning justify-content-between">
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><img src={logo} width='100px' height='50px' /></InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Form>
        <Form inline>
          <div className='basket'>
          <Link to='/cart'>
             <span>
                 <AiOutlineShopping size='50' />
             {totalquantity}</span>
             </Link>
             </div>
        </Form>
      </Navbar>
      
    </div>

    // <div className='Navbar'>
    //     <h3>SHOPPING</h3>
    //     <Link to='/cart'>

    //         <div className='basket'>
    //         <span>
    //             <AiOutlineShopping size='50' />
    //         {totalquantity}</span>
    //         </div>

    //     </Link>
    // </div>
  )
}

export default Nav
