import React, { useState } from 'react'
import { Button } from './components/Button'
import { Search } from './components/icons'
import { Modal } from './components/Modal'
import { FhThemeProvider } from './theme'

function App () {
  const [isOpen, setOpen] = useState(false)

  return (
    <FhThemeProvider>
      <>
        <div style={{ overflow: 'auto', height: '100vh' }}>
          <div style={{ position: 'sticky', top: 10, background: 'white' }}>
            <h1>TODO:</h1>
            <ul>
              <li>
                Button <b>Done</b>
              </li>
              <li>
                Modal <b>Done</b>
              </li>
              <li>
                SelectField <b>In Progress</b>
              </li>
              <li>StepperField</li>
            </ul>
          </div>
          <Button
            color='primary'
            variant='contained'
            onClick={() => setOpen(true)}
            style={{ margin: 'auto' }}
          >
            Open Modal
          </Button>
        </div>
        {isOpen && (
          <Modal
            {...{
              onClose: () => setOpen(false),
              title: 'A simple modal',
              footer: (
                <Button fullWidth onClick={() => setOpen(false)}>
                  <Search />
                  Search
                </Button>
              )
            }}
          >
            Contents goes there
          </Modal>
        )}
      </>
    </FhThemeProvider>
  )
}

export default App
