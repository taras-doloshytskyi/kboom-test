import * as React from "react"
import { SVGProps } from "react"
const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#2CE5A7"
      d="M24 12c0-6.628-5.373-12-12-12S0 5.372 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.357c0-3.007 1.791-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.989 24 12Z"
    />
    <path
      fill="#262C3A"
      d="M16.671 15.469 17.203 12h-3.328V9.749c0-.949.465-1.874 1.956-1.874h1.513V4.922s-1.374-.234-2.686-.234c-2.742 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v8.385a12.084 12.084 0 0 0 3.75 0V15.47h2.796Z"
    />
  </svg>
)
export default Facebook
