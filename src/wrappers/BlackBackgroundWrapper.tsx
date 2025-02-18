function BlackBackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}

export default BlackBackgroundWrapper;
