import { useState } from 'react'
import './index.css'
import CategoryButtons from './CategoryButtons';

export default function NoteArea() {
    const [content, setContent] = useState([]);
    const [text, setText] = useState('');
    const [shift_pressed, setShift] = useState(false);
    const [numNodes, setNumNodes] = useState(0);
    const [headingSize, setHeadingSize] = useState(0);
    const [wasHeadingChar, setWasHeadingChar] = useState(false);
    const [startOfLine, setStartOfLine] = useState(true);
    const input_limit = 2048;
    let input_field;

    function parseMarkdown(input) {
        for(let char of input) {
            console.log(char);
            if(char == "#") {
                console.log("Start of Line?: ")
                console.log(startOfLine)
                console.log("Was Heading Char?: ")
                console.log(wasHeadingChar)
                if(startOfLine || wasHeadingChar) {
                    let new_size = headingSize >= 3 ? 3 : headingSize + 1;
                    console.log("New Size: ")
                    console.log(new_size);
                    setHeadingSize(new_size);
                    setWasHeadingChar(true);
                }
                console.log("Heading Size: ")
                console.log(headingSize);
            } else {
                setWasHeadingChar(false);
            }
    
    
            if(char == '\n') {
                setStartOfLine(true); 
            } else {
                setStartOfLine(false);
            }
        }
    }

    function noteElement() {
        if(input_field.value != '') {
            setHeadingSize(0);
            setWasHeadingChar(false);
            setStartOfLine(true);
            parseMarkdown(input_field.value);
            let new_node = <div key={numNodes} className="note-node"> {text} </div>;
            setNumNodes(numNodes + 1);
            let updated_array = content;
            updated_array.push(new_node);
            setContent(updated_array);
            input_field.value = '';
            setText(input_field.value);
            input_field.style.height = 'auto';
            input_field.style.height = `${input_field.scrollHeight}px`;
        }
    }

    function updateContent(input) {
        if(input.length >= input_limit) {
            input = input.slice(0, input_limit);
            console.log(input);
            input_field.value = input;
        }
        input_field.style.height = 'auto';
        input_field.style.height = `${input_field.scrollHeight}px`;
        setText(input);
    }

    function updateShift() {
        setShift(!shift_pressed);
    }

    return (
        <div className="main-content">
        <div className="top-bar">
            <button className="icon-button">⊞</button>
            <button className="icon-button">☀</button>
        </div>
        {content == "" ? (
            <div className="empty-state">
                <div>
                    <h2 className="empty-state-title">What would you like to note down?</h2>
                    <CategoryButtons />
                </div>
            </div>
        ) : (
            <div className="text-state">
                {content}
            </div>
        )}
        <div className="input-area">
            <div className="input-container">
                <textarea 
                    type="text" 
                    className="note-input" 
                    placeholder="Type your note here..." 
                    ref={el => input_field = el} 
                    onChange={(e) => updateContent(e.target.value)}
                    onKeyUp={(e) => {
                        if(e.key == "Shift") {
                            updateShift()
                        }
                    }}
                    onKeyDown={(e) => {
                            if(e.key == "Enter")
                            {
                                if(shift_pressed) {
                                    e.preventDefault();
                                    noteElement();
                                }
                            } else if (e.key == "Shift") {
                                updateShift()
                            }
                        }
                    }
                />
                <p>Input: {text.length}/{input_limit}</p>
                <button className="attachment-button">📎</button>
                <button className="send-button" onClick={noteElement}>↑</button>
            </div>
        </div>
    </div>
    )
}
