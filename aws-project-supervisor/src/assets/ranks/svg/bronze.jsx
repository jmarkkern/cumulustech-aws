import React from "react";

function BronzeIcon({ number }) {
  return (
    <svg
    className="icon-jsx"

      xmlns="http://www.w3.org/2000/svg"
      id="svg1"
      width="100%"
      height="1001"
      version="1.1"
      viewBox="0 0 264.848 264.848"
      xmlSpace="preserve"
    >
      <g id="layer1" fillOpacity="1" stroke="none">
        <circle
          id="path1"
          cx="132.424"
          cy="132.424"
          r="132.326"
          fill="#c28d3f"
          strokeWidth="8.953"
        ></circle>
        <path
          id="path1-5"
          fill="#d29d4f"
          strokeWidth="8.953"
          d="M264.75-132.424A132.326 132.326 0 01132.424-.098v-132.326z"
          transform="scale(1 -1)"
        ></path>
        <path
          id="path1-5-1"
          fill="#ebd9c0"
          strokeWidth="8.953"
          d="M247.022-66.26a132.326 132.326 0 01-48.435 48.434l-66.163-114.598z"
          transform="scale(1 -1)"
        ></path>
        <path
          id="path1-5-9"
          fill="#8d5c14"
          strokeWidth="8.953"
          d="M-.098 132.424A132.326 132.326 0 01-132.424 264.75V132.424z"
          transform="scale(-1 1)"
        ></path>
        <path
          id="path1-5-1-2"
          fill="#3f2d14"
          strokeWidth="8.953"
          d="M-17.826 198.587a132.326 132.326 0 01-48.435 48.435l-66.163-114.598z"
          transform="scale(-1 1)"
        ></path>
        <circle
          id="path2"
          cx="132.424"
          cy="132.424"
          r="92.951"
          fill="#b07b2d"
          strokeWidth="14.976"
        ></circle>

<text
          xmlSpace="preserve"
          style={{
            lineHeight: "0.8",
            InkscapeFontSpecification: "'Amazon Ember, Bold'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          id="text1"
          x="130.486"
          y="239.106"
          fill="#fff"
          stroke="#294853"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="6.615"
          fontFamily="Amazon Ember"
          fontSize="176.389"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="bold"
          letterSpacing="2.727"
          textAnchor="middle"
        >
          <tspan
            id="tspan1"
            style={{
              InkscapeFontSpecification: "'Amazon Ember, Bold'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            x="131.849"
            y="190.106"
            stroke="#294853"
            strokeDasharray="none"
            strokeOpacity="1"
            strokeWidth="6.615"
            fontFamily="Amazon Ember"
            fontSize="160.389"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="bold"
          >
             {number}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default BronzeIcon;