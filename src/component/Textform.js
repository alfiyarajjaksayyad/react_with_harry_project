// import React, { useState } from "react";

// function Textform(props) {
//     var handleclick=()=>{
//         console.log('uppercase'+text);
//         let newtext= text.toUpperCase();
//         setText(newtext);
//     }
//     var handleonchange=(event)=>{
//         console.log("on change");
//         setText(event.target.value);
//     }
//     const [text ,setText]=useState('Enetr text here2');

//   return (
//     <>
//       <h1>{props.heading}</h1>
//       <div className="mb-3">
//         <textarea  className="form-control my-3" value={text} onChange={handleonchange}  id="exampleFormControlTextarea1" rows="8"></textarea>
//         <button className="btn btn-primary" onClick={handleclick}>convert to uppercase </button>
//       </div>
//     </>
//   );
// }
// export default Textform;

import React, { useState } from "react";
function Textform(props) {

  const changeUppercaseText = () => {
    let textTransform = text.toUpperCase();
    setText(textTransform);
    props.showalert("converted to uppercase","success");
  }

  const changelowercase = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase);
    props.showalert("converted to lowercase","success");

  }

  const handlecopy=()=>{
    console.log("i am copy");
    var text=document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("text copied !");
  }
  
  const typetext = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter the text')
  return (
    <>
      <div className="mb-3" style={{color:props.mode=='dark'?'white':'#042743'}}>
        <textarea className="form-control" id="textbox" style={{backgroundColor: props.mode === 'light' ? 'grey' : 'white' , color:props.mode === 'red' ? 'green':'red' }} value={text} onChange={typetext} cols="30" rows="10"></textarea>
        <button className="btn btn-primary m-4" onClick={changeUppercaseText}> click to uppercase</button>
        <button className="btn btn-danger" onClick={changelowercase}>click to lowercase </button>
        {/* <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button> */}
        <button className="btn btn-primary mx-3" onClick={handlecopy}> copy text </button>



      </div>
    </>
  );
}
export default Textform;
