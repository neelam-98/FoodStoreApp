import React from 'react';
import "../css/App.css";
import { Link } from 'react-router-dom';
import { Divider, Button } from 'antd';
import "antd/dist/antd.css";

const MenuCard = ( {menuDtata} ) => {

  return (
    <>
      <div className='menuCard'>
          <div className='menucontainer' >
            {
              menuDtata && menuDtata?.length > 0 && menuDtata?.map((menuItem)=>{
                console.log("menuItem",menuItem)
                const {id, no, name, description, Price, image} = menuItem 
                return(
                    <>
                      <div className='menucard'>
                        <span className='nocard'>{no}</span>
                        <p className="pname">{name}</p>
                        <h1 className='hname'>{name}</h1>
                        <h4 className='description'>Price : RS {Price}</h4>
                        <p>{description}</p>
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
      </div>
    </>
  )
}

export default MenuCard;
