import { useState } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  children,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    primary: {
      background: isHovered ? "#004aba" : "#004aba",
      color: "white",
    },

    secondary: {
      background: isHovered ? "#D1D5DB" : "#E5E7EB",
      color: "#111827",
    },

    ghost: {
      background: isHovered ? "#F3F4F6" : "transparent",
      color: "#111827",
    },
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s ease",
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
}