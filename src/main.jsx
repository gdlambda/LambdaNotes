import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './Sidebar.jsx'
import NoteArea from './NoteArea.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" className="menu-toggle-label">☰</label>
    <div className="menu-overlay"></div>
    <Sidebar />
    <NoteArea />
  </StrictMode>,
)
