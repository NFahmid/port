import { ImageResponse } from "next/og";

export const alt = "Nuren Fahmid portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f4efe5",
          color: "#1c211c",
          fontFamily: "Georgia, serif",
          padding: 64,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid rgba(28,33,28,0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 92,
            right: 92,
            width: 280,
            height: 360,
            border: "2px solid rgba(28,33,28,0.24)",
            background: "#eee6d8",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "72%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              fontFamily: "Arial, sans-serif",
              fontSize: 24,
              fontWeight: 700,
              color: "#985a37",
            }}
          >
            <span>Portfolio</span>
            <span style={{ width: 96, height: 2, background: "#985a37" }} />
            <span>Software Engineering</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 104, lineHeight: 0.95, fontWeight: 600 }}>
              Nuren Fahmid
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.35,
                fontFamily: "Arial, sans-serif",
                color: "#4f6d61",
              }}
            >
              Software Engineering undergraduate building full-stack,
              AI-assisted, and systems projects.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontFamily: "Arial, sans-serif",
              fontSize: 24,
              color: "#687168",
            }}
          >
            <span>IUT</span>
            <span>2023-2027</span>
            <span>GitHub: NFahmid</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
