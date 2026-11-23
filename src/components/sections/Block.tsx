import Image from "next/image";
import { cn } from "@/libraries/cn";
import { Tag, TagGroup } from "../Tag";
import { ContentType } from "@/constants/education";

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

export function SectionBlock({ title, subtitle, content }: SectionBlockType) {
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

export function ContentBlock({
  title,
  subtitle,
  status,
  startPeriod,
  endPeriod,
  content,
  skills,
}: ContentType) {
  return (
    <div className="flex flex-col gap-[20px] border border-primary-400 border-l-4 border-l-secondary-500 rounded-[20px] px-[35px] py-[20px] shadow-sm hover:shadow-lg">
      <div className="flex flex-col gap-[5px]">
        <div className="flex items-center gap-[10px]">
          <Image
            src="/icons/school_cap.svg"
            width={25}
            height={25}
            alt="학사모 아이콘"
          />
          <h4 className="text-[20px] font-medium">{title}</h4>
          <Tag
            text={status}
            className="border-0 bg-secondary-100 text-secondary-800"
          />
        </div>
        <h5 className="text-[15px] text-primary-500">{subtitle}</h5>
        <div className="flex items-center gap-[5px]">
          <Image
            src="/icons/calendar.svg"
            width={15}
            height={15}
            alt="캘린더 아이콘"
          />
          <p className="text-[12px] text-primary-400">
            {startPeriod} - {endPeriod}
          </p>
        </div>
      </div>
      <div>
        <h6 className="text-[14px] pb-[5px]">주요 성과 및 활동</h6>
        <ul className="list-disc pl-5 space-y-[5px]">
          {content.map((item, index) => (
            <li key={index} className="text-[12px]">
              {item.list}
            </li>
          ))}
        </ul>
      </div>
      <TagGroup title="습득 역량" data={skills} />
    </div>
  );
}
