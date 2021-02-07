import React, { FC, useMemo } from 'react'
import { Guests } from 'src/components/icons'
import { AppProvider, useAppContext } from './AppContext'
import { Button } from './components/Button'
import { GuestPickerModal } from './components/GuestPickerModal'
import { FhThemeProvider } from './theme'

const App: FC = () => {
  return (
    <FhThemeProvider>
      <AppProvider>
        <div style={{ overflow: 'auto', height: '100vh' }}>
          <GuestSelectorAction />
          <GuestPickerModal />
        </div>
      </AppProvider>
    </FhThemeProvider>
  )
}

export default App
const GuestSelectorAction: FC = () => {
  const { openRoomSelector, rooms } = useAppContext()
  const guestCount = useMemo(
    () =>
      rooms
        .map(({ adults, children }) => adults + children.length)
        .reduce((a, c) => a + c, 0),
    [rooms]
  )

  return (
    <Button
      color='secondary'
      variant='contained'
      onClick={openRoomSelector}
      style={{
        width: '17%',
        gap: 4,
        padding: 0,
        color: '#2A333D',
        backgroundColor: 'white',
        fontWeight: 'normal',
        position: 'absolute',
        top: '66%',
        right: '4.5%'
      }}
    >
      <Guests /> {guestCount}
    </Button>
  )
}
