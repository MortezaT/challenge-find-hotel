import { useField } from 'formik'
import { FC, useMemo } from 'react'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { Button } from '../Button'
import { AdultRow } from './AdultRow'
import { Children } from './Children'

type RoomCardProps = {
  title: string
  name: string
  classes?: Partial<ReturnType<typeof useStyle>>
  onRemove?: () => void
}

export const RoomCard: FC<RoomCardProps> = props => {
  const classes = useStyle(props)
  const { name, title, onRemove } = props
  const [{ value }] = useField<RoomData>(name)
  const { adults, children } = value
  const adultsProps = useMemo(
    () => ({ name: `${name}.adults`, min: 1, max: 5 - children.length }),
    [name, children.length]
  )
  const childrenProps = useMemo(
    () => ({
      name: `${name}.children`,
      min: 0,
      max: 5 - Math.max(2, adults)
    }),
    [name, adults]
  )

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.title}>{title}</h2>
        {onRemove ? (
          <Button variant='text' color='error' onClick={onRemove}>
            Remove room
          </Button>
        ) : null}
      </div>
      <AdultRow {...adultsProps} />
      <Children {...childrenProps} />
    </div>
  )
}

const useStyle = createFhUseStyles(
  ({ typography, palette, spacing }) => ({
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      borderBottom: `1px solid ${palette.grey}`,
      marginBottom: spacing(2),
      '& > *+*': {
        marginBottom: spacing(4)
      }
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title: {
      ...typography.title
      // margin: spacing(2, 0)
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }),
  { name: 'RoomCard' }
)
