import PieChart from "../lib/components/PieChart";
import BarChart from "../lib/components/BarChart";

function App() {
  return (
    <div>
      <PieChart datas={[10, 20, 30, 40, 50]} width={300} height={300} />
      <BarChart datas={[100, 70, 30, 40, 50]} width={300} height={300} />
    </div>
  );
}

export default App;
