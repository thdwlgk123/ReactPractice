import React,{useCallback, useState} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert=({onInsert})=>{

  const [value, setValue]=useState('');

  const onChange=useCallback(e=>{
    setValue(e.target.value);
  },[])

  const onSubmit=useCallback(
    e=>{
      onInsert(value);
      setValue('');
      //onSubmit 이벤트는 브라우저를 새로고침하므로 새로고침 방지
      e.preventDefault();
    }, [onInsert, value]
  )
  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder='할 일을 입력하세요'/>
      <button type='submit'>
        <MdAdd/>
      </button>
    </form>
  )
}

export default TodoInsert;