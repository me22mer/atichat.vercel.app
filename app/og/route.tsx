/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-check

import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  const imageData = await fetch(new URL("../../public/images/og-bg.png", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );
  const font = fetch(
    new URL("../../public/fonts/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  const base64ImageData = Buffer.from(imageData).toString('base64');

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          padding: "0px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Inter",
        }}
      >
        <img
          width="100%"
          height="100%"
          src={`data:image/png;base64,${base64ImageData}`}  // Use base64 encoded data
          />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
