import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter Text Here...")

    const handleOnChange = (event) => {     // to enable editing of textarea
        console.log("On Change")
        setText(event.target.value)
    }

    const handleUpClick = () => {        //function for upper case
        console.log("Upper case was clicked " + text)
        let newText = text.toUpperCase()
        setText(newText)    // function to set new value of the text area
        props.displayAlert("Converted to Upper Case!", "success")

    }

    const handleLowerClick = () => {       //function for lower case
        let newText = text.toLowerCase()
        setText(newText)
        props.displayAlert("Converted to Lower Case!", "success")

    }

    const handleClearClick = () => {
        setText('')
        props.displayAlert("Cleared!", "success")

    }

    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.displayAlert("Copied to Clipboard!", "success")

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)      // if there exists some space, split the words into an array
        setText(newText.join(" "))      // then join the words with one space in b/w
        props.displayAlert("Removed Extra Spaces!", "success")

    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                {/* Initially the value will be as it was of text, but when there is a change in state of the textarea, handleOnChange fuction is triggered that enables editing */}
                {/* If we try to change the objects state, event object is created, and hence, from there we get the event obj in the function  */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#151515' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                {/* To convert to upper case */}
                <button disabled ={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>To UpperCase</button>

                {/* To convert to lower case */}
                <button disabled ={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowerClick}>To LowerCase</button>


                <button disabled ={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>


                <button disabled ={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>


                <button disabled ={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} charecters.</p>
                <p>{0.008 * text.split(' ').length}min taken to read.</p>
                <h1>Preview</h1>
                {text}
            </div>
        </>
    )
}
