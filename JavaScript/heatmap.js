 // dimensions and margins of graph
 const margin = {top: 80, right: 25, bottom: 30, left: 150},
 width = 1100 - margin.left - margin.right,
 height = 700 - margin.top - margin.bottom;

// svg object 
const svg = d3.select("#my_heatmap")
.append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom)
.append("g")
 .attr("transform",
       "translate(" + margin.left + "," + margin.top + ")");

// data
d3.json("/data/users.json", function(error, data) {

 // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
 const myGroups = ["China", "Germany", "Italy", "South Africa", "United Arab Emirates", "UK", "US"]
 const myVars = ["TotalConfirmed", "NewConfirmed", "TotalDeaths", "NewDeaths", "TotalRecovered", "NewRecovered"]

 // Build X scales and axis:
 const x = d3.scaleBand()
   .range([ 0, width ])
   .domain(myGroups)
   .padding(0.01);
 svg.append("g")
   .style("font-size", 15)
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x).tickSize(0))
   .select(".domain").remove()

 // Build Y scales and axis:
 const y = d3.scaleBand()
   .range([ height, 0 ])
   .domain(myVars)
   .padding(0.05);
 svg.append("g")
   .style("font-size", 15)
   .call(d3.axisLeft(y).tickSize(0))
   .select(".domain").remove()

     let xScale = d3.scaleLinear().domain([0, 100]).range([0, 500]);
  
     svg
        .append("circle")
        .attr("cx", xScale(13))
        .attr("cy", 50)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(13))
        .attr("cy", 150)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(13))
        .attr("cy", 250)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(13))
        .attr("cy", 350)
        .attr("r", 45)
        .style("fill", "#d9a6a3");

        svg
        .append("circle")
        .attr("cx", xScale(13))
        .attr("cy", 445)
        .attr("r", 45)
        .style("fill", "#d3f2fc");

        svg
        .append("circle")
        .attr("cx", xScale(13))
        .attr("cy", 540)
        .attr("r", 45)
        .style("fill", "#d3f2fc");
     svg
        .append("circle")
        .attr("cx", xScale(40))
        .attr("cy", 50)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(40))
        .attr("cy", 150)
        .attr("r", 45)
        .style("fill", "#95f39d");
        svg
        .append("circle")
        .attr("cx", xScale(40))
        .attr("cy", 250)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(40))
        .attr("cy", 350)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(40))
        .attr("cy", 445)
        .attr("r", 45)
        .style("fill", "#d3f2fc");
        svg
        .append("circle")
        .attr("cx", xScale(40))
        .attr("cy", 540)
        .attr("r", 45)
        .style("fill", "#2394bb");
     svg
        .append("circle")
        .attr("cx", xScale(66))
        .attr("cy", 50)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(66))
        .attr("cy", 150)
        .attr("r", 45)
        .style("fill", "#95f39d");
        svg
        .append("circle")
        .attr("cx", xScale(66))
        .attr("cy", 250)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(66))
        .attr("cy", 350)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(66))
        .attr("cy", 445)
        .attr("r", 45)
        .style("fill", "#d3f2fc");
        svg
        .append("circle")
        .attr("cx", xScale(66))
        .attr("cy", 540)
        .attr("r", 45)
        .style("fill", "#2394bb");
     svg
        .append("circle")
        .attr("cx", xScale(93))
        .attr("cy", 50)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(93))
        .attr("cy", 150)
        .attr("r", 45)
        .style("fill", "#2c4e2f");
        svg
        .append("circle")
        .attr("cx", xScale(93))
        .attr("cy", 250)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(93))
        .attr("cy", 350)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(93))
        .attr("cy", 445)
        .attr("r", 45)
        .style("fill", "#d3f2fc");
        svg
        .append("circle")
        .attr("cx", xScale(93))
        .attr("cy", 540)
        .attr("r", 45)
        .style("fill", "#043d50");

     svg
        .append("circle")
        .attr("cx", xScale(120))
        .attr("cy", 50)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(120))
        .attr("cy", 150)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(120))
        .attr("cy", 250)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(120))
        .attr("cy", 350)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(120))
        .attr("cy", 445)
        .attr("r", 45)
        .style("fill", "#d3f2fc");
        svg
        .append("circle")
        .attr("cx", xScale(120))
        .attr("cy", 540)
        .attr("r", 45)
        .style("fill", "#d3f2fc");
     svg
        .append("circle")
        .attr("cx", xScale(146))
        .attr("cy", 50)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(146))
        .attr("cy", 150)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(146))
        .attr("cy", 250)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(146))
        .attr("cy", 350)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(146))
        .attr("cy", 445)
        .attr("r", 45)
        .style("fill", "#d3f2fc");
        svg
        .append("circle")
        .attr("cx", xScale(146))
        .attr("cy", 540)
        .attr("r", 45)
        .style("fill", "#043d50");
     svg
        .append("circle")
        .attr("cx", xScale(172))
        .attr("cy", 50)
        .attr("r", 45)
        .style("fill", "#ccedcf");
        svg
        .append("circle")
        .attr("cx", xScale(172))
        .attr("cy", 150)
        .attr("r", 45)
        .style("fill", "#192d1b");
        svg
        .append("circle")
        .attr("cx", xScale(172))
        .attr("cy", 250)
        .attr("r", 45)
        .style("fill", "#d9a6a3");
        svg
        .append("circle")
        .attr("cx", xScale(172))
        .attr("cy", 350)
        .attr("r", 45)
        .style("fill", "#9b4d49");
        svg
        .append("circle")
        .attr("cx", xScale(172))
        .attr("cy", 445)
        .attr("r", 45)
        .style("fill", "#d3f2fc");
        svg
        .append("circle")
        .attr("cx", xScale(172))
        .attr("cy", 540)
        .attr("r", 45)
        .style("fill", "#043d50");
})

// subtitle
svg.append("text")
       .attr("x", 290)
       .attr("y", -20)
       .attr("text-anchor", "left")
       .style("font-size", "14px")
       .style("fill", "grey")
       .style("max-width", 400)
       .text("A heatmap reflecting comparable coronavirus data. The higher the number in each category, the darker the shade of the circle");
 