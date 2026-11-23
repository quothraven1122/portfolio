type ListItemType = {
  list: React.ReactNode;
  children?: ListItemType[];
};
export type ContentType = {
  title: string;
  subtitle: string;
  status: string;
  startPeriod: string;
  endPeriod: string;
  content: ListItemType[];
  skills: string[];
};

export const EDUCATION: ContentType[] = [
  {
    title: "숙명여자대학교",
    subtitle: "주전공 컴퓨터과학전공 / 부전공 영어영문학과",
    status: "졸업 예정",
    startPeriod: "2022.03",
    endPeriod: "2027.02",
    content: [
      {
        list: <p>기본 프로그래밍 언어 배움</p>,
      },
      {
        list: <p>기본 프로그래밍 언어 배움</p>,
      },
      {
        list: <p>기본 프로그래밍 언어 배움</p>,
      },
      {
        list: <p>기본 프로그래밍 언어 배움</p>,
      },
    ],
    skills: ["Python"],
  },
  {
    title: "코드잇 스프린트 클라우드 기반 풀스택 엔지니어 부트캠프",
    subtitle: "풀스택 13기",
    status: "수료",
    startPeriod: "2026.03",
    endPeriod: "2026.10",
    content: [
      {
        list: (
          <p>
            웹 프론트엔드 개발: HTML, CSS, JavaScript, React.js, Next.js를
            활용한 웹 UI 구현
          </p>
        ),
      },
      {
        list: (
          <p>
            웹 백엔드 및 데이터 처리: PostgreSQL·Prisma 기반 DB 설계 및 Express
            백엔드 구축
          </p>
        ),
      },
    ],
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tanstack Query",
      "zod",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Express",
      "git",
      "Jest",
      "Vercel",
      "리더십",
      "프로젝트 관리",
    ],
  },
];
