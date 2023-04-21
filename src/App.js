//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const [todo,setTodo]= useState('');
  const [list,setList]= useState([{id:'1',text:'Reading'}])

  return (
    <div className="App">
      <div className='mainHeading'>
        <h1>To-Do List</h1>
      </div>

      <div className='subHeading'>
        Hello , It's {weekDays[new Date().getDay()]} ! Focous on your day. 
      </div>

      <div className='todoinput'>
        <div className='left'>
          <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Add item'/>

        </div>

        <div className='right erase'>
          <i className='fas fa-eraser' title='clear' onClick={()=>setTodo("")}/>
        </div>

        <div className='rightEnd add '>
          <i className='fas fa-plus' onClick={()=>{
          setList([...list,{id:Date.now(), text:todo}])
        
          setTodo("")
        }
        
        }/>
        </div>
      </div>

      <div className='container onGoing'>
        <h3>On Going ({list.length})</h3>
        {
          list.map((obj,index)=>
          <onGoing key={index} index={index} obj={obj} list={list} setList={setList}/>)
        }
      </div>

      
    </div>
  );
}

export default App;
