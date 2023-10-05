import * as React from "react"
import { SVGProps } from "react"
const License = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 0 0 2 2Zm0 0a2 2 0 0 0 2-2V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-3 3v11M9 7h4m-4 4h4"
    />
  </svg>
)
export default License
