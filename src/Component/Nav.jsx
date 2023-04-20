import React from 'react'

export default function Nav({Item}) {
  return (
   <>
    <nav className='navbar1'>
    <div className='btn-group'>
      <button className='btn-group__items' 
      onClick={()=>Item("iron")}>
        Ironman
      </button>
      <button className='btn-group__items' 
      onClick={()=>Item("cap")}>
        Captian America
      </button>
      <button className='btn-group__items'
      onClick={()=>Item("thor")}>
        Thor
      </button>
      <button className='btn-group__items' 
      onClick={()=>Item("spider")}>
        SpiderMan
      </button>
      <button className='btn-group__items' onClick={()=>Item("dp")}>
        Deadpool
      </button>
      <button className='btn-group__items'>
        All
      </button>
    </div>
  </nav>
   </>
  )
}
