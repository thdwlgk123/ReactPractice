import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList=({todos, onRemove, onChecked})=>{
  return(
    <div className='TodoList'>
      {todos.map(todo=>(<TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onChecked={onChecked}></TodoListItem>))}
    </div>
  )
}

export default TodoList;