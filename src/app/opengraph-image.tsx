import { ImageResponse } from "next/og";

export const alt = "Brennan Butler — Software engineer in Brooklyn";
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
          justifyContent: "center",
          padding: 80,
          background: "#f6f3ee",
          color: "#2c2824",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#b86b3f",
            marginBottom: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Brennan Butler
        </div>
        <div
          style={{
            fontSize: 56,
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          I build the parts of the product people actually touch.
        </div>
        <div style={{ fontSize: 24, marginTop: 32, color: "#5c5650" }}>
          Senior software engineer · Brooklyn · Open to opportunities
        </div>
      </div>
    ),
    { ...size }
  );
}
