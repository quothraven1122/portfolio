export type ProjectLinkType = {
  github: string;
  publishLink: string;
  demoVideo?: string;
  blog?: string;
};
export type ProjectLinkKey = keyof ProjectLinkType;
export type ProjectDetailType = {
  title: string;
  subtitle: string;
  isActive: boolean;
  startPeriod: string;
  endPeriod: string;
  teamSize: number;
  links: ProjectLinkType;
  skills: string[];
  projectImage: string;
};

export const PROJECTS: ProjectDetailType[] = [
  {
    title: "SNOROSE",
    subtitle: "숙명여자대학교 학생 커뮤니티 사이트",
    isActive: true,
    startPeriod: "2024.03",
    endPeriod: "현재",
    teamSize: 8,
    links: {
      github: "https://github.com/snorose/snorose-front",
      publishLink: "https://www.snorose.com/",
      blog: "https://capprojectfactory.tistory.com/category/%EC%9B%B9%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%8A%A4%EB%85%B8%EB%A1%9C%EC%A6%88",
    },
    skills: ["React", "JavaScript", "Swiper", "Storybook", "CSS Modules"],
    projectImage: "/images/projects/snorose.png",
  },
];
