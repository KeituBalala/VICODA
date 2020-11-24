fetch('https://api.covid19api.com/summary')  
              .then(response => response.json())                               
              .then(data => {console.log(data) 
});

const width = 650
const height = 650
const margin = 40

const radius = Math.min(width, height) / 2 - margin

const svg = d3.select("#myViz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

const data = {a: 578938, b: 115788,}

const color = d3.scaleOrdinal()
  .domain(data)
  .range(["#310B12", "#0492C2",])

const pie = d3.pie()
  .value(function(d) {return d.value; })
const data_ready = pie(d3.entries(data))

svg
  .selectAll('segments')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "orange")
  .style("stroke-width", "3px")