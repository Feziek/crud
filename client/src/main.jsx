import '@styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Root } from '@routes/Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
