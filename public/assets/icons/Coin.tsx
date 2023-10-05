import * as React from "react"
import { SVGProps } from "react"
const Coin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={12} cy={12} r={12} fill="#FFDE1E" />
    </g>
    <g filter="url(#b)">
      <circle cx={12} cy={12} r={10} fill="#FFBD06" />
    </g>
    <g filter="url(#c)">
      <path
        fill="#fff"
        d="M15.998 13.676c-.031-1.303-.3-2.597-.977-3.697-.223-.401-.45-.716-.54-1.14-.126-.722.238-1.436.551-2.074-.623.714-.918 1.258-1.025 1.739-.514 1.437-.175 1.831.336 2.549.1.14.138.261.143.367a.54.54 0 0 1-.132.35l-.011.014a.554.554 0 0 1-.069.063l-.007.005a.51.51 0 0 1-.607-.01v.006c-1.43-1.38.515-4.02-.781-6.615v.011C12.35 4.37 11.53 3.62 10.375 3c.177.151.35.312.518.48.853.908 2.27 3.005.247 5.522-.483-1.246.612-2.239.612-2.239-3.051 1.761-5.52 4.595-4.53 8.044.116.5.313.967.577 1.388.017.03.03.06.048.09l.005-.003c.106.16.218.31.342.455l.016.017c.063.073.13.145.196.214.424.473.676.839.676 1.181v.237c0 .337.268.612.596.612h.238a.605.605 0 0 0 .595-.612v-.028h.345v.026c0 .337.27.614.597.614h.235a.608.608 0 0 0 .597-.614v-.026h.302v.03c0 .335.268.612.596.612h.24a.606.606 0 0 0 .595-.612v-.267c.013-.328.25-.678.65-1.127A4.617 4.617 0 0 0 16 13.733c0-.021 0-.04-.002-.06H16l-.002.003Zm-2.913.5c.61 0 1.104.508 1.104 1.134 0 .627-.494 1.135-1.104 1.135-.61 0-1.104-.508-1.104-1.135 0-.626.494-1.134 1.104-1.134Zm-2.99-.375c.81 0 1.469.676 1.469 1.51 0 .833-.658 1.509-1.47 1.509-.81 0-1.469-.676-1.469-1.51 0-.833.658-1.509 1.47-1.509Z"
      />
    </g>
    <path
      fill="#fff"
      fillOpacity={0.3}
      fillRule="evenodd"
      d="m1.521 6 16.453 16.453a11.922 11.922 0 0 1-4.136 1.521L0 10.136C.25 8.646.775 7.25 1.52 6ZM21.502 19.32 4.67 2.486A11.967 11.967 0 0 1 8.383.544l15.062 15.062a11.967 11.967 0 0 1-1.943 3.713ZM23.674 15.06 9 .386A11.988 11.988 0 0 1 11.548 0L24.06 12.51c-.037.878-.169 1.73-.385 2.549Z"
      clipRule="evenodd"
    />
    <defs>
      <filter
        id="a"
        width={24.5}
        height={24.5}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.5} dy={0.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.619608 0 0 0 0 0.0235294 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_172_1716"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_172_1716"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={20}
        height={20}
        x={2}
        y={2}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.5} dy={0.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.619608 0 0 0 0 0.0235294 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_172_1716" />
      </filter>
      <filter
        id="c"
        width={9.145}
        height={16.145}
        x={7}
        y={3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.145} dy={0.145} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.678431 0 0 0 0 0.4 0 0 0 0 0.262745 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_172_1716"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_172_1716"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={0.125} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect2_innerShadow_172_1716" />
      </filter>
    </defs>
  </svg>
)
export default Coin
