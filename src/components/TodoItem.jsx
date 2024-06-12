import styles from "./todoItem.module.css"
export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(item) {
        console.log("delete button clicked for", item)
        setTodos(todos.filter((todo) => todo !== item));
    }

    function handleClick(name){
        console.log("item clicked ",name);
        const newArray=todos.map((todo)=>todo.name === name? {...todo,done:!todo.done}:todo)
        setTodos(newArray)
    }

    const className1=item.done?styles.completed:""
    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={className1} onClick={()=>handleClick(item.name)}>{item.name}</span>
            
            <span>
                <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(item)}
                >
                    X
                </button>
            </span></div>

        <hr className={styles.line} />
    </div>
}