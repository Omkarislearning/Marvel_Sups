import React from 'react'

export default function Card({Data}) {
  const {id,img,Movie,Actor,Year}=Data;
  return (
    <>
  <div className="card" key={id} style={{ width: "19rem" }}>
  <img src={img} className="card-img-top" alt="Image" />
  <div className="card-body">
    <h5 className="card-title">{Movie}</h5>
    <h6 className="card-title">Actor: {Actor}</h6>
    <div className='year'>
      {Year}
      <i className='dot'></i>
      <i className='type'>Movie</i>
    </div>
    <button className=
    'btn-add'>Add to Favourite
    <i className="fa-regular fa-heart"></i>
    </button>
  </div>
</div>
</>
  );
}
