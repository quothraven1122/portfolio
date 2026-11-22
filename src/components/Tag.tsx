type TagType = {
  text: string;
};
type TagGroupType = {
  title: string;
  data: string[];
};

export function Tag({ text }: TagType) {
  return (
    <div className="border border-primary-300 rounded-full px-3 py-1 text-xs">
      {text}
    </div>
  );
}

export function TagGroup({ title, data }: TagGroupType) {
  return (
    <div>
      <h4 className="mb-[5px]">{title}</h4>
      <div className="flex flex-wrap items-center gap-[6px]">
        {data.map((item, i) => (
          <Tag text={item} key={i} />
        ))}
      </div>
    </div>
  );
}
