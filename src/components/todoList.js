
import {useState} from 'react'

const EditList = () =>{
    const [list, setList] = useState([])
    const [input, setInput] = useState("")
    const [edit, setEdit] = useState(false)
    const [list2, setList2] = useState([])
    const [selected, setSelected] = useState("")
    const [newInput, setNewInput] = useState("")
    const crossOutItem = (event) =>{
        if(event.target.style.textDecoration){
            event.target.style.removeProperty('text-decoration')
            event.target.style.setProperty('color', 'black')
        }else{
            event.target.style.setProperty('text-decoration', 'line-through')
            event.target.style.setProperty('color', 'pink')
        }
    }
    const deleteItem = (index) =>{
        const temp = [...list]
        temp.splice(index, 1)
        setList(temp)
    }
    const deleteArray = () =>{
        setList([])
    }
    const deleteItem2 = (index) =>{
        const temp2 = [...list2]
        temp2.splice(index, 1)
        setList(temp2)
    }
    const deleteArray2 = () =>{
        setList2([])
    }
    const addItem = (e) =>{
        e.preventDefault()
        const temp = [...list]
        temp.push(input)
        setList(temp)
        setInput("")
    }
    const editItem = (index)=>{
        if (!edit){
            setEdit(true)
            setSelected(list[index])
        }else{
            setEdit(false)
            if (newInput !== ""){
                const temp = [...list]
                temp[index = newInput]
                setList(temp)
            }
        }
        setNewInput("")
    }
    const validateInput = () =>{
        if(input.trim().length !== 0){
            addItem()
        }else{
            return
        }
    }
    const completeItem = (index) =>{
        const temp = [...list]
        const removedItem = temp.splice(index, 1)
        setList(temp)
        const temp2 = [...list2]
        temp2.push(removedItem)
        setList2(temp2)
    }
    return (
        <div id="container">
            <div id="todoList">
                <h2>TO-DO</h2>
                <form onSubmit={addItem}>
                    <input
                    id="inputToList"
                    type="text"
                    placeholder="Enter your lists here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required/>
                    <button id="addbtn" onClick={validateInput}>Add Item</button>
                    <button id="clrbtn" onClick={() => deleteArray()}>Clear ALL Items</button>
                </form>
                {list.map((item, index) =>{
                return (
                <p 
                key={item}>
                    {edit && selected === item ? (
                        <input
                        type="text"
                        defaultValue={item}
                        onChange={(e) => setNewInput(e.target.value)}
                        />
                    ) : (
                        <i 
                        onClick={crossOutItem}
                        onDoubleClick={() => deleteItem(index)}
                        >
                            {item}
                        </i>
                    )}
                    <div>
                        <button id="removeButton" onClick={() => editItem(index)}>
                            {edit ? "SAVE" : "EDIT"}
                        </button>
                        <button id="completeButton" onClick={() => completeItem(index)}>Completed</button>
                    </div>
                </p>
                )
            })}
            </div>
            <div id="doneList">
                <h2>Complete <button id="doneClearList" onClick={() => deleteArray2()}>Clear ALL Items</button></h2>
                {list2.map((item, index) =>{
                    return (
                            <p key={item} onDoubleClick={() => deleteItem2(index)}>{item}</p>
                    )
                })}
            </div>
        </div>
    )
}
export default EditList
