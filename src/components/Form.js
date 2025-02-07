
import React, {useState} from 'react'

export default function Form(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Convert to Upper Case", "success")
    }
    
    const handleLoClick = ()=> {
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Convert to Lower Case", "success")

    }

    const handleNoClick = ()=> {
        let newText = " "
        setText(newText);
        props.showAlert("Clear Text", "success");
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard", "success");
    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/); 
          setText(newText.join(" "));
          props.showAlert("Remove extra space", "success");
    }


    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here')
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="7"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Upper Case</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lower Case</button>
        <button className='btn btn-primary mx-2' onClick={handleNoClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space Text</button>

        <div className='container'>
            <h1>Text Summary</h1>
            <p>Words:{text.split(' ').length}, Character: {text.length}</p>
            <p>{0.008 * text.split(' ').length }Minutes-Reads</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Preview Your Text Here"}</p>
        </div>
    </div>
  )
}
