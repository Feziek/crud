import '@styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MainRoute } from '@routes/MainRoute.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <MainRoute />
  </StrictMode>
)
