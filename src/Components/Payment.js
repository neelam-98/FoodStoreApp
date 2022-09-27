import React from "react";
import Header from "./Header";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItem, deleteCartItem, totalPrice } from "../Action/actions";

const stripePromise = loadStripe("pk_test_51LmZZxSJwi24df8JJhIgXg79aF8KCM4NGqp6D8HfbD4ODxegEBG3RhRrwCFJj47P4XlzjGGc3wdJf4A5Dm9a4YW200wE90hT7A");

const Payment = () => {

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
    <button  className='clearbtn'  onClick={() => {clearClick()}}>clear cart</button>
    <br/>
    <br/>
      {
        menuState && menuState?.length > 0 && menuState?.map((menuItem)=>{
          console.log("menuItem",menuItem)
          const {id, name, image, Price} = menuItem?.MenuList
          return(
              <>
                <div className='cart'>
                  <div className='cart_left_block'>
                    <img src={image} alt="#" width={580} height={400}/> 
                  </div>
                  <div className='cart_right_block'>
                    <p className="pname">{name}</p>
                    <h1 className='hname'>{name}</h1>
                    <h3>INR : {Price}</h3>
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
                    <button className='deletebtn' onClick={()=>dispatch(deleteCartItem(menuItem))}>Delete from Order</button> 
                    <br/>
                    <br/>
                    
                  </div>
                </div>
                <br/>        
              </>
          );
        })
      }
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
    <br/>
    </>
  )
}

export default Payment;
