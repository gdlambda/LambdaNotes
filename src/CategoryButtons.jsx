import './index.css'

export default function CategoryButtons() {
    return (
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
    )
}