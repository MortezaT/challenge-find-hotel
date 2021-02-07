import { Form, Formik, useField } from 'formik'
import React, { FC, useCallback, useMemo } from 'react'
import { useAppContext } from 'src/AppContext'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { Button } from '../Button'
import { Plus, Search } from '../icons'
import { Modal } from '../Modal'
import { RoomCard } from './RoomCard'

type GuestPickerModalProps = {}

export const GuestPickerModal: FC<GuestPickerModalProps> = props => {
  const {
    rooms,
    showRoomSelector,
    onSearch,
    closeRoomSelector
  } = useAppContext()

  const onSubmit = useCallback(
    ({ rooms }: { rooms: RoomData[] }) => onSearch(rooms),
    [onSearch]
  )

  if (!showRoomSelector) return null

  return (
    <Formik initialValues={{ rooms }} onSubmit={onSubmit}>
      <Form>
        <Modal
          {...{
            onClose: closeRoomSelector,
            title: 'Who is staying?',
            footer: <Footer name='rooms' />
          }}
        >
          <RoomList name='rooms' />
        </Modal>
      </Form>
    </Formik>
  )
}

const RoomList: FC<{ name: string }> = ({ name }) => {
  const classes = useRoomListStyle()
  const [{ value: rooms }, , { setValue }] = useField<RoomData[]>(name)
  const onAdd = useCallback(
    () => setValue(rooms.concat({ adults: 1, children: [] })),
    [rooms, setValue]
  )
  const onRemove = (index: number) => () =>
    setValue(rooms.filter((_, i) => i !== index))

  return (
    <div className={classes.root}>
      {rooms.map((_, index) => (
        <RoomCard
          {...{
            onRemove: index ? onRemove(index) : undefined,
            name: `rooms[${index}]`,
            title: `Room ${index + 1}`,
            key: index
          }}
        />
      ))}
      <Button color='secondary' size='large' onClick={onAdd}>
        <Plus />
        Add Room
      </Button>
    </div>
  )
}

const useRoomListStyle = createFhUseStyles(
  ({ spacing }) => ({
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'stretch',
      gap: spacing(2),
      padding: spacing(0, 4)
    }
  }),
  { name: 'RoomList' }
)

const Footer: FC<{ name: string }> = ({ name }) => {
  const classes = useFooterStyle()
  const [{ value }] = useField<RoomData[]>(name)
  const { rooms, guests } = useMemo(
    () => ({
      rooms: value.length,
      guests: value
        .map(({ adults, children }) => adults + children.length)
        .reduce((a, c) => a + c, 0)
    }),
    [value]
  )

  return (
    <Button fullWidth type='submit' size='large' className={classes.root}>
      <Search />
      Search
      <span className={classes.info}>
        {rooms} rooms • {guests} guests
      </span>
    </Button>
  )
}

const useFooterStyle = createFhUseStyles(
  ({ typography }) => ({
    root: {},
    info: { ...typography.body2 }
  }),
  { name: 'Footer' }
)
