
import React, { Component, useState } from 'react';
import Todo from '../todo/Todo';
import List from '../list/List';
import "./style.css";


function Form () {
    const [inputValue,setInputvalue] = useState('')
    const [outputValue,setOutvalue] = useState('')
    const [todo, setTodo] = useState([])
    const addItem = () => {
    console.log("",inputValue)
    setTodo([...todo, inputValue])
    }


    return (
        
        <>
        <div className='add-form'>
            <div className='input-group'>
                <form>
                    <div className='left-group'>
                        <div className='left-title'>
                            <span className='form-label'>제목</span>
                            <input value={inputValue} className='add-input' type = "text" onChange={(event)=>setInputvalue(event.target.value)}/>
                        </div>
                        <div className='right-title'>
                            <span className='form-label'>내용</span>
                            <input value={outputValue}  className='add-input' type = "text"onChange={(event)=>setOutvalue(event.target.value)}/>
                        </div>
                        
                        <div className='right-group'>
                            <button onClick={addItem} className='add-button'>추가하기</button> 
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
        
        
        </>
        
    )
}


export default Form
