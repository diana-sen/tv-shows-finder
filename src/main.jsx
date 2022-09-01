import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// styles
import './styles/index.css'
// components
import App from './components/App'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
