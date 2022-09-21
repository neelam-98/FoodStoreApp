import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItem, deleteCartItem, totalPrice } from '../Action/actions';
import Header from './Header';
import "../css/App.css"


const Cart = () => {
  const dispatch = useDispatch () ;
  const menuState = useSelector((state) => state?.AddCartReducer?.MenuList)
  console.log("Reducers state",menuState);

  const clearClick =() => {
    dispatch(clearCartItem(menuState))
  }


  const handleChange = ( quantity, id ) => {
    dispatch(totalPrice( quantity, id ))
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
          const {id, name, image} = menuItem?.MenuList
          return(
              <>
                <div className='cart'>
                  <div className='cart_left_block'>
                    <img className='image' src={image} alt="#"/> 
                  </div>
                  <div className='cart_right_block'>
                    <p className="pname">{name}</p>
                    <h1 className='hname'>{name}</h1>
                    <h2>Total Price : {menuItem?.Price}</h2>
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
                  </div>
                </div>
                <br/>        
              </>
          );
        })
      }
    <br/>
    </>
  )
 }
export default Cart;
