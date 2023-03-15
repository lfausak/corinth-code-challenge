import {useEffect, useState, useRef} from 'react';
function List(){
 const [list, setList] = useState([]);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(setList);
 }, []);
  
 return (
   <div>
      {list.map(todo => 
       <div key={todo.id}>{todo.title}</div>)}
    </div>
  );
}