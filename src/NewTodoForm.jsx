import React, { useState } from 'react'

function NewTodoForm(props) {
    props.onSubmit
    const [newItem, setNewItem] = useState("");
    
     
  function handleSubmit(e){
    e.preventDefault()
    props.onSubmit(newItem)
    setNewItem("")
  }
  
  
  return (
    <form className="new-item-form" onSubmit ={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)} />
        </div>
        <button className="btn">Add</button>
    </form>
  )
}

export default NewTodoForm