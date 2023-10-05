import * as React from "react"
import { SVGProps } from "react"
const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill="#D9D9D9"
      stroke="#000"
      d="M18.028 1.593a4.055 4.055 0 0 0-4.056 0l-10.3 5.948a4.056 4.056 0 0 0-2.028 3.512v11.894c0 1.45.773 2.788 2.027 3.512l10.301 5.948c1.255.724 2.801.724 4.056 0l10.3-5.948a4.055 4.055 0 0 0 2.029-3.512V11.053a4.056 4.056 0 0 0-2.028-3.512L18.028 1.593Z"
    />
    <path
      fill="#D9D9D9"
      stroke="#000"
      d="M19.056 13.444a3.056 3.056 0 1 1-6.111 0 3.056 3.056 0 0 1 6.11 0Z"
    />
    <path stroke="#000" d="M8 28.556s1.905-9.778 8-9.778 8 9.778 8 9.778" />
  </svg>
)
export default UserIcon
