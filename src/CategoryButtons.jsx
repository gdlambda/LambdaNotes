import './index.css'

export default function CategoryButtons() {
    return (
    <div className="category-buttons">
        <button className="category-button">
            <span className="button-icon">✨</span>
            Create New Note Template
        </button>
        <button className="category-button">
            <span className="button-icon">🧭</span>
            Explore
        </button>
        <button className="category-button">
            <span className="button-icon">&lt;/&gt;</span>
            Code
        </button>
        <button className="category-button">
            <span className="button-icon">📚</span>
            Learn
        </button>
    </div>
    )
}