import React, { useState } from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

function InputArea(props) {
    function copyText() {
        var copyText = props.text;
        navigator.clipboard.writeText(copyText);
        props.showAlert('Copied to clipboard', 'success', 'check-circle-fill');
    }

    function textOnChangeHandler(event) {
        props.setText(event.target.value);
    }

    function clearText() {
        props.setText("");
        props.showAlert('Text cleared', 'success', 'check-circle-fill');
    }

    var style = {
        color: props.theme === 'light' ? 'black' : '#e0e9f2',
        backgroundColor: props.theme === 'light' ? 'white' : '#232f3b'
    }

    return (
        <>
            <h2 htmlFor="textarea1" className="form-label py-2">{props.heading}</h2>
            <div className='container my-2 d-flex align-items-center'>
                <button className="btn btn-outline-danger mx-1" onClick={copyText}>Copy</button>
                <button className="btn btn-outline-danger mx-1" onClick={clearText}>Clear</button>
            </div>
            <textarea className="form-control" id="textarea1" value={props.text} style={style}
                placeholder={props.placeHolder} rows="6" onChange={textOnChangeHandler}></textarea>
        </>
    )
}

function TextArea(props) {
    const [text, setText] = useState("");
    var style = {
        color: props.theme === 'light' ? 'black' : '#e0e9f2',
        backgroundColor: props.theme === 'light' ? 'white' : '#131c23'
    }

    return (
        <div className="h-100">
            <div className="row align-items-start">
                <div className="col m-3 p-3 border rounded border-primary" style={style}>
                    <InputArea heading={props.heading} placeHolder={props.placeHolder} text={text}
                        setText={setText} showAlert={props.showAlert} theme={props.theme}/>
                </div>
                <div className="col m-3 p-3 border rounded border-primary h-100" style={style}>
                    <h2 className="py-2">Output</h2>
                    <div className="container border rounded border-info">
                        {parse(text).length === 0 ? <p>Nothing to show</p> : parse(text)}
                    </div>
                </div>
            </div>
        </div>
    )
}

TextArea.propTypes = {
    heading: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    showAlert: PropTypes.func.isRequired
}

TextArea.defaultProps = {
    heading: "Heading",
    theme: "light",
    placeHolder: "Place Holder"
}

InputArea.propTypes = {
    heading: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired
}

InputArea.defaultProps = {
    heading: "Heading",
    placeHolder: "Place Holder",
}

export default TextArea;