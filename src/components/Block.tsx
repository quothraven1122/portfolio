import { ProfileType } from "@/constants/profile";

type BlockType = {
  title: string;
  data: ProfileType[];
  variant?: "colon" | "parentheses";
};

export function TextLink({ text }: { text: string }) {
  if (text.startsWith("https://") || text.startsWith("http://")) {
    return (
      <a href={text} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }
  if (text.includes("@")) {
    return <a href={`mailto:${text}`}>{text}</a>;
  }

  return <span className="text-primary-500">{text}</span>;
}

export default function Block({ title, data, variant = "colon" }: BlockType) {
  return (
    <article className="rounded-[20px] bg-primary-100 p-[20px]">
      <h4 className="font-semibold">{title}</h4>
      <ul className="list-disc pl-5">
        {data.map((item, index) => (
          <li key={index}>
            <h4 className="inline font-semibold mr-[5px]">{item.title}</h4>
            <div className="inline text-primary-500">
              {variant === "colon" ? (
                <>
                  : <TextLink text={item.text} />
                </>
              ) : (
                <>
                  (<TextLink text={item.text} />)
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
