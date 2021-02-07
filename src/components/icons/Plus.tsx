import { FC, SVGProps } from 'react'

export const Plus: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    {...props}
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z'
      fill='currentcolor'
    />
  </svg>
)
