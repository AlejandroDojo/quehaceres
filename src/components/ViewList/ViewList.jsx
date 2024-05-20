import Work from "../Work/Work";


const ViewList = ({todoList, setTodoList}) => {
    return (
        <> 
            <div>
                <h2>Current List:</h2>
                {todoList.map( (element, index) => {
                    return (element.value != "")
                    ? 
                        <Work element={element} key={index} setTodoList={setTodoList} todoList={todoList} index={index}/>
                    : 
                    "";
                    })}
            </div>
        </>
        );
};

export default ViewList;