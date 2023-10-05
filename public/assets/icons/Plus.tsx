import * as React from "react"
import { SVGProps } from "react"
const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <rect width={11} height={11} x={0.5} y={0.5} fill="#BCAAE8" rx={5.5} />
    <path
      fill="#fff"
      d="M3.5 6.628a.5.5 0 0 1-.5-.5v-.4a.5.5 0 0 1 .5-.5h1.548a.25.25 0 0 0 .25-.25V3.5a.5.5 0 0 1 .5-.5h.399a.5.5 0 0 1 .5.5v1.479c0 .138.112.25.25.25H8.5a.5.5 0 0 1 .5.5v.399a.5.5 0 0 1-.5.5H6.947a.25.25 0 0 0-.25.25v1.478a.5.5 0 0 1-.5.5h-.4a.5.5 0 0 1-.5-.5V6.878a.25.25 0 0 0-.25-.25H3.5Z"
    />
    <rect width={11} height={11} x={0.5} y={0.5} stroke="#6D43C0" rx={5.5} />
  </svg>
)
export default Plus
