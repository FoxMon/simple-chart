import Base from "./Base";
import { barChartCreator } from "../lib/charts/creator";

function BarChart({ datas, width, height }) {
  const node = barChartCreator(datas, width, height);

  return <Base node={node} />;
}

export default BarChart;
