import PieChart from "../components/Dashboard/PieChart.js";
import DashboardTitle from "../components/Dashboard/DashboardTitle.js";
import Leaderboard from "../components/Dashboard/Leaderboard.js";
import PrizePool from "../components/Dashboard/PrizePool.js";
import { useRouter } from "next/router";

export default function Dashboard(identifier) {
  const router = useRouter();
  const query = router.query;
  const contractAddress = query.contractAddress;

  //api/games/[contract adress]?type=prize&call=[message]
  var address = `api/games/${contractAddress}?type=prize&call=${stuff}`;

  useEffect(() => {
    setLoading(true);
    fetch(`${address}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

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
