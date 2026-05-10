type StackProps = {
  children: React.ReactNode;
  gap?: number;
};

export function Stack({
  children,
  gap = 16,
}: StackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
      }}
    >
      {children}
    </div>
  );
}