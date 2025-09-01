import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./Header";
import Conteiner from "./Conteiner";

function AnimationHeader() {
  const { scrollY } = useScroll();
  const [isShowHeader, setIsShowHeader] = useState<boolean>(false);
  useEffect(() => {
    scrollY.on("change", (last) => {
      if (last > 100) {
        setIsShowHeader(true);
      } else {
        setIsShowHeader(false);
      }
    });
  }, [scrollY]);
  return (
    <>
      {/* Motion Header */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={isShowHeader ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-white dark:bg-gray shadow-md z-50"
      >
        <Conteiner className="relative">
          <Header />
        </Conteiner>
      </motion.div>
    </>
  );
}

export default AnimationHeader;
