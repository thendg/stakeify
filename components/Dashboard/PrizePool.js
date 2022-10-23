import CountUp from "react-countup";

export default function PrizePool() {
  return (
    <div className=" flex items-center justify-center pb-16 text-xl font-medium">
      <div className="pr-4">Total prize pool</div>
      <div className="pr-4">:</div>
      <div className="pr-4">$</div>

      <CountUp end={1234567} />
    </div>
  );
}
