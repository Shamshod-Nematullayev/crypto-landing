import BuffIcon from "../../assets/buff.svg";
import NerfIcon from "../../assets/nerf.svg";
export default function Item({
  name,
  price,
  imgUrl,
  percent,
}: {
  name: string;
  price: number;
  imgUrl: string;
  percent: number;
}) {
  return (
    <div className="flex gap-2 items-center justify-between h-[20px] font-semibold dark:text-white">
      <img src={imgUrl} alt="Bitcoin" className="w-[20px] h-[20px]" />
      <span>{name}</span>
      <span>$ {price.toFixed(3)}</span>

      <span
        className={
          (percent > 0 ? "text-success" : "text-error") +
          " flex items-center gap-1"
        }
      >
        (
        {percent > 0 ? (
          <img src={BuffIcon} alt="Buff" className="w-[8px] h-[8px]" />
        ) : (
          <img src={NerfIcon} alt="Nerf" className="w-[8px] h-[8px]" />
        )}
        {percent}% )
      </span>
    </div>
  );
}
