let vizArea = d3.select("#viz");
let xScale = d3.scaleLinear().domain([0,100]).range([0,500]);

vizArea
   .append("circle")
   .attr("cx",xScale(150))
   .attr("cy", 450)
   .attr("r", 400)
   .style("fill","#310B12");
vizArea
   .append("circle")
   .attr("cx",xScale(140))
   .attr("cy", 400)
   .attr("r", 272.04)
   .style("fill","#AEF359");
vizArea
   .append("circle")
   .attr("cx", xScale(197.5))
   .attr("cy", 402)
   .attr("r", 12.52)
   .style("fill","#943a49");
vizArea
   .append("circle")
   .attr("cx",xScale(194.7))
   .attr("cy", 410)
   .attr("r", 5.68)
   .style("opacity", .7)
   .style("fill","#0492C2");