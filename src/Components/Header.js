import React from 'react';
import "../css/App.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const menuState = useSelector((state) => state?.AddCartReducer?.MenuList)
  console.log("header menustate", menuState)
  
  return (
   <>
        <div className='header'>
            <div className='foodblock'> 
            <Link to="/">           
                <img className='foodorder' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_ID456DlQVKbeN4n3zLvwdI-qvd138opAQ&usqp=CAU' alt='food order pic'/>
              </Link>
                <h1 className='foodmohalla'>Food Mohalla</h1>
            </div>
          {/* <div className='cartblock'> */}
            <div className='cart_length'>{menuState.length}</div >
            <Link to="/cart">
              <img className='cart_icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-goUja4moCQOVBYfUIQ3SB25ouyKWGcexQ&usqp=CAU'/>
            </Link>
        </div>
        {/* </div> */}
   </>

  )
}

export default Header;
