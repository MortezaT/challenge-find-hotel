import { useField } from 'formik'
import { ChangeEvent, FC, useCallback, useMemo } from 'react'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { ChevronDown } from './icons'

type SelectFieldProps = {
  name: string
  range: [number, number] | [number, number, number]
  classes?: Partial<ReturnType<typeof useStyle>>
}

export const SelectField: FC<SelectFieldProps> = props => {
  const classes = useStyle(props)
  const {
    name,
    range: [min, max, step = 1]
  } = props
  const [{ value }, , { setValue }] = useField<number>(name)
  const options = useMemo(() => {
    const length = Math.ceil((max - min) / step)
    return Array.from({ length }, (_, i) => min + i * step)
  }, [max, min, step])

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setValue(+e.target.value),
    [setValue]
  )

  return (
    <div className={classes.root}>
      <select {...{ value, onChange, className: classes.select }}>
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className={classes.dropdown} />
    </div>
  )
}

const useStyle = createFhUseStyles(
  ({ borderRadius, pallette, spacing, typography }) => ({
    root: {
      position: 'relative',
      display: 'grid'
    },
    select: {
      ...typography.body,
      appearance: 'none',
      outline: 'none',
      borderRadius,
      padding: spacing(2, 4),
      height: 40,
      background: pallette.background,
      border: `1px solid ${pallette.border}`,
      cursor: 'pointer'
    },
    dropdown: {
      position: 'absolute',
      right: spacing(2),
      top: '50%',
      color: pallette.primary,
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }),
  { name: 'Select' }
)
