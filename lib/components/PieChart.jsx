import Base from "./Base";
import { pieChartCreator } from "../charts/creator";

function PieChart({ datas, width, height }) {
  const node = pieChartCreator(datas, width, height);

  return <Base node={node} />;
}

export default PieChart;
