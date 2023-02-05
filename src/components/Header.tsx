import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-20">
      <div className="container flex justify-between items-center sticky top-0 z-20 p-5">
        {/* Social icons */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/trung-nguyen-4895181b4/"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.facebook.com/trung.nguyenhuynhminh.336/"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/trungnguyenhuynhminh46"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://my-portfolio-kappa-red.vercel.app/"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        {/* Email */}
        <motion.a
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          href="mailto:trungnguyenhuynhminh46@gmail.com"
          className="flex gap-5 text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <span className="uppercase hidden md:inline-flex md:items-center text-sm text-gray-400">
            GET IN TOUCH
          </span>
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
