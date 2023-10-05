import * as React from "react"
import { SVGProps } from "react"
const Bell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17v1a3 3 0 0 0 6 0v-1M10 5a2 2 0 0 1 4 0 7 7 0 0 1 4 6v3a3.999 3.999 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6Z"
    />
  </svg>
)
export default Bell
