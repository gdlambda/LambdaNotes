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
            console.log(text)
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
        <div class="main-content">
        <div class="top-bar">
            <button class="icon-button">⊞</button>
            <button class="icon-button">☀</button>
        </div>
        {content == "" ? (
            <div class="empty-state">
                <div>
                    <h2 class="empty-state-title">What would you like to note down?</h2>
                    <CategoryButtons />
                </div>
            </div>
        ) : (
            <div class="text-state">
                {content}
            </div>
        )}
        <div class="input-area">
            <div class="input-container">
                <textarea 
                    type="text" 
                    class="note-input" 
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
                <button class="attachment-button">📎</button>
                <button class="send-button" onClick={noteElement}>↑</button>
            </div>
        </div>
    </div>
    )
}
