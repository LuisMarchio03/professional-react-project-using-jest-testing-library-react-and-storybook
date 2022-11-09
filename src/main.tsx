import React from 'react'
import ReactDOM from 'react-dom/client'

import { globalStyles } from './styles/global'

import { App } from './App'

globalStyles()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
