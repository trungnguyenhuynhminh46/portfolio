import techImages from "../assets";
import { Skill } from "../share/types";

// Typescript, redux, redux toolkit, react-hook-form, react-route-dom

const skills: Skill[] = [
  {
    id: 1,
    srcImg: techImages.html,
    title: "HTML",
    shadowColor: "shadow-orange-500",
  },
  {
    id: 2,
    srcImg: techImages.css,
    title: "CSS",
    shadowColor: "shadow-blue-500",
  },
  {
    id: 3,
    srcImg: techImages.javascript,
    title: "JavaScript",
    shadowColor: "shadow-yellow-500",
  },
  {
    id: 4,
    srcImg: techImages.typescript,
    title: "TypeScript",
    shadowColor: "shadow-blue-600",
  },
  {
    id: 5,
    srcImg: techImages.react,
    title: "React",
    shadowColor: "shadow-blue-600",
  },
  {
    id: 6,
    srcImg: techImages.tailwind,
    title: "Tailwind",
    shadowColor: "shadow-sky-400",
  },
  {
    id: 7,
    srcImg: techImages.github,
    title: "Git",
    shadowColor: "shadow-neutral-200",
  },
  {
    id: 8,
    srcImg: techImages.firebase,
    title: "Firebase",
    shadowColor: "shadow-amber-200",
  },
  {
    id: 9,
    srcImg: techImages.styled_components,
    title: "Styled Component",
    shadowColor: "shadow-pink-200",
  },
  {
    id: 10,
    srcImg: techImages.redux,
    title: "Redux toolkit",
    shadowColor: "shadow-purple-500",
  },
  {
    id: 11,
    srcImg: techImages.react_router_dom,
    title: "React router dom",
    shadowColor: "shadow-red-500",
  },
  {
    id: 12,
    srcImg: techImages.react_hook_form,
    title: "React hook form",
    shadowColor: "shadow-pink-500",
  },
];

export default skills;
