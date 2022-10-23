export default function Leaderboard() {
  function item(name, country, rank) {
    return (
      <tr>
        <td className="w-1/3 text-left py-3 px-4">{name}</td>
        <td className="w-1/3 text-left py-3 px-4">{country}</td>
        <td className="text-left py-3 px-4">
          <a className="hover:text-blue-500">{rank}</a>
        </td>
      </tr>
    );
  }
  return (
    <div>
      <div className="drop-shadow-2xl overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-violet-200 text-black font-semibold">
            {item("Name", "Country", "#Rank")}
          </thead>
          <tbody className="text-gray-700">
            {item("team1", "country1", "rank1")}
            {item("team2", "country2", "rank2")}
            {item("team3", "country3", "rank3")}
            {item("team4", "country4", "rank4")}
          </tbody>
        </table>
      </div>
    </div>
  );
}
