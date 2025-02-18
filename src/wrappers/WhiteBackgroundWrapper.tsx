function WhiteBackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ backgroundColor: "white", color: "black", minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}

export default WhiteBackgroundWrapper;
