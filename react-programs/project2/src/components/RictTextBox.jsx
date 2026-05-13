import React, { useState } from 'react'
import './RictTextBox.css'
import { CgFormatUppercase } from "react-icons/cg";
import { RxLetterCaseLowercase } from "react-icons/rx";
import { GrClearOption } from "react-icons/gr";

const RictTextBox = () => {

    let [text,setText]=useState("")
    let [previewText,setPreviewText]=useState("")
    function analyzeText(event)
    {
        setText(event.target.value)
        setPreviewText(event.target.value)
    }

    function convertToUpper()
    {
        setPreviewText(text.toUpperCase())
    }

    function clearData()
    {
        setText("")
        setPreviewText("")
    }
  return (
    <div className="parent-container">
        <div className='left-section'>
            <textarea rows="20" cols="40" onChange={analyzeText} value={text}></textarea>
        </div>
        <div className='right-section'>
            <h3>Preview</h3>
            <p>{previewText}</p>
            <div>   
                <button onClick={convertToUpper}>Upper Case <CgFormatUppercase /></button>
                <button onClick={()=>setPreviewText(text.toLowerCase())}>Lower Case <RxLetterCaseLowercase /></button>
                <button onClick={clearData}>Clear <GrClearOption /></button>
            </div>
            <div>
                <p>Character Count {text?<span>{text.length}</span>:<span>0</span>}</p>
                <p>Word Count {text?<span>{text.split(" ").length}</span>:<span>0</span>}</p>
                <p>Reading Time {text? <span>{text.split(" ").length/200}</span> : 0} minutes</p>
            </div>
        </div>
    </div>
  )
}

export default RictTextBox