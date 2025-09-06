import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useRef, useState } from "react";
import Conteiner from "../Conteiner";
import Typography from "../Typography";
import Hexagon from "../Hexagon";
import VideoModal from "./VideoModal";

function ResultsSection() {
  const [showModal, setShowModal] = useState(false);
  const handleClickOpenVideoModal = () => {
    setShowModal(true);
  };
  return (
    <Conteiner>
      <VideoModal showModal={showModal} setShowModal={setShowModal} />
      <section className="flex justify-center mt-[180px]">
        <div className="relative flex-1/2 px-[170px]">
          <div className="flex items-start gap-10">
            <AnimationCard
              icon={"AtomIcon"}
              title="+600"
              description="Supported Coins"
              className="relative top-[100px]"
            />
            <AnimationCard
              icon={"BoxIcon"}
              title="+20M"
              description="Open Wallets"
            />
          </div>
          <div className="flex my-10   items-start gap-10">
            <AnimationCard
              icon={"UsersIcon"}
              title="+200K"
              description="Registered Users"
              className="relative top-[100px]"
            />
            <AnimationCard
              icon={"HeartIcon"}
              title="+50M"
              description="USD Invested"
            />
          </div>
          <Hexagon
            size={400}
            className="absolute bottom-[-0px] right-[50px] z-[-1]"
            colors={["#FFA000", "#FFECB3"]}
          />
          <Hexagon
            size={100}
            className="absolute bottom-[-30px] right-[300px] z-[-1]"
            colors={["#d1c4e9", "#825ec4"]}
          />
          <Hexagon
            size={80}
            className="absolute bottom-[20px] right-[50px] z-[-1]"
            colors={["#e1bee7", "#b258c2"]}
          />
        </div>
        <div className="flex-1/2">
          <Hexagon size={40} />
          <p>
            <Typography variant="h1" className="mt-10">
              Buy / Sell Digital Assets
            </Typography>
          </p>
          <p>
            <Typography variant="body1" className="font-bold">
              1,778,912 members are already on board, what are you waiting for?
            </Typography>
          </p>
          <div className="relative" onClick={handleClickOpenVideoModal}>
            <div className="flex items-center justify-center bg-[url(https://www.shutterstock.com/shutterstock/videos/1063861729/thumb/12.jpg?ip=x480)] bg-cover bg-no-repeat h-[400px] w-[700px] brightness-50 rounded-2xl my-10 mx-5" />
            <div
              className="flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100px] h-[100px] bg-white rounded-full cursor-pointer"
              onClick={handleClickOpenVideoModal}
            >
              <LucideIcons.PlayIcon className="text-primary" size={50} />
            </div>
          </div>
        </div>
      </section>
    </Conteiner>
  );
}

export default ResultsSection;

function AnimationCard({
  icon,
  title,
  description,
  className,
}: {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [trigger, setTrigger] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // element viewportga kirganda + 100px past scroll bo‘lsa animatsiya boshlansin
      if (rect.top < window.innerHeight - 100) {
        setTrigger(true);
      }
    }
  });

  const IconComponent = LucideIcons[
    icon
  ] as React.ElementType<LucideIcons.LucideProps>;

  return (
    <motion.div
      ref={ref}
      initial={{ rotateY: -180, opacity: 0 }}
      transition={{ duration: 0.2 }}
      animate={trigger ? { rotateY: 0, opacity: 1 } : {}}
      className={" p-5 bg-white dark:bg-gray-500 dark:text-white w-[174px] rounded-2xl shadow-[0_1.5px_12px_2px_rgba(0,0,0,0.06)]".concat(
        className ? " " + className : ""
      )}
    >
      {IconComponent && (
        <IconComponent
          size={60}
          strokeWidth="1"
          className="text-primary text-5xl"
        />
      )}
      <div>
        <p className="font-semibold dark:text-white text-2xl">{title}</p>
        <p className="text-1xl">{description}</p>
      </div>
    </motion.div>
  );
}
