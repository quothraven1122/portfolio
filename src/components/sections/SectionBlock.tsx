type SectionProps = {
  className?: string;
  children: React.ReactNode;
};
type SectionBlockType = {
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

export function Section({ className, children }: SectionProps) {
  return <section className={`min-h-screen ${className}`}>{children}</section>;
}

export default function SectionBlock({
  title,
  subtitle,
  content,
}: SectionBlockType) {
  return (
    <Section>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {content}
    </Section>
  );
}
