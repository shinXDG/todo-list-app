import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppNavigator } from './routes/routes'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppNavigator />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
