import * as React from "react"
import { SVGProps } from "react"
const Twitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#262C3A"
        d="m20.945 11.208-3.49 3.449h-3.491l-3.055 3.017v-3.017H6.982V1.724h13.963v9.484Z"
      />
      <path
        fill="#2CE5A7"
        d="M6.11 0 1.744 4.31v15.52h5.237v4.31l4.363-4.31h3.491l7.855-7.76V0H6.109Zm14.835 11.208-3.49 3.449h-3.491l-3.055 3.017v-3.017H6.982V1.724h13.963v9.484Z"
      />
      <path
        fill="#2CE5A7"
        d="M18.327 4.742h-1.745v5.173h1.745V4.742ZM13.527 4.742h-1.745v5.173h1.745V4.742Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Twitch
