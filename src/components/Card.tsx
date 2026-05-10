type CardProps = {
  title: string;
  description: string;
};

export function Card({ title, description }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}