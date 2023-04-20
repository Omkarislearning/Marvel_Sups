import React from 'react'
import Card from './Card';

export default function Container(props) 
{
  
  return (
   
    props.Data.map((Data,i)=>
    {
      return( 
      <Card Data={Data} key={i}  index={i}/>
      );
    }
    )
  );
}

