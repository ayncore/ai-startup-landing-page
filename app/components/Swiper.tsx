import { FC } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

interface SwiperProps {
  image: string;
  color: string;
}

const Swiper: FC<SwiperProps> = ({ image, color }) => {
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );
  const animControls = useAnimation();

    return (
      <div>
        <motion.div
          drag="x"
          style={{
            x: motionValue,
            rotate: rotateValue,
            opacity: opacityValue,
            backgroundImage: `url(${image})`,
            backgroundColor: color,
          }}
          dragConstraints={{ left: -1000, right: 1000 }}
          className="bg-cover bg-no-repeat bg-center shadow-lg rounded-md h-72 w-56"
          onDragEnd={(event, info) => {
            if (Math.abs(info.point.x) <= 150) {
              animControls.start({ x: 0 });
            } else {
              animControls.start({ x: info.point.x < 0 ? -200 : 200 });
            }
          }}
        />
      </div>
    );
            
};

export default Swiper;
