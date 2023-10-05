import * as React from "react"
import { SVGProps } from "react"
const YouTube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#2CE5A7"
      d="M23.19 6.378a2.925 2.925 0 0 0-2.064-2.065C19.304 3.825 12 3.825 12 3.825s-7.304 0-9.126.488A2.925 2.925 0 0 0 .81 6.378C.321 8.2.321 12 .321 12s0 3.8.488 5.622a2.926 2.926 0 0 0 2.065 2.065c1.822.488 9.126.488 9.126.488s7.304 0 9.126-.488a2.926 2.926 0 0 0 2.065-2.065c.488-1.822.488-5.622.488-5.622s0-3.8-.488-5.622Z"
    />
    <path fill="#262C3A" d="m9.612 15.451 6.105-3.45-6.105-3.45v6.9Z" />
  </svg>
)
export default YouTube
