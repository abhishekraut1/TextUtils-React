import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "any" --> wrong way to change the state
  // setText("any") --> wrong way to change the state
  // setText(newText) --> right way to change the state

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text converted to uppercase!","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text converted to lowercase!","success")
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text cleared!","success")
  };

  const handleInverseCase = () => {
    if (text === "") return;
    let newText = "";

    for (let i = 0; i < text.length; i++) {
      let x = text[i];
      if (x >= "a" && x <= "z") {
        newText += x.toUpperCase();
      } else if (x >= "A" && x <= "Z") {
        newText += x.toLowerCase();
      } else {
        newText += x;
      }
    }

    setText(newText);
    props.showAlert("text inverted!","success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text copied to clipboard!","success")
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed!","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let noOfWords = text.split(" ").length;
  if (text === "") noOfWords = 0;
  if (text[text.length - 1] === " ") noOfWords--;

  return (
    <>
      <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#171d30'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{color : props.mode === 'dark' ? 'white' : '#171d30' , backgroundColor: props.mode === 'dark' ? '#171d30' : 'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleInverseCase}>
          InVeRsE CaSe
        </button>
      </div>

      <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#171d30' , backgroundColor:props.mode === 'dark' ? '#171d30' : 'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.length} Characters</p>
        <p>{noOfWords} Words</p>
        <p>{0.008 * noOfWords} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something into textbox to preview it here."}</p>
      </div>
    </>
  );
}
