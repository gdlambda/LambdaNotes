import { useState } from 'react'
import './index.css'
import CategoryButtons from './CategoryButtons';

export default function NoteArea() {
    const [content, setContent] = useState([]);
    const [text, setText] = useState('')
    const [node_content, setNodeContent] = useState([])
    let input_field;

    function noteElement() {
        console.log(node_content.length)
        if(node_content.length > 0) {
            console.log("New Node")
            let new_node = (
                <div className="note-node">
                    {node_content}
                </div>
            )
            let updated_array = content;
            updated_array.push(new_node);
            setContent(updated_array);
            setNodeContent([]);
            input_field.value = '';
            setText(input_field.value);
            return
        }
        if(input_field.value != '') {
            let new_node = <div className="note-node"> {text} </div>;
            let updated_array = content;
            updated_array.push(new_node);
            setContent(updated_array);
            input_field.value = '';
            setText(input_field.value);
        }
    }

    function updateNodeContent() {
        if(text == '') {return}
        let updated_content = node_content;
        updated_content.push(text);
        updated_content.push(<br />);
        setText('');
        input_field.value = ''
        setNodeContent(updated_content);
    }

    function updateContent(input) {
        setText(input);
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
                <input 
                    type="text" 
                    class="note-input" 
                    placeholder={node_content.length > 0 ? node_content : "Type your note here..."} 
                    ref={el => input_field = el} 
                    onChange={(e) => updateContent(e.target.value)}
                    onKeyDown={(e) => {if(e.key == "Enter"){updateNodeContent()}; console.log(e.key)}}
                />
                <button class="attachment-button">📎</button>
                <button class="send-button" onClick={noteElement}>↑</button>
            </div>
        </div>
    </div>
    )
}

/*

        <div class="output-area">

        </div>
*/