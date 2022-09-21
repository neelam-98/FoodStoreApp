import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Menu from "../Menu.json";
import { useDispatch } from 'react-redux';
import { addCartItem } from '../Action/actions';
import "../css/App.css";
import { Divider } from 'antd';

const MenuCardItem = () => {

  const {id} = useParams() ;
  console.log(id);

  const dispatch = useDispatch();

  const handleClick =() => {
    dispatch(addCartItem(Menu[id]))
  }

  return (
    <>
      <Header/>
      <br/>
      <br/>
        <div className='MenuCardItem'>
            <div className='leftblock'>
              <img className='menucardItem_img' src={Menu[id]?.image} alt="#"/>
            </div>
            <Divider
              type="vertical"
              style={{ height: "300px"}}
            />
            <div className='rightblock'>
              <p className="pname">{Menu[id]?.name}</p>
              <h2 className='hname'>{Menu[id]?.name}</h2>
              <h3>Price : INR {Menu[id].Price}</h3>
              {/* <p className='category'>Category : {Menu[id]?.category}</p> */}
              <p className='description'>{Menu[id]?.description}</p>
              <button className='addcart_btn' onClick={handleClick}>Add To Cart</button><br/><br/>
            </div>
        </div>
    </>
  )
}

export default MenuCardItem;
