import React, { useState } from 'react'
import Headquaters from './Headquaters';
import Container from './Container';
import Nav from './Nav';
import Navbar from './Navbar';

const Navigation=()=>
{
const [Data,setData]=useState(Headquaters);
  const Item=(category)=>{
    const updatedList=Data.filter((curElem)=>
    {
      return curElem.category===category;
    });
    return setData(updatedList);
  };
  return (
  <>
  <Navbar />
   <Nav Item={Item}/>
   <div className="container1">
      <Container Data={Data}/>
   </div>
  </>
  )
};
export default Navigation;