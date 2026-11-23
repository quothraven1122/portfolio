import { cn } from "@/libraries/cn";

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
