import { FC } from 'react'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { Button } from '../Button'
import { Close } from '../icons'
import { SelectField } from '../SelectField'

export type ChildAgeSelectProps = {
  label: string
  name: string
  onRemove: () => void
}

export const ChildAgeSelect: FC<ChildAgeSelectProps> = props => {
  const classes = useStyle(props)
  const { label, name, onRemove } = props

  return (
    <div className={classes.root}>
      <span>{label}</span>
      <SelectField
        {...{
          name,
          range: [0, 10],
          classes: { root: classes.select }
        }}
      />
      <Button
        iconButton
        color='error'
        variant='text'
        onClick={onRemove}
      >
        <Close />
      </Button>
    </div>
  )
}

const useStyle = createFhUseStyles(
  ({ spacing }) => ({
    root: {
      height: 40,
      marginTop: spacing(2),
      display: 'grid',
      gap: spacing(),
      gridTemplateColumns: '1fr auto 32px'
    },
    select: {
      width: 100
    }
  }),
  { name: 'ChildAgeSelect' }
)
