import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import * as LucideIcons from "lucide-react";
import { AtomIcon, Icon } from "lucide-react";
import { useRef, useState } from "react";
import Conteiner from "../Conteiner";

function ResultsSection() {
  return (
    <section className="flex justify-center mt-[180px]">
      <div className="grid grid-cols-2 gap-10 flex-1/2">
        <AnimationCard
          icon={"AtomIcon"}
          title="+600"
          description="Supported Coins"
        />
        <AnimationCard
          icon={"BoxIcon"}
          title="+20M"
          description="Open Wallets"
        />
        <AnimationCard
          icon={"UsersIcon"}
          title="+200K"
          description="Registered Users"
        />
        <AnimationCard
          icon={"HeartIcon"}
          title="+50M"
          description="USD Invested"
        />
      </div>
      <div className="flex-1/2"></div>
    </section>
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
      className={"p-5 bg-white dark:bg-gray-500 dark:text-white".concat(
        className ? " " + className : ""
      )}
    >
      {IconComponent && (
        <IconComponent
          size={150}
          strokeWidth="1"
          className="text-primary text-5xl"
        />
      )}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
