interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-warm-gray">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded bg-accent ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
