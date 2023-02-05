import portfolioImage from "../assets/portfolio";
import { ProjectInfo } from "../share/types";

const portfolios: ProjectInfo[] = [
  {
    // Multimart
    id: 0,
    imgsSrc: [
      portfolioImage.multimartLogin,
      portfolioImage.multimartHome,
      portfolioImage.multimartProduct,
      portfolioImage.multimartShop,
      portfolioImage.multimartCart,
      portfolioImage.multimartEditProduct,
    ],
    demoHref: "https://ecommerce-redux-zeta.vercel.app/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/ecommerce-redux",
    title: "Shopping page",
    techs: [
      "Typescript",
      "Reactjs",
      "Firebase",
      "Tailwind",
      "redux",
      "redux-toolkit",
    ],
    about:
      "A shopping page where you can buy products, or add and manage your products.",
  },
  {
    // Monkey Blogging
    id: 1,
    imgsSrc: [
      portfolioImage.monkeyBloggingHomePage,
      portfolioImage.monkeyBloggingLoginPage,
      portfolioImage.monkeyBlogging1,
      portfolioImage.monkeyBlogging2,
      portfolioImage.monkeyBlogging3,
      portfolioImage.monkeyBlogging4,
    ],
    demoHref: "https://monkey-blogging-cyan.vercel.app/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/Monkey_Blogging",
    title: "Monkey Blogging",
    techs: ["Reactjs", "Firebase", "styled-component"],
    about: "A website where you can make and manage your own posts",
  },
  {
    // Real time chat app
    id: 2,
    imgsSrc: [
      portfolioImage.chatApp1,
      portfolioImage.chatApp2,
      portfolioImage.chatAppLogin,
    ],
    demoHref: "https://my-real-time-chat-app.vercel.app/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/my-real-time-chat-app",
    title: "Real time chat app",
    techs: [
      "Typescript",
      "Reactjs",
      "Firebase",
      "Tailwind",
      "zustand",
      "emoji - mart",
    ],
    about: "Just an app allowing you to chat with others",
  },
  {
    // Design to code
    id: 3,
    imgsSrc: [
      portfolioImage.design1,
      portfolioImage.design2,
      portfolioImage.design3,
      portfolioImage.design4,
      portfolioImage.design5,
    ],
    // demoHref: "https://mogo-template-livid.vercel.app/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/design2code",
    title: "Design to code",
    techs: ["HTML", "CSS", "Tailwind", "SASS", "Gulp"],
    about: "Some designs which are converted to code",
  },
  {
    // Unimart
    id: 4,
    imgsSrc: [portfolioImage.unimartAdmin, portfolioImage.unimart],
    demoHref: "https://minhtrung.unitopcv.com/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/unimart",
    title: "Unimart",
    techs: ["HTML", "CSS", "Javascript", "Jquery", "Laravel"],
    about: "A shopping page",
  },
  {
    // Music player
    id: 5,
    imgsSrc: [portfolioImage.musicPlayer],
    demoHref: "https://musicplayer-xi.vercel.app/",
    srcHref:
      "https://github.com/trungnguyenhuynhminh46/Java-script-mini-projects/tree/main/%5BJS%5D%20music_player",
    title: "Music player",
    techs: ["HTML", "CSS", "Javascript"],
    about: "A simple music player",
  },
  {
    // Redux todo
    id: 6,
    imgsSrc: [portfolioImage.reduxTodo],
    demoHref: "https://redux-todo-nine-iota.vercel.app/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/redux-todo",
    title: "To do list",
    techs: ["Typescipt", "ReactJS", "Redux", "Redux Toolkit"],
    about: "Just a todo list using redux",
  },
];

export default portfolios;
