import React from 'react'

export default function OnGoing({index,obj,list,setList}){
    return (
       <div className='toDo' key={index}>
            <i className='fas fa-check' title='Done'></i>
            <i className='fas fa-star' title='Important' style={{color:'#8e0b0b'}} aria-hidden="true"></i>

       </div> 
    )
}