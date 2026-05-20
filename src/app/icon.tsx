import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f3ee",
          color: "#b86b3f",
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
        }}
      >
        b
      </div>
    ),
    { ...size }
  );
}
