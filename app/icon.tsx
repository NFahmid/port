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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c211c",
          color: "#fffaf0",
          fontFamily: "Georgia, serif",
          fontSize: 30,
          border: "4px solid #985a37",
        }}
      >
        NF
      </div>
    ),
    size,
  );
}
