import Block from "../Block";
import { Section } from "./Block";
import { TagGroup } from "../Tag";
import { PROFILE, TECHSTACK, PROJECTS } from "../../constants/profile";

export default function Introduction() {
  return (
    <Section className="flex justify-center items-center gap-[15px] p-[35px]">
      <div className="flex-col">
        <header>PORTFOLIO - 웹 풀스택 개발자</header>
        <h1 className="text-[40px] font-bold">정민주</h1>

        <div className="mb-[10px] text-primary-500 whitespace-nowrap">
          <h2>
            <span className="text-primary-950">사용자</span> 입장에서 문제를
            바라보고,
          </h2>
          <h2>
            더 나은 해결을 위해 <span className="text-primary-950">꾸준히</span>{" "}
            성장합니다.
          </h2>
        </div>
        <div className="flex flex-col gap-[10px]">
          {TECHSTACK.map(({ title, text }, i) => (
            <TagGroup key={i} title={title} data={text} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[15px]">
        <Block title="Profile" data={PROFILE} />
        <Block title="Projects" data={PROJECTS} />
      </div>
    </Section>
  );
}
