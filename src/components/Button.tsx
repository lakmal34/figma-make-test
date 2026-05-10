import { useState } from "react";
import { theme } from "../theme";

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
      background: isHovered
        ? theme.colors.primaryHover
        : theme.colors.primary,
      color: theme.colors.white,
    },

    secondary: {
      background: isHovered
        ? theme.colors.secondaryHover
        : theme.colors.secondary,
      color: theme.colors.text,
    },

    ghost: {
      background: isHovered
        ? "#F3F4F6"
        : "transparent",
      color: theme.colors.text,
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