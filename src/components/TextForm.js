import React,{useState} from "react";

const TextForm = (props) => {

  const [text,setText] = useState("Enter text below");
  const handleupclick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showalert('Converted to Upper Case','success')
  }
  const handleupclick1 = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert('Converted to Lower Case','success')
} 
const handleupclick2 = () => {
    setText('');
}
  const handleupChange = (e) => {
      setText(e.target.value)
  }
  return (
      <>
    <div className="container" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleupChange}
          style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',color: props.mode === 'light' ? '#042743' : 'white'}}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleupclick}>Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleupclick1}>Convert to Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleupclick2}>Clear Text</button>
      </div>
    </div>
    <div className="container my-3"  style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").filter((ele)=>{return ele.length !==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((ele)=>{return ele.length !==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  );
};

export default TextForm;
