import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import SwitchButton from './switch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/switch' element={<SwitchButton />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
