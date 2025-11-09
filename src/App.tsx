import { useState } from 'react'
import { appWindow } from '@tauri-apps/api/window'

function App() {
  // État local pour afficher le titre
  const [title, setTitle] = useState('Sovereign AI Assistant')

  /**
   * Teste l'API Tauri en changeant le titre de la fenêtre native.
   * C'est notre test "Hello World" pour prouver que le frontend
   * peut communiquer avec le shell Rust de Tauri.
   */
  const updateTitle = async () => {
    const newTitle = 'Hello, Tauri API!'
    await appWindow.setTitle(newTitle)
    setTitle(newTitle) // Met à jour aussi le h1 pour confirmation visuelle
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>{title}</h1>
      <button onClick={updateTitle}>
        Test: Changer Titre Fenêtre
      </button>
      <p style={{ marginTop: '20px', fontSize: '12px', color: '#888' }}>
        Étape 0.3 (Frontend) : OK
      </p>
    </div>
  )
}

export default App
