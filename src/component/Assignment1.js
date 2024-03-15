import React, { useState } from "react";
import '../App.css';
function Assignment1() {
    const changetypetext=(event)=>{
        settext(event.target.value);
    }
    const clearText=()=>{
        var clearText1='';
        settext(clearText1);
    }
    const uppercaseText=()=>{
        var uppercaseText1=text.toUpperCase();
        settext(uppercaseText1);
    }
    const lowercaseText=()=>{
        var lowercaseText1=text.toLowerCase();
        settext(lowercaseText1);
    }
    const handlecopy=()=>{
      console.log("i am copy");
      var text=document.getElementById("textbox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const removeExtraspaces=()=>{
      let newtext=text.split(/[]+/);
      settext(newtext.join(""));
    }
    const [text,settext]=useState('enter the text');
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-9 box text-center">
            <textarea cols="100" className=" my-4"  id="textbox" value={text} onChange={changetypetext}  rows="10"></textarea>
          </div>
          <div className="col-md-12 text-center my-3">
            <button className="btn btn-primary mx-3" onClick={clearText}> clear text </button>
            <button className="btn btn-primary mx-3 " onClick={uppercaseText}> clear uppercase </button>
            <button className="btn btn-primary mx-3" onClick={lowercaseText}> clear lowercase </button>
            <button className="btn btn-primary mx-3" onClick={handlecopy}> copy text </button>
            <button className="btn btn-primary mx-3" onClick={removeExtraspaces}> remove extra spaces </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Assignment1;
