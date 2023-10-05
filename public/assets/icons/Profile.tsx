import * as React from "react"
import { SVGProps } from "react"
const Profile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855"
    />
  </svg>
)
export default Profile
