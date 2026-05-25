import React, { useState } from 'react'
import './RictTextBox.css'
import { CgFormatUppercase } from "react-icons/cg";
import { RxLetterCaseLowercase } from "react-icons/rx";
import { GrClearOption } from "react-icons/gr";
import { FaCopy } from "react-icons/fa";
import Button from '../components/Button';

const RictTextBox2 = () => {

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

    function copyText()
    {
        navigator.clipboard.writeText(text)
    }
  return (
    <div className="parent-container">
        <div className='left-section'>
            <textarea className="text-area-box " onChange={analyzeText} value={text} placeholder='write something here...'></textarea>
        </div>
        <div className='right-section'>
            <h3>Preview</h3>
            <p>{previewText}</p>
            <div>   
                <Button handleClick={convertToUpper} text="Upper Case" icon={<CgFormatUppercase />}/>
                <Button handleClick={()=>setPreviewText(text.toLowerCase())} text="Lower Case" icon={<RxLetterCaseLowercase />}/>
                <Button handleClick={clearData} text="Clear" icon={<GrClearOption />}/>
                {/* <Button handleClick={copyText} text="Copy" icon={<FaCopy />}/> */}
                <Button handleClick={()=>navigator.clipboard.writeText(text)} text="Copy" icon={<FaCopy />}/>
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

export default RictTextBox2