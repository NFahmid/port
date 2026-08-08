import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 27,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        NF
        <span
          style={{
            position: "absolute",
            right: 8,
            bottom: 7,
            left: 8,
            height: 3,
            background: "#d8ff68",
          }}
        />
      </div>
    ),
    size,
  );
}
