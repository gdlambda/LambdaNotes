import './index.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1 className="app-title">LambdaNotes</h1>
                <button className="new-note-btn">New Note</button>
                <div className="search-container">
                    <span className="search-icon">🔍</span>
                    <input type="text" className="search-input" placeholder="Search your notes..." />
                </div>
            </div>
            <div className="sidebar-footer">
                <a href="#" className="login-link">
                    <span className="login-icon">→</span>
                    <span>Login</span>
                </a>
            </div>
        </div>
    )
}