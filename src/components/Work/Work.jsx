import { useState } from "react"

const Work = ({element, setTodoList, todoList, index}) => {

    const handleChange = async (e) => {
        console.log(e)
        const oldArray = [...todoList];
        (oldArray[index].done === false) ? oldArray[index].done = true : oldArray[index].done = false;
        setTodoList(oldArray);
    }

    const handleDelete = () => {
        console.log(todoList[index])
        const isDeleted = todoList.filter( (aeliminar, indice) => (indice != index)
        )
        setTodoList(isDeleted);
    }
    return (
        <> 
            {(todoList[index].done === false)  
            ?
                <div className="work">
                    <p> {index} - {element.value}</p>
                    <input type="checkbox" defaultChecked={element.done} onChange={handleChange} />
                    <button onClick={handleDelete}> Delete </button>
                </div>
            : 
                <div className="work ">
                    <p className="isDone"> {index} - {element.value}</p>
                    <input type="checkbox" defaultChecked={true} onChange={handleChange} />
                    <button onClick={handleDelete}> Delete </button>
                </div>
        }
            
        </>
        );
};

export default Work;