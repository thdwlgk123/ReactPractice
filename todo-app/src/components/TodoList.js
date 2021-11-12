import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import {List} from 'react-virtualized'
import './TodoList.scss';

const TodoList=({todos, onRemove, onChecked})=>{
  const rowRenderer=useCallback(
    ({index,key,style})=>{
      const todo=todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onChecked={onChecked}
          style={style}/>
      )
    }, [onRemove, onChecked, todos]
  )
  return(
    <List className='TodoList' width={512} height={513} rowCount={todos.length} rowHeight={57}
    rowRenderer={rowRenderer} list={todos}  style={{outline:'none'}}/>
  )
}

export default React.memo(TodoList);