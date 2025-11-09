import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Ce code trouve l'élément 'root' dans l'HTML (géré par Tauri)
// et y injecte notre composant React 'App'.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
