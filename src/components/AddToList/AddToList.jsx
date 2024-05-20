import { useReducer } from 'react';

const reducer = (state, action) => {
    return {
        ...state,
        value: action.content
    }
}
const AddToList = ({setTodoList, todoList}) => {

    const [state, dispatch] = useReducer(reducer, {
        value: "",
        done: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        (state.value != "") 
        ?
            setTodoList([
                ...todoList,
                state
            ], console.log(todoList))
        : "";
    }

    const handleChange = (e) => {
        dispatch({
            content: e.target.value
        });
    }

    return (
        <> 
            <form action="" onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='Put something that u want to do.' defaultValue={state.value} onChange={handleChange}/>
                    <button>Add to List</button>
                </label>
            </form>
        </>
        );
};

export default AddToList;