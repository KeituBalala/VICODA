let vizArea = d3.select("#viz");
      let xScale = d3.scaleLinear().domain([0, 100]).range([0, 500]);
   
      vizArea
         .append("circle")
         .attr("cx", xScale(150))
         .attr("cy", 300)
         .attr("r", 280)
         .style("fill", "#310B12");
      vizArea
         .append("circle")
         .attr("cx", xScale(140))
         .attr("cy", 280)
         .attr("r", 190.46)
         .style("fill", "#AEF359");
      vizArea
         .append("circle")
         .attr("cx", xScale(180.2))
         .attr("cy", 283)
         .attr("r", 8.76)
         .style("fill", "#943a49");
      vizArea
         .append("circle")
         .attr("cx", xScale(178.5))
         .attr("cy", 290)
         .attr("r", 3.6)
         .style("opacity", .8)
         .style("fill", "#0492C2");