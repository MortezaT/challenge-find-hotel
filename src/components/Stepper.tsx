import { useField } from 'formik'
import { FC, useCallback } from 'react'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { Button } from './Button'
import { Minus, Plus } from './icons'

type StepperProps = {
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
}

type StepperFieldProps = Omit<StepperProps, 'value' | 'onChange'> & {
  name: string
}

export const Stepper: FC<StepperProps> = props => {
  const classes = useStyle(props)
  const { value, onChange, min = value - 1, max = value + 1 } = props
  const onDec = useCallback(() => onChange(value - 1), [onChange, value])
  const onInc = useCallback(() => onChange(value + 1), [onChange, value])

  return (
    <div className={classes.root}>
      <Button
        color='secondary'
        variant='contained'
        onClick={onDec}
        disabled={value <= min}
      >
        <Minus />
      </Button>
      {value}
      <Button
        color='secondary'
        variant='contained'
        onClick={onInc}
        disabled={max <= value}
      >
        <Plus />
      </Button>
    </div>
  )
}

export const StepperField: FC<StepperFieldProps> = props => {
  const [{ value }, , { setValue }] = useField<number>(props)

  return <Stepper {...props} {...{ value, onChange: setValue }} />
}

const useStyle = createFhUseStyles(
  ({ spacing }) => ({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 40px)',
      gap: spacing(2),
      alignItems: 'center',
      textAlign: 'center'
    }
  }),
  { name: 'Stepper' }
)
