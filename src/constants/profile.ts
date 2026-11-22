export type ProfileType = {
  title: string;
  text: string;
};

export type TechStackType = {
  title: string;
  text: string[];
};

export type ProjectType = {
  title: string;
  text: string;
};

export const PROFILE: ProfileType[] = [
  {
    title: "Email",
    text: "mnevermore1122@gmail.com",
  },
  {
    title: "Github",
    text: "https://github.com/quothraven1122",
  },
  {
    title: "Blog",
    text: "https://mnevermore1122.tistory.com",
  },
];

export const TECHSTACK: TechStackType[] = [
  {
    title: "Language",
    text: ["TypeScript", "JavaScript", "Python", "Kotlin", "Java", "C"],
  },
  {
    title: "Frontend",
    text: ["React", "Next.js"],
  },
  {
    title: "Backend",
    text: ["Express", "MySQL", "PostgreSQL"],
  },
];

export const PROJECTS: ProjectType[] = [
  {
    title: "SNOROSE",
    text: "2024.03.29 ~ 헌재 - 프런트엔드 개발자",
  },
  {
    title: "SNOROSE",
    text: "2024.03.29 ~ 헌재 - 프런트엔드 개발자",
  },
  {
    title: "SNOROSE",
    text: "2024.03.29 ~ 헌재 - 프런트엔드 개발자",
  },
];
