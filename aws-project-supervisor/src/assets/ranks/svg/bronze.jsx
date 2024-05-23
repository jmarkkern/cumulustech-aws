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
    </svg>
  );
}

export default BronzeIcon;