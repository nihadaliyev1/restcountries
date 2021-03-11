import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  display: none;
`;

const Svgs = () => {
  return (
    <Svg>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        id="moon"
      >
        <g>
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </g>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="search"
        viewBox="0 0 512 512"
      >
        <g>
          <path
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="62"
            d="M338.29 338.29L448 448"
          />
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="62"
          />
        </g>
      </symbol>
      <symbol
        id="down"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 184l144 144 144-144"
        />
      </symbol>

      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="trash"
        viewBox="0 0 512 512"
      >
        <path
          d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M80 112h352"
        />
        <path
          d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </symbol>
      <symbol
        id="back"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M244 400L100 256l144-144M120 256h292"
        />
      </symbol>
    </Svg>
  );
};

export default Svgs;
