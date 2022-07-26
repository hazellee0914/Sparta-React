import React, { Component } from 'react';
import "./style.css";



function Todo(props){
        return (
            <>
            <div className='Todo-container'>
                {props.item}
                <h2 className='todo-title'>00하기</h2>
                <div>15일차 </div>
                <div ClassName='button-set'/>
                <button className='Todo-delete'>삭제하기</button>
                <button className='Todo-complete'>완료</button>
            </div>
            
            
            </>
        )
    }
    
    export default Todo