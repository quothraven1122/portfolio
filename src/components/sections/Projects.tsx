import { SectionBlock, ProjectBlock } from "./Block";
import { PROJECTS } from "@/constants/projects";

export default function Projects() {
  return (
    <SectionBlock
      title="Projects"
      subtitle="프로젝트의 상세 과정과 결과를 확인해 보세요."
      content={
        <div className="relative md:w-[75%] md:m-auto">
          {PROJECTS.map((item, index) => (
            <ProjectBlock
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              isActive={item.isActive}
              startPeriod={item.startPeriod}
              endPeriod={item.endPeriod}
              teamSize={item.teamSize}
              links={item.links}
              skills={item.skills}
              projectImage={item.projectImage}
            />
          ))}
        </div>
      }
      className="py-[20px]"
    />
  );
}
