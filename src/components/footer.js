
const Footer = () => {
    return (
        <footer>
        <div id="ft1">
            <p id="footerText1">
            <i id="footerTitle">To-do List</i>
            <br></br>
            <br></br>
            "Add Item" / Enter Key: add inputted text to list
            <br></br>
            "Clear List": removes all items from To-do list
            <br></br>
            On Click: strike through an item
            <br></br>
            On Double Click: remove a specific item from To-do list
            <br></br>
            "Edit": allows for editing the text of that entry
            <br></br>
            "Save": applies any changes made via editing
            <br></br>
            "Complete": moves that entry from the TO-DO list to the Complete list</p>
        </div>
            <p id="footerText2">
            <i id="footerTitle">Complete</i>
            <br></br>
            <br></br>
            On Click: remove a specific item from Complete list
            <br></br>
            "Clear List": removes all items from Complete list
            </p>
        </footer>
    )
}

export default Footer