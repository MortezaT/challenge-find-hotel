import { FC, SVGProps } from 'react'

export const Minus: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    {...props}
    width='14'
    height='2'
    viewBox='0 0 14 2'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14 2H0V0H14V2Z'
      fill='currentcolor'
    />
  </svg>
)
