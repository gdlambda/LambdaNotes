import { useState } from 'react'
import './index.css'

export default function NoteArea() {
    const [content, setContent] = useState('');

    function noteElement() {
        
    }

    function updateContent(text) {
        setContent(text)
    }

    return (
        <div class="main-content">
        <div class="top-bar">
            <button class="icon-button">⊞</button>
            <button class="icon-button">☀</button>
        </div>
        <div class="empty-state">{content == "" ? (
            <div>
                <h2 class="empty-state-title">What would you like to note down?</h2>
                <div class="category-buttons">
                    <button class="category-button">
                        <span class="button-icon">✨</span>
                        Create New Note Template
                    </button>
                    <button class="category-button">
                        <span class="button-icon">🧭</span>
                        Explore
                    </button>
                    <button class="category-button">
                        <span class="button-icon">&lt;/&gt;</span>
                        Code
                    </button>
                    <button class="category-button">
                        <span class="button-icon">📚</span>
                        Learn
                    </button>
                </div>
            </div>
        ) : (
            <p>{content}</p>
        )}</div>
        <div class="input-area">
            <div class="input-container">
                <input type="text" id="note-input" placeholder="Type your note here..." onChange={(e) => updateContent(e.target.value)}/>
                <button class="attachment-button">📎</button>
                <button class="send-button" onClick={noteElement()}>↑</button>
            </div>
        </div>
    </div>
    )
}

/*

        <div class="output-area">

        </div>
*/