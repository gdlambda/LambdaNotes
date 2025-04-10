import { useState } from 'react'
import './index.css'
import CategoryButtons from './CategoryButtons';

export default function NoteArea() {
    const [content, setContent] = useState([]);
    const [text, setText] = useState('');
    const [shift_pressed, setShift] = useState(false);
    const input_limit = 2048;
    let input_field;

    function noteElement() {
        if(input_field.value != '') {
            console.log(input_field)
            let new_node = <div className="note-node"> {text} </div>;
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
                            console.log(e.key)
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
