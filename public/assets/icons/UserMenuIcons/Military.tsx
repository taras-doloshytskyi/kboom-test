import * as React from "react"
import { SVGProps } from "react"
const Military = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 10.5 7.5 8H2l2.48 5.788A2 2 0 0 0 6.32 15H8.5m7-4.5 1-2.5H22l-2.48 5.788A2 2 0 0 1 17.68 15H15.5M8 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
    />
  </svg>
)
export default Military
