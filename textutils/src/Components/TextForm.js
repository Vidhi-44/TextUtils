import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange =(event)=>{
    setText(event.target.value)
    }

  const [text, setText] = useState("Enter the text here");
  return (
    <>
    <div className= "conatiner">
      <h2>{props.heading}</h2>
      <div className="form-group">
        <textarea className="form-control mx-2" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to Upper case</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick} >Convert to Lower case</button>
    </div>
    <div className= "conatiner my-3">
        <h3>Your text summary here</h3>
        <p>{text.split(" ").length} words  and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
