import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#050714",
          color: "#f6f6f9",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "780px" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(108, 93, 211, 0.25)",
              fontSize: "28px",
            }}
          >
            <span
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "999px",
                background: "rgba(34, 211, 238, 0.8)",
                boxShadow: "0 0 18px rgba(34, 211, 238, 0.8)",
              }}
            />
            Chatbots IA sur mesure
          </span>
          <h1 style={{ fontSize: "88px", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
            Intelliwave
          </h1>
          <p style={{ fontSize: "36px", margin: 0, color: "rgba(246, 246, 249, 0.75)" }}>
            L&apos;agence d&apos;automatisation IA qui transforme vos conversations en croissance.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "28px", color: "rgba(246, 246, 249, 0.7)" }}>
              intelliwave.ai
            </span>
            <span style={{ fontSize: "24px", color: "rgba(246, 246, 249, 0.5)" }}>
              Chatbots • Automatisation • IA générative
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 28px",
              borderRadius: "18px",
              background: "rgba(108, 93, 211, 0.15)",
              border: "1px solid rgba(108, 93, 211, 0.4)",
              fontSize: "28px",
              fontWeight: 600,
            }}
          >
            Temps réel
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
