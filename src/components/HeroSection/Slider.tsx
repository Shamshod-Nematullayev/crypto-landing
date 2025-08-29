import useEmblaCarousel from "embla-carousel-react";
import Typography from "../Typography";
import Banner1 from "../../assets/Banner1.png";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.png";
import { DotButton, useDotButton } from "../../hooks/EmblaDotButton";

function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);
  return (
    <>
      <div ref={emblaRef} className="overflow-hidden dark:text-white">
        <div className="flex">
          {/* Slide 1 */}
          <div className="flex flex-[0_0_100%] items-center justify-between h-[400px] mt-10">
            <div className="w-[50%] h-[400px] flex flex-col justify-around">
              <Typography variant="h1">
                Digital currency leads at market in the right amount.
              </Typography>
              <p>
                <Typography variant="body1">
                  Vestibulum faucibus eget erat eget pretium. Donec commodo
                  convallis ligula suscipit orci.{" "}
                </Typography>
              </p>
              <div className="flex gap-5">
                <button className="px-6 py-2 bg-primary text-white font-semibold hover:bg-secondary-dark transition duration-200 cursor-pointer rounded-md uppercase">
                  Get Started
                </button>
                <button className="px-6 py-2 border-1 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition duration-200 cursor-pointer rounded-md uppercase">
                  View Market
                </button>
              </div>
            </div>
            <div
              className="w-[50%] h-[400px] bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url(${Banner1})` }}
            ></div>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-[0_0_100%] items-center justify-between h-[400px] mt-10">
            <div
              className="w-[50%] h-[400px] bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url(${Banner2})` }}
            ></div>
            <div className="w-[50%] h-[400px] flex flex-col justify-around">
              <Typography variant="h1">
                Digital currency leads at market in the right amount.
              </Typography>
              <p>
                <Typography variant="body1">
                  Vestibulum faucibus eget erat eget pretium. Donec commodo
                  convallis ligula suscipit orci.{" "}
                </Typography>
              </p>
              <div className="flex gap-5">
                <button className="px-6 py-2 bg-primary text-white font-semibold hover:bg-secondary-dark transition duration-200 cursor-pointer rounded-md uppercase">
                  Get Started
                </button>
                <button className="px-6 py-2 border-1 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition duration-200 cursor-pointer rounded-md uppercase">
                  View Market
                </button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex-[0_0_100%] h-[400px] mt-10 text-center">
            <Typography variant="h1">
              Digital currency leads at market in the right amount.
            </Typography>
            <p>
              <Typography variant="body1" className="text-gray-500">
                Vestibulum faucibus eget erat eget pretium. Donec commodo
                convallis ligula suscipit orci.{" "}
              </Typography>
            </p>
            <div className="flex justify-center gap-5 my-10">
              <button className="px-6 py-2 bg-primary text-white font-semibold hover:bg-secondary-dark transition duration-200 cursor-pointer rounded-md uppercase">
                Get Started
              </button>
              <button className="px-6 py-2 border-1 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition duration-200 cursor-pointer rounded-md uppercase">
                View Market
              </button>
            </div>
            <div
              className="w-[70%] h-[200px] bg-no-repeat bg-center bg-contain mx-auto"
              style={{ backgroundImage: `url(${Banner3})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[80px] dark:text-white">
        <DotButton
          onClick={() => onDotButtonClick(0)}
          className="flex justify-center items-center"
        >
          <Tab
            title="Business Solution?"
            description="Interdum et malesuada ac antestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula suscipit orci. "
            active={selectedIndex === 0}
            isFirst
          />
        </DotButton>
        <DotButton
          onClick={() => onDotButtonClick(1)}
          className="flex justify-center items-center"
        >
          <Tab
            title="Free project quote"
            description="Interdum et malesuada ac antestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula suscipit orci. "
            active={selectedIndex === 1}
          />
        </DotButton>
        <DotButton
          onClick={() => onDotButtonClick(2)}
          className="flex justify-center items-center"
        >
          <Tab
            title="Nulla lobortis nunc"
            description="Interdum et malesuada ac antestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula suscipit orci. "
            active={selectedIndex === 2}
          />
        </DotButton>
      </div>
    </>
  );
}

function Tab({
  title,
  description,
  active,
  isFirst = false,
}: {
  title: string;
  description: string;
  active?: boolean;
  isFirst?: boolean;
}) {
  return (
    <>
      {!isFirst && <div className="w-[1px] h-[100px] bg-gray-300"></div>}
      <div className="flex items-center gap-5 h-20 hover:bg-[#0000000d] hover:border-secondary border-1 border-transparent rounded-md transition duration-300 px-2 py-5">
        <div className="cursor-pointer">
          <h2>
            <Typography
              variant="h2"
              className={
                (active ? "text-secondary dark:text-secondary-light" : "") +
                " font-bold"
              }
            >
              {title}
            </Typography>
          </h2>
          <p>
            <Typography
              variant="body1"
              className={
                (active ? "text-primary text-primary-light" : "") +
                " block truncate w-[400px]"
              }
            >
              {description}
            </Typography>
          </p>
        </div>
      </div>
    </>
  );
}

export default Slider;
