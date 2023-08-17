import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchtodos } from '../redux/slice/todo'

const Todo = () => {
    const dispatch = useDispatch();
    const state =   useSelector((state)=> state);

    //adding loading
    if(state.todo.isLoading){
        return <h1>Loading.....</h1>
    }
  return (
    <div>
        <button onClick={()=> dispatch(fetchtodos())}>Dispatch Fetch Todos</button>
        {
           state.todo.data && state.todo.data.map((e)=>(
            <div key={e.id}>
            <li>{e.title}</li>
            </div>

           ))
        }
    </div> 
  )
}

export default Todo