import { FC } from 'react'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { StepperField } from '../Stepper'

type AdultRowProps = {
  name: string
  min: number
  max: number
}

export const AdultRow: FC<AdultRowProps> = props => {
  const classes = useStyle(props)

  return (
    <div className={classes.root}>
      <div className={classes.label}>Adults</div>
      <StepperField {...props} />
    </div>
  )
}

const useStyle = createFhUseStyles(
  ({ typography }) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    label: {
      ...typography.body
    }
  }),
  { name: 'AdultRow' }
)
