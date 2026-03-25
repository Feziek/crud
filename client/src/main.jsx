import '@styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Root } from '@routes/Root.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
)
