import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"

export default function TodoList({todos,setTodos}){
    const sortedTodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    //slice()--->creates a copy of an array
    return  <div className={styles.list}>{sortedTodos.map((item)=>(
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
    ))} </div>
    
}