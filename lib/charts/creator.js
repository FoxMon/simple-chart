import * as d3 from "d3";
import palette from "../utils/palette";
import { invalidParam, typeArrayCheck, typeCheck } from "../utils/errorUtil";

export function pieChartCreator(datas, width, height, colors = []) {
  invalidParam(datas);
  typeArrayCheck(datas);
  typeCheck(width, "number");
  typeCheck(height, "number");
  const node = document.createElement("div");
  const svg = d3
    .select(node)
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);
  const colorArr = (() => {
    if (datas.length === colors.length) return colors;
    return palette.colors.orange.slice(0, datas.length);
  })();
  const color = d3.scaleOrdinal(colorArr);
  const pie = d3.pie();
  const radius = Math.min(width, height) / 2;
  const arc = d3.arc().innerRadius(0).outerRadius(radius);
  const arcs = g
    .selectAll("arc")
    .data(pie(datas))
    .enter()
    .append("g")
    .attr("class", "arc");
  arcs
    .append("path")
    .attr("fill", (_, i) => color(i))
    .attr("d", arc);
  arcs
    .append("text")
    .attr("transform", (d) => `translate(${arc.centroid(d)})`)
    .text((d) => d.value)
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "#fff")
    .attr("text-anchor", "middle")
    .attr("display", "none");
  return node;
}
