import React from 'react';
import { Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItem, deleteCartItem, totalPrice } from '../Action/actions';
import Header from './Header';
import "../css/App.css"
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const dispatch = useDispatch () ;
  const navigate = useNavigate();
  const menuState = useSelector((state) => state?.AddCartReducer?.MenuList)
  console.log("Reducers state",menuState);

  const clearClick =() => {
    dispatch(clearCartItem(menuState))
  }

   const handleChange = ( quantity, id ) => {
    dispatch(totalPrice( quantity, id ))
  }
  
  const orderNowClick = () => {
    navigate('/payment');
  }

  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
      {
        menuState && menuState?.length > 0 && menuState?.map((menuItem)=>{
          console.log("menuItem",menuItem)
          const {id, name, image, Price, description} = menuItem?.MenuList
          return(
              <>
                <div className='cart'>
                  <div className='cart_left_block'>
                    <img src={image} alt="#" width={580} height={380}/> 
                  </div>
                  <Divider
                    type="vertical"
                    style={{ height: "380px"}}
                  />
                  <div className='cart_right_block'>
                    <p className="pname">{name}</p>
                    <h1 className='hname'>{name}</h1>
                    <h3>INR : {Price}</h3>
                    <p>{description}</p>
                    <h2>Total Price :Rs {menuItem?.Price}</h2>
                    <select onChange = { (e) => handleChange(e.target.value,id)}>
                      <option value="quantity" >Select Quantity</option>
                      <option value="1" >1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                    </select>
                    <br/>
                    <br/>
                    <button className='deletebtn' onClick={()=>dispatch(deleteCartItem(menuItem))}>Delete from Cart</button> 
                    <br/>
                    <br/>
                  </div>
                </div>
                <br/>        
              </>
          );
        })
      }
    <br/>
    <div className='ordernowDiv'>
      <button  className='clearbtn'  onClick={() => {clearClick()}}>clear cart</button>
      <br/><br/>
      <button onClick={() => orderNowClick()} className="ordernow">Order Now</button>
    </div>
    </>
  )
 }
export default Cart;
