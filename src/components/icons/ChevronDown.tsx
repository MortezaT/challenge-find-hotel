import { FC, SVGProps } from 'react'

export const ChevronDown: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    {...props}
    width='12'
    height='8'
    viewBox='0 0 12 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z'
      fill='currentcolor'
    />
  </svg>
)
