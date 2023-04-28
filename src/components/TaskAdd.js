import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../css/Style.css'
import { addTask } from '../redux'
import { FaPlusSquare } from 'react-icons/fa'

function TaskAdd() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(addTask(text));
      setText("");
  };
  return (
    <div className='add'>
      <h3 className="title">React Todo app</h3>
        <form className='addForm d-flex justify-content-center' onSubmit={handleSubmit}>
        <FaPlusSquare style={{marginTop:'15px', fontSize:'20px', color:'#7FCAC6', zIndex:9999999999999, borderRadius:'10px'}}/>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ajouter une nouvelle tâche"
            style={{borderRadius:'7px'}}
            className='form-control'

          />
        </form>
    </div>
  )
}

export default TaskAdd