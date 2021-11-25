import { useState } from 'react';

export default function Form(props) {
    const [text, setText] = useState("");

    const [result, setResult] = useState([])

    function upClick() {
        setText(text.toUpperCase());
        props.showAlert("Converted to UPPERCASE!", "Success")
    }
    function lowClick() {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "Success")
    }
    function mailClick() {
        let mailList = []
        text.split(/(?: |\n)/).filter(element => {
            if (element.indexOf('.') - element.indexOf("@") > 1) {
                mailList.push(element)
            }
            return null;
        })
        mailList = [...new Set(mailList)]
        setResult(mailList)
        mailList.length > 0 ? props.showAlert("Mails extracted!", "Success") : props.showAlert("No mails available!", "Warning")
    }
    function removeClick() {
        let extra = text.split(/[ ]+/)
        extra = extra.join(" ")
        setText(extra)
        props.showAlert("Extra spaces removed!", "Success")
    }
    function copyClick() {
        // copy.select() // selects the text(usually the blue highlighting)
        navigator.clipboard.writeText(text) // executing Ctrl+C command
        // document.getSelection().removeAllRanges() // deselects the text
        // Using the navigator, we don't need to select and deselect text
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied!", "Success")
    }
    function clearClick() {
        setText('')
        props.showAlert("Text cleared!", "Success")
    }
    function change(event) {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container mb-3 my-3 border p-3">
                <h3>{props.heading}</h3>
                <div className="mb-3 my-3">
                    <textarea className={`form-control bg-${props.mode === "light" ? "white" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} id="myBox" rows="8" placeholder="Enter Text Here" value={text} onChange={change}></textarea>
                </div>
                {/* disabled attribute can be used to disable xml tag (only disabled to be written for permanent disability and if we want to add a condition, we can put the condition using '=' and then the condition as below) */}
                <button disabled={text.length === 0} className={`btn btn-${props.theme} m-2`} onClick={upClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.theme} m-2`} onClick={lowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.theme} m-2`} onClick={mailClick}>Extract Mail</button>
                <button disabled={text.length === 0} className={`btn btn-${props.theme} m-2`} onClick={removeClick}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className={`btn btn-${props.theme} m-2`} onClick={copyClick}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.theme} m-2`} onClick={clearClick}>Clear Text</button>
            </div>

            <div className="container mb-3 my-3 border p-3">
                <h4>Text summary</h4>
                <div className="mb-3 my-3">
                    {text.length} characters, {
                        (text.split(/\s+/).filter(ele => {
                            return ele !== '';
                        }).length)
                    } words, {
                        Math.floor(text.split(/\s+/).filter(ele => {
                            return ele !== '';
                        }).length * 60 / 125)
                    } seconds read
                </div>
            </div>

            <div className="container mb-3 my-3 border p-3">
                <h4>Result</h4>
                {result.map((data) => {
                    return (result.length > 1 ? <li id="myResult" type="1" className="mb-3 my-3">{data}</li> : <div id="myResult" className="mb-3 my-3">{data}</div>)
                })}
            </div>
        </>
    )
}
