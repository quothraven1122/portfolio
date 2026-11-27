import { SectionBlock, ContentItem, Timeline } from "./Block";
import { EDUCATION } from "@/constants/education";

export default function Education() {
  return (
    <SectionBlock
      title="Education"
      subtitle="끊임없는 학습과 도전을 통해 개발자로서 한 걸음씩 성장하고 있습니다."
      content={
        <div className="relative lg:w-[80%] lg:m-auto">
          <Timeline>
            {EDUCATION.map((item, index) => (
              <ContentItem
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                status={item.status}
                startPeriod={item.startPeriod}
                endPeriod={item.endPeriod}
                content={item.content}
                skills={item.skills}
              />
            ))}
          </Timeline>
        </div>
      }
      className="p-[20px]"
    />
  );
}
