import Image from "next/image";
import { cn } from "@/libraries/cn";
import { ProjectLinkType, ProjectLinkKey } from "@/constants/projects";

type TagType = {
  text: string;
  className?: string;
};
type TagGroupType = {
  title: string;
  data: string[];
};

export function Tag({ text, className }: TagType) {
  return (
    <div className={cn("border rounded-full px-3 py-1 text-xs", className)}>
      {text}
    </div>
  );
}

export function StackTag({ text, className }: TagType) {
  return <Tag text={text} className={cn("border-primary-300", className)} />;
}
export function ActiveTag({ isActive }: { isActive: boolean }) {
  return (
    <Tag
      text={isActive ? "서비스 중" : "서비스 중단"}
      className={cn(
        "text-white",
        isActive
          ? "bg-green-400 hover:bg-green-500"
          : "bg-red-600 hover:bg-red-700",
      )}
    />
  );
}

const LINK_TYPE: Record<ProjectLinkKey, string> = {
  github: "Github",
  publishLink: "Link",
  demoVideo: "Video",
  blog: "Blog",
};
const ICON_TYPE: Record<ProjectLinkKey, string> = {
  github: "/icons/github.svg",
  publishLink: "/icons/link.svg",
  demoVideo: "/icons/video.svg",
  blog: "/icons/blog.svg",
};
export function WebsiteTag({
  type,
  link,
}: {
  type: keyof ProjectLinkType;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit flex items-center gap-1 rounded-full border-2 px-3 py-1.5 text-xs font-semibold"
    >
      <Image src={ICON_TYPE[type]} width={20} height={20} alt="아이콘" />
      <span className="hidden md:block">{LINK_TYPE[type]}</span>
    </a>
  );
}

export function TagGroup({ title, data }: TagGroupType) {
  return (
    <div>
      <h6 className="text-[14px] mb-[5px]">{title}</h6>
      <div className="flex flex-wrap items-center gap-[6px]">
        {data.map((item, i) => (
          <StackTag text={item} key={i} />
        ))}
      </div>
    </div>
  );
}
