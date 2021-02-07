import {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { useUpdateEffect } from 'src/hooks'
import { deserialize, serialize } from './utils/serializer'

type AppContext = {
  rooms: RoomData[]
  showRoomSelector: boolean
  openRoomSelector: () => void
  closeRoomSelector: () => void
  onSearch: (rooms: RoomData[]) => void
}

const appContext = createContext<AppContext>(null)

export const useAppContext = () => useContext(appContext)

type AppContextProviderProps = {}

export const AppProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [showRoomSelector, setRoomSelector] = useState(false)
  const [guestData, setGuests] = useState('1:3')
  const rooms = useMemo(() => deserialize(guestData), [guestData])

  const openRoomSelector = useCallback(() => setRoomSelector(true), [
    setRoomSelector
  ])
  const closeRoomSelector = useCallback(() => setRoomSelector(false), [
    setRoomSelector
  ])
  const onSearch: AppContext['onSearch'] = useCallback(
    rooms => {
      setGuests(serialize(rooms))
      closeRoomSelector()
    },
    [closeRoomSelector]
  )

  useUpdateEffect(() => {
    console.log('new Search', guestData, rooms)
  }, [guestData, rooms])

  return (
    <appContext.Provider
      value={{
        rooms,
        showRoomSelector,
        onSearch,
        openRoomSelector,
        closeRoomSelector
      }}
    >
      {children}
    </appContext.Provider>
  )
}
