import Image from "next/image";
import Block from "../Block";
import { Section } from "./Block";
import { TagGroup } from "../Tag";
import { PROFILE, TECHSTACK, PROJECTS } from "../../constants/profile";

export default function Introduction() {
  return (
    <Section className="flex justify-center items-center gap-[15px] p-[35px]">
      <div className="absolute top-0 w-[95%] h-fit flex items-center justify-between border-t-2 border-b px-5 py-2 mt-8 z-50 bg-primary-50/70 md:w-[80%] md:px-7">
        <div className="w-44 items-center gap-2 flex">
          Available for work
          <div className="animate-ripple h-2 w-2 rounded-full bg-green-500"></div>
        </div>
        <div className="p-2 rounded-md hover:bg-primary-200 cursor-pointer transition-colors">
          <Image width={18} height={18} src="/icons/pdf.svg" alt="pdf 아이콘" />
        </div>
      </div>
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
