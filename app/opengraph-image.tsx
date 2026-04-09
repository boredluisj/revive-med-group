import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Revive Medical Group - Hormone Therapy & Regenerative Medicine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #3D4A5C 0%, #59637E 50%, #3D4A5C 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFBF0",
            letterSpacing: "4px",
            marginBottom: 20,
          }}
        >
          REVIVE MEDICAL
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#EBE5D5",
            letterSpacing: "2px",
            marginBottom: 40,
          }}
        >
          GROUP
        </div>
        <div
          style={{
            width: 80,
            height: 2,
            background: "#EBE5D5",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 24,
            color: "#EBE5D5",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Hormone Therapy & Regenerative Medicine
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(235, 229, 213, 0.7)",
            marginTop: 16,
          }}
        >
          North Myrtle Beach, SC | Led by Chad Watts, DMSc, PA-C
        </div>
      </div>
    ),
    { ...size }
  );
}
