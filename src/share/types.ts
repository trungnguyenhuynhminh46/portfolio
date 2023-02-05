export interface ProjectInfo {
  id: number;
  imgsSrc: string[];
  demoHref?: string;
  srcHref?: string;
  title: string;
  techs: string[];
  about: string;
}

export interface Skill {
  id: number;
  srcImg: string;
  title: string;
  shadowColor: string;
}
