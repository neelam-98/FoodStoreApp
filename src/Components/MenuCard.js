import React from 'react';
import "../css/App.css";
import { Link } from 'react-router-dom';
import { Divider, Button } from 'antd';
import "antd/dist/antd.css";

const MenuCard = ( {menuDtata} ) => {

  return (
    <>
      <div className='menucontainer' >
        {
          menuDtata && menuDtata?.length > 0 && menuDtata?.map((menuItem)=>{
            console.log("menuItem",menuItem)
            const {id,no,name, Price, image} = menuItem 
            return(
                <>
                  <div className='menucard'>
                    <span className='nocard'>{no}</span>
                    <p className="pname">{name}</p>
                    <h1 className='hname'>{name}</h1>
                    <p className='description'>Price : RS {Price}</p>
                    {/* <hr/> */}
                    <Divider orientation='right'plain style={{color : "gray"}} >READ</Divider>
                    <Link to={`/item/${id}`}>
                      <img className='image' src={image} alt="#"/>                  
                    </Link>
                  </div>
                </>
              );
          })
          }
      </div>
    </>
  )
}

export default MenuCard;
