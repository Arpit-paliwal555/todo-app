import { useState } from "react";
export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
    <input id="title" type="text" placeholder="Enter Todo title" style={{margin: 10,padding:10}} onChange={(e) => {
    const value=e.target.value
    setTitle(value)}
    }/><br />
    <input id="desc" type="text" placeholder="Enter description" style={{margin: 10,padding:10}} onChange={(e)=>{
        const value=e.target.value
        setDescription(value)
    }}></input><br />
    <button id="create" type="button"style={{margin: 10,padding:10}} onClick={()=>{
        fetch('http://localhost:3000/todo',{
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(async (res)=>{
            const json = res.json();
            alert("Todo created!");
        })
    }}>Create</button>
    </div>
}