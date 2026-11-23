import { cn } from "@/libraries/cn";

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
  return (
    <section className={cn("min-h-screen p-[20px]", className)}>
      {children}
    </section>
  );
}

export default function SectionBlock({
  title,
  subtitle,
  content,
}: SectionBlockType) {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-[30px]">{title}</h2>
        <h3 className="text-primary-500">{subtitle}</h3>
      </div>
      <div className="mt-[40px]">{content}</div>
    </Section>
  );
}
