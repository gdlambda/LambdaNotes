import './index.css'

export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="sidebar-header">
                <h1 class="app-title">LambdaNotes</h1>
                <button class="new-note-btn">New Note</button>
                <div class="search-container">
                    <span class="search-icon">🔍</span>
                    <input type="text" class="search-input" placeholder="Search your notes..." />
                </div>
            </div>
            <div class="sidebar-footer">
                <a href="#" class="login-link">
                    <span class="login-icon">→</span>
                    <span>Login</span>
                </a>
            </div>
        </div>
    )
}