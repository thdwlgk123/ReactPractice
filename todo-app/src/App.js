import React,{useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App=()=> {
   function createBulkTodos(){
    const array=[];
    for(let i=1;i<=2500;i++){
      array.push({
        id:i,
        text:`할 일 ${i}`,
        checked:false
      })
    }
    return array;
  }
  const [todos, setTodos]=useState(createBulkTodos);
  const nextId=useRef(todos.length+1);// nextid는 랜더링되는 값일 필요가 없기 때문에 useRef 사용
  
  const onInsert=useCallback(
    text=>{
      const todo={
        id:nextId.current,
        text, 
        checked:false
      }
      setTodos(todos=>todos.concat(todo));
      nextId.current+=1;
    },
    []
  )
  const onRemove=useCallback(
    id=>{
      const nextTodo=todos.filter(todo=>todo.id!==id);
      var i=0;
      for(i;i<nextTodo.length;i++){
        if(nextTodo[i].id>id){
          nextTodo[i].id=nextTodo[i].id-1;
          console.log('todo id>'+i);
        }
      }
      // setTodos(todos.filter(todo=>todo.id!==id));
      setTodos(nextTodo);
      nextId.current-=1;
    },[todos]
  )
  const onChecked=useCallback(
    id=>{
      setTodos(todos=>todos.map(todo=>todo.id===id?{...todo, checked:!todo.checked}:todo))
    }, []
  )
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onChecked={onChecked}/>
      </TodoTemplate>
      
    </div>
  );
}

export default App;
