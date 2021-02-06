import React from 'react'
import { FhThemeProvider } from './theme'

function App () {
  return (
    <FhThemeProvider>
      <div>
        <h1>TODO:</h1>
        <ul>
          <li>
            Button <b>In Progress</b>
          </li>
          <li>Modal</li>
          <li>SelectField</li>
          <li>StepperField</li>
        </ul>
      </div>
    </FhThemeProvider>
  )
}

export default App
