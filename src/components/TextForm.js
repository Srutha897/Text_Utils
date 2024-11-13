import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Up button clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Uppercase is enabeled!","success");
    }
    const handleDownClick=()=>{
        console.log("Down button clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Lowercase is enabeled!","success");

    }
    const handleClear=()=>{
        console.log("Clear button clicked");
        let newText = "";
        setText(newText)
        props.showAlert(" Text Cleared!","success");

    }
    const handleInverseText=()=>{
        let newText = "";
        for (let i = text.length-1; i >=0; i--) {
            newText+=text[i];
        }
        setText(newText)
        props.showAlert(" Text is inverted","success");

    }
    const handleOnChange=(event)=>{
        console.log("Change clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied text to clipboard!","success");
       
    }
    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Removed Extra spaces in the text!","success");

    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color:props.mode==='dark'?'white':'#042743', backgroundColor:props.mode==='dark'?'#042743':'white'}}></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleInverseText}>Inverse Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
      </div>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Takes {0.008* text.split(" ").length } minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the text above to view the preview"}</p>
    </div>
    </>
  )
}