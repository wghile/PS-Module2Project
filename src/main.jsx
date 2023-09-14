import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { HashRouter, HashRouter as Router } from 'react-router-dom'
// import { HashRouter, HashRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
