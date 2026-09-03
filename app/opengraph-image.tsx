import { ImageResponse } from "next/og";

export const alt = "Preserve North Oakville — townhomes and detached homes by Mattamy Homes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #1B2A20 0%, #2F4A3C 58%, #3A5A4A 100%)",
          padding: "64px",
          color: "#FAF7F0",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#B4623D",
            marginBottom: 16,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Pre-construction · Oakville, Ontario · Information Hub
        </div>
        <div style={{ fontSize: 56, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Preserve North Oakville
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#B4623D",
          }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            maxWidth: 880,
            color: "#F0EBDD",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Townhomes and detached homes by Mattamy Homes near Dundas Street West and Sixth Line.
        </div>
      </div>
    ),
    { ...size },
  );
}
