import React from 'react'
import { Button, ButtonProps } from './components/Button'
import { Plus } from './components/icons'
import { FhThemeProvider } from './theme'

const scenarios: ButtonProps[] = [
  { color: 'primary', variant: 'contained', disabled: false },
  { color: 'primary', variant: 'contained', disabled: true },
  { color: 'secondary', variant: 'contained', disabled: false },
  { color: 'secondary', variant: 'contained', disabled: true },
  { color: 'error', variant: 'contained', disabled: false },
  { color: 'error', variant: 'contained', disabled: true },
  { color: 'primary', variant: 'text', disabled: false },
  { color: 'primary', variant: 'text', disabled: true },
  { color: 'secondary', variant: 'text', disabled: false },
  { color: 'secondary', variant: 'text', disabled: true },
  { color: 'error', variant: 'text', disabled: false },
  { color: 'error', variant: 'text', disabled: true },
  { color: 'primary', variant: 'contained', disabled: false, round: true },
  { color: 'primary', variant: 'contained', disabled: true, round: true },
  { color: 'secondary', variant: 'contained', disabled: false, round: true },
  { color: 'secondary', variant: 'contained', disabled: true, round: true },
  { color: 'error', variant: 'contained', disabled: false, round: true },
  { color: 'error', variant: 'contained', disabled: true, round: true },
  { color: 'primary', variant: 'text', disabled: false, round: true },
  { color: 'primary', variant: 'text', disabled: true, round: true },
  { color: 'secondary', variant: 'text', disabled: false, round: true },
  { color: 'secondary', variant: 'text', disabled: true, round: true },
  { color: 'error', variant: 'text', disabled: false, round: true },
  { color: 'error', variant: 'text', disabled: true, round: true },
  { color: 'primary', variant: 'contained', disabled: false , size:'large'},
  { color: 'primary', variant: 'contained', disabled: true , size:'large'},
  { color: 'secondary', variant: 'contained', disabled: false , size:'large'},
  { color: 'secondary', variant: 'contained', disabled: true , size:'large'},
  { color: 'error', variant: 'contained', disabled: false , size:'large'},
  { color: 'error', variant: 'contained', disabled: true , size:'large'},
  { color: 'primary', variant: 'text', disabled: false , size:'large'},
  { color: 'primary', variant: 'text', disabled: true , size:'large'},
  { color: 'secondary', variant: 'text', disabled: false , size:'large'},
  { color: 'secondary', variant: 'text', disabled: true , size:'large'},
  { color: 'error', variant: 'text', disabled: false , size:'large'},
  { color: 'error', variant: 'text', disabled: true , size:'large'},
  { color: 'primary', variant: 'contained', disabled: false, round: true , size:'large'},
  { color: 'primary', variant: 'contained', disabled: true, round: true , size:'large'},
  { color: 'secondary', variant: 'contained', disabled: false, round: true , size:'large'},
  { color: 'secondary', variant: 'contained', disabled: true, round: true , size:'large'},
  { color: 'error', variant: 'contained', disabled: false, round: true , size:'large'},
  { color: 'error', variant: 'contained', disabled: true, round: true , size:'large'},
  { color: 'primary', variant: 'text', disabled: false, round: true , size:'large'},
  { color: 'primary', variant: 'text', disabled: true, round: true , size:'large'},
  { color: 'secondary', variant: 'text', disabled: false, round: true , size:'large'},
  { color: 'secondary', variant: 'text', disabled: true, round: true , size:'large'},
  { color: 'error', variant: 'text', disabled: false, round: true , size:'large'},
  { color: 'error', variant: 'text', disabled: true, round: true , size:'large'},
]

function App () {
  return (
    <FhThemeProvider>
      <div style={{ overflow: 'auto', height: '100vh' }}>
        <div>
          <div style={{ position: 'sticky', top: 10, background: 'white' }}>
            <h1>TODO:</h1>
            <ul>
              <li>
                Button <b>Done</b>
              </li>
              <li>Modal <b>In Progress</b></li>
              <li>SelectField</li>
              <li>StepperField</li>
            </ul>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, auto)',
              gap: 12,
              justifyContent: 'center'
            }}
          >
            {scenarios.map((props, i) => (
              <Button key={i} {...props} iconButton>
                <Plus />
              </Button>
            ))}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, auto)',
              gap: 12,
              justifyContent: 'center'
            }}
          >
            {scenarios.map((props, i) => (
              <Button key={i} {...props}>
                <Plus />
                Hello
              </Button>
            ))}
          </div>
        </div>
      </div>
    </FhThemeProvider>
  )
}

export default App
