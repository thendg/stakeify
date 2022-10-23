import PieChart from "../components/dashboard/PieChart.js";
import DashboardTitle from "../components/dashboard/DashboardTitle.js";
import Leaderboard from "../components/dashboard/Leaderboard.js";
import PrizePool from "../components/dashboard/PrizePool.js";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const query = router.query;
  const contractAddress = query.contractAddress;

  //api/games/[contract adress]?type=prize&call=[message]
  var address = `api/games/${contractAddress}?type=prize&call=users_map`;

  useEffect(() => {
    fetch(`${address}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <DashboardTitle />
      </div>
      <PrizePool />

      <div className="flex flex-row items-center justify-center ">
        <div className="w-1/2 drop-shadow-2xl">
          <PieChart />
        </div>
        <div className="w-1/2 flex flex-row items-center justify-center ">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}
