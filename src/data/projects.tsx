import portfolioImage from "../assets/portfolio";
import { ProjectInfo } from "../share/types";

const portfolios: ProjectInfo[] = [
  {
    // Highlight.io
    id: 0,
    imgsSrc: [
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/4faf8d6d-94dc-46ee-95f7-5ae35dd4c1d5",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/bc40e413-73db-4fcf-a923-ac090039ad83",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/e9b48936-76de-43f9-a3ec-21911e890861",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/88fa130a-c761-420a-a707-df7669f33f75",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/a49db110-f8e3-4ca6-a8ed-a7bb8395ebd9",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/ff834253-b93c-4c5b-91d1-6fe14976f407",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/ffd610af-7cbd-4526-a49b-635185039bdc",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/14251452-24b7-4a4b-8a29-5fe6035f2ec5",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/86726f67-5e12-4b95-9769-fdbb18cf3449",
      "https://github.com/trungnguyenhuynhminh46/Highlight.io/assets/58035150/df7026ce-0029-4817-8b21-1f445f111fd7",
    ],
    srcHref: "https://github.com/trungnguyenhuynhminh46/Highlight.io.git",
    title: "Highlight.io",
    techs: [
      "Typescript",
      "Reactjs",
      "Tailwind",
      "Socket.io",
      "Zustand",
      "React-query",
      "NestJS",
      "Docker",
    ],

    about:
      "This project is our team's effort to build a web-based game that allows drawing and guessing.",
  },
  {
    // Facebook clone
    id: 1,
    imgsSrc: [
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591919/Facebook-clone%20demo%20images/Login_lfko0g.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591919/Facebook-clone%20demo%20images/Register_j76pav.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591919/Facebook-clone%20demo%20images/Confirm_account_l3edfm.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591919/Facebook-clone%20demo%20images/Code_verification_zn06gn.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591921/Facebook-clone%20demo%20images/Home_fxvyyy.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591921/Facebook-clone%20demo%20images/Create_Posts_With_emoji_azhy57.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591921/Facebook-clone%20demo%20images/Create_Posts_with_images_qxiy8g.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591920/Facebook-clone%20demo%20images/Create_Posts_fbukqt.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591920/Facebook-clone%20demo%20images/Post_reactions_nsnrwo.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591921/Facebook-clone%20demo%20images/Post_Reaction_w10lkc.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591921/Facebook-clone%20demo%20images/Profile_Page_rd0rky.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591922/Facebook-clone%20demo%20images/Update_cover_picture_jahmjj.png",
      "https://res.cloudinary.com/dbrd0cias/image/upload/v1682591920/Facebook-clone%20demo%20images/Update_Profile_Picture_huqtlc.png",
    ],
    demoHref:
      "https://facebook-clone-ed1c2euop-trungnguyenhuynhminh46.vercel.app/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/facebook-clone.git",
    title: "Facebook clone",
    techs: [
      "Typescript",
      "Reactjs",
      "Tailwind",
      "Redux",
      "Redux-toolkit",
      "ExpressJS",
    ],
    about:
      "This project is my effort to rebuild one of the most popular social media platforms - Facebook.",
  },
  {
    // Multimart
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 7,
    imgsSrc: [portfolioImage.unimartAdmin, portfolioImage.unimart],
    demoHref: "https://minhtrung.unitopcv.com/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/unimart",
    title: "Unimart",
    techs: ["HTML", "CSS", "Javascript", "Jquery", "Laravel"],
    about: "A shopping page",
  },
  {
    // Music player
    id: 8,
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
    id: 9,
    imgsSrc: [portfolioImage.reduxTodo],
    demoHref: "https://redux-todo-nine-iota.vercel.app/",
    srcHref: "https://github.com/trungnguyenhuynhminh46/redux-todo",
    title: "To do list",
    techs: ["Typescipt", "ReactJS", "Redux", "Redux Toolkit"],
    about: "Just a todo list using redux",
  },
];

export default portfolios;
