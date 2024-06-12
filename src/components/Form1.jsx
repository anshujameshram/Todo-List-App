import { useState } from "react";
import styles from "./form1.module.css"
export default function Form1({ todos, setTodos }) {

    const [todo, setTodo] = useState({ name: "", done: false });
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo])
        setTodo({ name: "", done: false })
    }

    return <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            <input className={styles.modernInput}
                type="text"
                value={todo.name}
                onChange={(e) => setTodo({name:e.target.value,done:false})}
                placeholder="Enter todo item...."
            />
            <button className={styles.modernButton} type="submit" >Add</button>

        </div>

    </form>
}