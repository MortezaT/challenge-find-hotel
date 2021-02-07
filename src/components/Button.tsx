import { ButtonHTMLAttributes, FC, useMemo } from 'react'
import { createFhUseStyles } from 'src/theme/createFhUseStyles'
import { paletteColors } from '../theme'

type ButtonColors = 'primary' | 'secondary' | 'error' | 'default'
type ButtonSizes = 'medium' | 'large'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'contained' | 'text'
  iconButton?: boolean
  round?: boolean
  fullWidth?: boolean
  size?: ButtonSizes
  color?: ButtonColors
}

const buttonSizes: Record<ButtonSizes, number> = {
  medium: 40,
  large: 48
}

const containedVariantColorMap: Record<ButtonColors, paletteColors> = {
  default: 'background',
  error: 'background',
  primary: 'background',
  secondary: 'primary'
}

export const Button: FC<ButtonProps> = props => {
  const classes = useStyle(props)
  const { variant, iconButton, round, fullWidth, size, color, ...rest } = props
  const rootClassName = useMemo(() => {
    return [
      classes.root,
      !props.disabled && classes[variant],
      props.className,
      props.disabled && classes.disabled
    ]
      .filter(Boolean)
      .join(' ')
  }, [classes, variant, props.className, props.disabled])

  return (
    <button
      {...rest}
      {...{
        className: rootClassName
      }}
    />
  )
}

const useStyle = createFhUseStyles(
  ({ palette, typography, shadows, spacing, borderRadius }) => ({
    root: {
      ...typography.body,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing(2),
      cursor: ({ disabled }: ButtonProps) =>
        disabled ? 'not-allowed' : 'pointer',
      borderRadius: ({ round, size }: ButtonProps) =>
        round ? buttonSizes[size] : borderRadius,
      width: ({ fullWidth, iconButton, size }: ButtonProps) => {
        if (fullWidth) return '100%'
        if (iconButton) return buttonSizes[size] ?? buttonSizes.medium
      },
      height: ({ size }: ButtonProps) => buttonSizes[size] ?? buttonSizes.medium
    },
    contained: {
      padding: spacing(3),
      boxShadow: shadows[0],
      border: ({ color }: ButtonProps) => {
        const borderColor = color !== 'secondary' ? palette[color] : '#BFDAF9'
        return `1px solid ${borderColor}`
      },
      color: ({ color }: ButtonProps) => {
        const mapped = containedVariantColorMap[color]
        return palette[mapped]
      },
      backgroundColor: ({ color }: ButtonProps) =>
        palette[color] ?? palette.primary
    },
    text: {
      padding: 0,
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      color: ({ color }: ButtonProps) => palette[color] ?? palette.primary
    },
    disabled: {
      color: '#8e8e8e',
      border: '#8e8e8e',
      backgroundColor: ({ variant }: ButtonProps) =>
        variant !== 'text' ? '#eaeaea' : undefined
    }
  }),
  { name: 'Button' }
)

Button.defaultProps = {
  iconButton: false,
  type: 'button',
  size: 'medium',
  color: 'default',
  variant: 'contained'
}
