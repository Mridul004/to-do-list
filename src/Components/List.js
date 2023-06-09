import React, { useState  } from 'react'
import './TodoList.css'



    
  


  function List() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
 

    function DM(){
      const darkModeSwitch = document.getElementById('darkModeSwitch');
      const body = document.body;
      
      darkModeSwitch.addEventListener('change', function() {
        if (darkModeSwitch.checked) {
          body.classList.add('dark-mode');
        } else {
          body.classList.remove('dark-mode');
        }
      });
      
      
    }

  const handlekeyDown=(event)=>{
    if(event.key==='Enter')
    {
      handleAddTodo();
    }
    if(event.key==='Delete')
    {
      handleDeleteTodo();
    }
  }
    function handleAddTodo() {
      if(inputValue.length===0)
      alert("Task cannot be Empty!")
      else{

        setTodos([...todos, inputValue]);
        setInputValue('');
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    }
  
    function handleDeleteTodo(index) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  
    
    // function loadTasksFromLocalStorage() {
    //   const storedTasks = localStorage.getItem('todos');
    //   if (storedTasks) {
    //     return JSON.parse(storedTasks);
    //   }
     
    // }


  return (
        
        <>  
            <div className="form-check form-switch form-check-reverse">  
            <h4 className='Drk'>Dark Mode</h4>   
            <label className="switch">
              <input type="checkbox" id="darkModeSwitch" onChange={DM} />
              <span className="slider round"></span>
            </label>
            
            </div>

          <h1 className="italic-heading">{todos.length} Tasks to go .....</h1>            

            <div className="todo-list-container">
                <div  className='add-todo-container'>
                  <span className="input-group-text" id="addon-wrapping">Task :</span>
                  <input type="text" className="form-control" value={inputValue} onKeyDown={handlekeyDown} onChange={e=>setInputValue(e.target.value)} aria-describedby="addon-wrapping"/>
              
                  <button className="btn btn-primary" id='myButton' onClick={handleAddTodo}>Add</button>
                </div>
                  <ul className='todo-list' >
                    {todos.map((todo, index) => (
                      <li key={index} className='todo-item'>{index} ) &nbsp; {todo}
                        <button className='delete-todo-button' onKeyDown={handlekeyDown} onClick={() => handleDeleteTodo(index)}>Done</button>
                      </li>
                    ))}
                  </ul>        
                  
                
            </div>
            
            
        </>
  )
}
export default List;
