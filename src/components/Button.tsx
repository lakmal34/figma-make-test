type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  children,
}: ButtonProps) {
  const styles = {
    primary: {
      background: "#111827",
      color: "white",
    },
    secondary: {
      background: "#E5E7EB",
      color: "#111827",
    },
    ghost: {
      background: "transparent",
      color: "#111827",
    },
  };

  return (
    <button
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
}