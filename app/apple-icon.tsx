import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2454ff",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          fontSize: 76,
          fontWeight: 800,
          letterSpacing: -6,
        }}
      >
        NF
        <span
          style={{
            position: "absolute",
            right: 24,
            bottom: 20,
            left: 24,
            height: 8,
            background: "#d8ff68",
          }}
        />
      </div>
    ),
    size,
  );
}
