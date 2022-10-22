import PieChart from "../components/PieChart.js";
import DashboardTitle from "../components/DashboardTitle.js";
import Leaderboard from "../components/Leaderboard.js";
import PrizePool from "../components/PrizePool.js";

export default function Dashboard() {
  return (
    <div>
      <div className="w-1/2">
        <DashboardTitle />
      </div>
      <PrizePool />

      <div className="flex flex-row items-center justify-center ">
        <div className="w-1/2 drop-shadow-2xl">
          <PieChart />
        </div>
        <div>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}
