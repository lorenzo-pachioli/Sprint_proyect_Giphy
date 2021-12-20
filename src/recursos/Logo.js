import React from "react";

function Logo(props) {
  return (
    <svg
      width={32}
      height={32}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="prefix__a" d="M.495.526h57.777V24.17H.495z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#5ED7C6"
          d="M3 0v32.108h28.109v-6.88H29.1v4.587H5.008V2.293h18.07v6.88H29.1v4.588h2.008v-6.88L25.085 0z"
        />
        <mask id="prefix__b" fill="#fff">
          <use xlinkHref="#prefix__a" />
        </mask>
        <text
          mask="url(#prefix__b)"
          fontFamily="Roboto-Black, Roboto"
          fontSize={9}
          fontWeight={700}
          fill="currentColor"
        >
          <tspan x={5} y={21}>
            {"GIFOS"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default Logo;
