import ScreenShotImg from "../../assets/screen.png";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "../../hooks/EmblaDotButton";

function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="w-full">
      <div className="buttons flex items-center justify-center gap-5 w-full mt-15">
        <div
          className={"rounded-full border-4 border-primary w-[30px] h-[30px] cursor-pointer ".concat(
            selectedIndex === 0 ? "bg-primary" : ""
          )}
          onClick={() => onDotButtonClick(0)}
        />
        <div
          className={"rounded-full border-4 border-primary w-[30px] h-[30px] cursor-pointer ".concat(
            selectedIndex === 1 ? "bg-primary" : ""
          )}
          onClick={() => onDotButtonClick(1)}
        />
        <div
          className={"rounded-full border-4 border-primary w-[30px] h-[30px] cursor-pointer ".concat(
            selectedIndex === 2 ? "bg-primary" : ""
          )}
          onClick={() => onDotButtonClick(2)}
        />
        <div
          className={"rounded-full border-4 border-primary w-[30px] h-[30px] cursor-pointer ".concat(
            selectedIndex === 3 ? "bg-primary" : ""
          )}
          onClick={() => onDotButtonClick(3)}
        />
        <div
          className={"rounded-full border-4 border-primary w-[30px] h-[30px] cursor-pointer ".concat(
            selectedIndex === 4 ? "bg-primary" : ""
          )}
          onClick={() => onDotButtonClick(4)}
        />
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          <div className="flex-[0_0_100%]">
            <img
              src={ScreenShotImg}
              alt="Screenshot"
              className="w-[50%] mx-auto rounded-4xl"
            />
          </div>
          <div className="flex-[0_0_100%]">
            <img
              src={ScreenShotImg}
              alt="Screenshot"
              className="w-[50%] mx-auto rounded-4xl"
            />
          </div>
          <div className="flex-[0_0_100%]">
            <img
              src={ScreenShotImg}
              alt="Screenshot"
              className="w-[50%] mx-auto rounded-4xl"
            />
          </div>
          <div className="flex-[0_0_100%]">
            <img
              src={ScreenShotImg}
              alt="Screenshot"
              className="w-[50%] mx-auto rounded-4xl"
            />
          </div>
          <div className="flex-[0_0_100%]">
            <img
              src={ScreenShotImg}
              alt="Screenshot"
              className="w-[50%] mx-auto rounded-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
