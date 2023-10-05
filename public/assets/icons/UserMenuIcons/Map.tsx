import * as React from "react"
import { SVGProps } from "react"
const Map = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 4 3 7v13l6-3M9 4l6 3M9 4v13m6-10 6-3v13l-6 3m0-13v13m0 0-6-3"
    />
  </svg>
)
export default Map
