import { useReducer } from 'react'
import Todo from './components/todo'
const imitaial=[]
const adder=(state,action)=>{
  switch(action){
    case "add":
      return [...state,'1111']
      
      case "remove":
        return state.toSpliced(state.length-1)

  }

}
const App = () => {


   const [state,dispatch]=useReducer(adder,imitaial)
  return (
    <div>
      {JSON.stringify(state)}
     <button onClick={()=>dispatch('add')}>add</button>
     <button onClick={()=>dispatch('remove')}>remove</button>
    </div>
  )
}

export default App