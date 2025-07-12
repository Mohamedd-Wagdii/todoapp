import styles from "./todoitem.module.css";

export default function TodoItem({item , todos , setTodos}) {
    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo !== item));
    }
    function handelClick(name) {
      const newArray = todos.map((todo) => 
    todo.name === name ? { ...todo, done: !todo.done}
    );

    setTodos(newArray);
    }
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                 <span onClick={()=> handelClick(item.name)}>{item.name}
                 </span>
                 </div>
            <span> 
               
                <button onClick={ ()=> handleDelete(item)} className={styles.deleteButton}>X</button>
                </span>
        </div>
    );
}