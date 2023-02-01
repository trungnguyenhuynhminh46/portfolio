import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="container flex justify-between items-center sticky top-0 z-20 p-5 over">
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
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.facebook.com/trung.nguyenhuynhminh.336/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/trungnguyenhuynhminh46"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://my-portfolio-kappa-red.vercel.app/"
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
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <span className="uppercase hidden md:inline-flex md:items-center text-sm text-gray-400">
            GET IN TOUCH
          </span>
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
