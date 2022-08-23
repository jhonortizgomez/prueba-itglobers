import * as React from "react";

export const Logo = (props) => (
  <svg
    width={140}
    height={110}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="201.806 38 96.388 83.6"
    style={{
      background: "0 0",
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <filter id="a">
        <feFlood floodColor="#333" result="flood-1" />
        <feMorphology radius={1} in="SourceAlpha" result="erode" />
        <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
        <feConvolveMatrix
          // order="0,0"
          divisor={1}
          in="comp1"
          result="convolve"
        />
        <feOffset in="convolve" result="extrude" />
        <feComposite
          operator="in"
          in="flood-1"
          in2="extrude"
          result="comp-extrude"
        />
        <feFlood floodColor="#000" result="flood-2" />
        <feComposite
          operator="in"
          in="flood-2"
          in2="SourceAlpha"
          result="comp2"
        />
        <feMorphology operator="dilate" radius={1} in="comp2" result="dilate" />
        <feOffset in="dilate" result="offset" />
        <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
        <feComponentTransfer in="blur" result="shadow">
          <feFuncA type="linear" slope={0.8} intercept={-0.2} />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="comp-extrude" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="M228.835 76.155h1.59q1.26 0 1.94-.58.67-.59.67-1.79 0-1.14-.71-1.76-.7-.61-2.05-.61-.48 0-.8.02-.31.01-.64.07v4.65Zm.03 4.11v5.52q-.33.09-1.03.18-.71.09-1.4.09t-1.22-.11q-.52-.1-.88-.37t-.54-.75q-.18-.48-.18-1.26v-14.13q0-.63.34-.98.35-.34.95-.55 1.02-.36 2.32-.52 1.31-.17 2.63-.17 4.14 0 6.33 1.77 2.19 1.77 2.19 4.8 0 1.47-.46 2.66-.47 1.18-1.38 2.04-.92.85-2.32 1.32-1.39.46-3.22.46h-2.13Zm11.79-.15v-8.58q.3-.09.94-.18.65-.09 1.34-.09.66 0 1.18.09.53.09.89.36t.55.73q.2.47.2 1.22v6.45q0 1.23.6 1.75.6.53 1.74.53.69 0 1.12-.12.44-.12.68-.24v-10.5q.3-.09.94-.18.65-.09 1.34-.09.66 0 1.19.09.52.09.88.36t.55.73q.2.47.2 1.22v9.12q0 1.5-1.26 2.25-1.05.66-2.51 1.01-1.45.34-3.16.34-1.62 0-2.99-.36-1.36-.36-2.35-1.11-.99-.75-1.53-1.93-.54-1.19-.54-2.87Zm17.52 3.63v-12.42q0-1.53.53-2.62.52-1.1 1.42-1.8.9-.71 2.12-1.04 1.21-.33 2.59-.33 2.22 0 3.27.58 1.05.59 1.05 2 0 .6-.26 1.08-.25.48-.55.72-.57-.15-1.18-.26-.62-.1-1.43-.1-1.29 0-2.01.44-.72.43-.72 1.51v.96h4.92q.18.33.35.82.16.5.16 1.1 0 1.05-.47 1.52-.46.46-1.24.46h-3.45v9.51q-.3.09-.95.18-.64.09-1.33.09-.66 0-1.18-.09-.53-.09-.89-.36t-.56-.73q-.19-.47-.19-1.22Zm12.63-16.47q0-1.14.76-1.92.77-.78 2.03-.78 1.26 0 2.02.78.77.78.77 1.92t-.77 1.92q-.76.78-2.02.78t-2.03-.78q-.76-.78-.76-1.92Zm5.34 6.39v12.21q-.33.06-.98.17-.64.1-1.3.1t-1.19-.09q-.52-.09-.88-.36t-.56-.73q-.19-.47-.19-1.22v-12.21q.33-.06.97-.17.65-.1 1.31-.1t1.18.09q.53.09.89.36t.55.73q.2.47.2 1.22Z"
        fill="#fff"
      />
    </g>
  </svg>
);
