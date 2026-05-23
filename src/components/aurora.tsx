export function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="aurora-blob animate-float-slow"
        style={{
          top: "-10%",
          left: "10%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, oklch(0.55 0.22 290 / 0.55), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob animate-float-slower"
        style={{
          top: "20%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, oklch(0.55 0.18 220 / 0.45), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob animate-float-slow"
        style={{
          top: "60%",
          left: "30%",
          width: "440px",
          height: "440px",
          background:
            "radial-gradient(circle, oklch(0.55 0.2 330 / 0.35), transparent 70%)",
        }}
      />
    </div>
  );
}
