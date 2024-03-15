import React, { useState } from "react";
import '../App.css';
function WordCounter(){
    const typetext=(event)=>{
        setText(event.target.value);
    }
    const chnageupercase=()=>{
        var uppercase= text.toUpperCase();
        setText(uppercase);
    }
    const [text, setText]=useState('Magic Wordcounter');
    return(
        <>
       <div className="container-fluid">
        <div className="row d-flex justify-content-center ">
            <div className="col-md-8 border box">
               <textarea className="form-control my-4" value={text} onChange={typetext} id="" cols="20" rows="10"></textarea>
             
            </div>
            <div className="col-md-12 text-center">
            <button className="btn btn-primary my-4" onClick={chnageupercase}> chnage in uppercase </button>

                <h1 className="text-center text-primary">{text.split(" ").length}  words {text.length} charcters</h1>
                <h4 className="text-center text-primary">{0.008* text.split(" ").length } miminutes to read </h4>

                <h2 className="text-center text-warning">preview texts</h2>
                <p className="text-center text-danger">{text}</p>
            </div>
        </div>
       </div>
        </>
    )
}

export default WordCounter;