
"use client"

import { useState } from 'react';


const TodoApp =  () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const addTodo = ()=>{
        if(newTodo.trim() !== ""){
            setTodos([...todos, newTodo])
            setNewTodo('');
        }
    }
    const removeTodo = (index) =>{
        const updatedTodos = [... todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos)
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-bold text-lg lg:flex">
        <h1 className="fixed left-0  top-0 flex w-full justify-center border-b border-gray-300  from-zinc-200 pb-6 pt-8 text-white dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
          Todo App
        </h1>
      </div>
      <div className=''>
    <input 
    className='p-3 w-80 sm:w-auto rounded-lg m-3'
    type='text'
    placeholder='Enter todo'
    value={newTodo}
    onChange={(e)=> setNewTodo(e.target.value)}/>
     <button className='rounded-lg bg-red-500 p-2 text-white sm:ml-3' onClick={addTodo}>Add Todo </button>
      </div>
    
      <ul className='flex flex-col overflow-y-auto h-72'>
        {[...todos].reverse().map((todo, index) => (
            <li className='p-2 ' key={index}>
                <div className='flex'>
                <div className='bg-white w-80 p-2 sm:w-40 rounded-lg'>

                {todo}
                </div>
                <div>

                <button className='rounded-lg ml-3 bg-red-500 text-white p-2' onClick={()=> removeTodo(index)}>Remove</button>
                </div>
                </div>
            </li>
           
        ) )}
      </ul>
      
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center  from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <h3 className='font-bold text-white'> @farhanManeri  </h3>
         </div>
    </main>
  )
}; export default TodoApp;
