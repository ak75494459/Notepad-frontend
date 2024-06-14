import React from 'react'
import { useState } from 'react'



export default function Form(props) {
    const [text, setText] = useState("");
function UpperCase(){
    setText(text.toUpperCase())
}
function onChangeHandler(event){
   setText(event.target.value);
}
function CopyText(){
    navigator.clipboard.writeText(text)
}

  return (
    <div className="container my-5"> 
        <h1>Enter text below</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="exampleFormControlTextarea1" rows="15" value={text} onChange={onChangeHandler}></textarea>
        </div>
        <button type="button" className="btn btn-primary " onClick={UpperCase}>UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={CopyText}>Copy Text</button>

        <div className="container my-2">
          <p>No of Elements - {text.length}</p>
          <p>No of words - {text.split(" ").length}</p>
        </div>
    </div>
  )
}
