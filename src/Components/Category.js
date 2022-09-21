import React, { useState } from 'react';
import Menu from "../Menu.json";
import MenuCard from './MenuCard';

const Category = () => {
    const [menuDtata, setMenuData] = useState(Menu);
    console.log("menuDtata",menuDtata)

    const filterItem =( categoryItem ) =>{
        const updatedItem = Menu.filter((curElem) => {
            console.log("curElem",curElem)
            return curElem.category === categoryItem;
        });
        console.log("updatedItem",updatedItem)
        setMenuData (updatedItem);
     };
  return (
    <>
    <br/>
    <div className='Categories'>
        <img 
          className='category_click'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ti3Pdejx_5TSIItD-r06u4vQfi6hZSzm85kphirDvmIx5h38I6ze_PLqVcKBP_D8AwI&usqp=CAU'
          alt='all pic'
          onClick={()=>setMenuData(Menu)}
        />
        <img   
          className='category_click' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdUCpzAJgB211EFWmmnARjMko8PCHs10rdQ&usqp=CAU' 
          alt='breakfast image'
          onClick={()=>filterItem("Breakfast")}
          />
        <img  
          className='category_click' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLq4Vj3ZSiMnFODHnuui4iZjszAAQq8NeSA&usqp=CAU' 
          alt='breakfast image'
          onClick={()=>filterItem("Lunch")}
        />
        <img  
          className='category_click' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2GYVr-2iRx-YOtOPgLppMOVMrqaQzasTGPksxHVaTvQRpg6MF6H3ACl1LjsM-21BVGU&usqp=CAU' 
          alt='breakfast image'
          onClick={()=>filterItem("Evening")}
        />
        <img  
          className='category_click' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MKO6xtORlzMWhYUdS5Ot0doPqmXMMIdzdg&usqp=CAU' 
          alt='breakfast image'
          onClick={()=>filterItem("Dinner")}
        />
    </div>
    <MenuCard menuDtata={menuDtata}/>
    </>
  )
}

export default Category;
