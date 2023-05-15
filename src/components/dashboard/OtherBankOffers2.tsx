// @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

function OtherBankOffers2() {
  var margin = { top: 30, right: 50, bottom: 10, left: 250 },
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  const [data] = useState([
    {
      Interest: "9.2",
      Tenure: "60",
      EMI: "41711",
      CTA: "2502667",
      bank: "ICICI",
      Bank: "9.2",
    },
    {
      Interest: "9.4",
      Tenure: "24",
      EMI: "92013",
      CTA: "2208316",
      bank: "HDFC",
      Bank: "9.4",
    },
    {
      Interest: "10.0",
      Tenure: "36",
      EMI: "64534",
      CTA: "2323237",
      bank: "SBI",
      Bank: "10.0",
    },
    {
      Interest: "10.8",
      Tenure: "48",
      EMI: "51497",
      CTA: "2219390",
      bank: "Axis",
      Bank: "10.8",
    },
  ]);
  useEffect(() => {
    let allSvg = document.getElementsByTagName("svg");

    // append the svg object to the body of the page
    var svg = d3
      .select("#my_dataviz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Color scale: give me a specie name, I return a color
    var color = d3
      .scaleOrdinal()
      .domain(["ICICI", "HDFC", "SBI", "Axis"])
      .range(["#440154ff", "#21908dff", "#A459D1", "#C07F00"]);

    // Here I set the list of dimension manually to control the order of axis:
    var dimensions = ["Bank", "Interest", "Tenure", "EMI", "CTA"];
    const range = [
      { range: [9.0, 11.0] },
      { range: [9.0, 11.0] },
      { range: [24, 60] },
      { range: [40000, 100000] },
      { range: [2100000, 2600000] },
    ];

    let yScale = d3.scaleLinear().domain([9.0, 11.0]).range([height, 0]);
    let yAxisGenerator = d3.axisLeft(yScale);
 

    // For each dimension, I build a linear scale. I store all in a y object
    var y = {};
    for (var i in dimensions) {
      var name = dimensions[i];
      y[name] = d3
        .scaleLinear()
        .domain(range[i].range) // --> Same axis range for each group
        // --> different axis range for each group --> .domain( [d3.extent(data, function(d) { return +d[name]; })] )
        .range([height, 0]);
    }

    // Build the X scale -> it find the best position for each Y axis
    var x = d3.scalePoint().range([0, width]).domain(dimensions);

    // Highlight the specie that is hovered
    var highlight = function (d) {
      var selected_bank = d.bank;
      // first every group turns grey
      d3.selectAll(".line")
        .transition()
        .duration(200)
        .style("stroke", "lightgrey")
        .style("opacity", "0.2");
      // Second the hovered specie takes its color
      d3.selectAll("." + selected_bank)
        .transition()
        .duration(200)
        // .style("stroke", color(selected_bank))
        .style("opacity", "1");
    };

    // Unhighlight
    var doNotHighlight = function (d) {
      d3.selectAll(".line")
        .transition()
        .duration(200)
        .delay(100)
        .style("stroke", function (d) {
          return color(d.bank);
        })
        .style("opacity", "1");
    };

    // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
    function path(d) {
      return d3.line()(
        dimensions.map(function (p) {
          return [x(p), y[p](d[p])];
        })
      );
    }

    // Draw the lines
    svg
      .selectAll("myPath")
      .data(data)
      .enter()
      .append("path")
      .attr("id", function (d) {
        return d.bank;
      })
      .attr("class", function (d) {
        return "line " + d.bank;
      }) // 2 class for each line: 'line' and the group name
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", function (d) {
        return color(d.bank);
      })
      .style("opacity", 0.5)
      .on("mouseover", highlight)
      .on("mouseleave", doNotHighlight);


    // customized label without axis
    // myPath
    //   .append("text")
    //   .text((m) => m.bank)
    //   .style("font-weight", 600)
    //   .style("font-size", 12)
    //   .attr("fill", "#6D6E71")
    //   .attr("text-anchor", "middle")
    //   .style("text-transform", "uppercase")
    //   .attr("x", -55)
    //   .attr("y", (m, i, nodes) => {
    //     // const bbox = svg.selectAll(`#${m.bank}`).node().getBBox()
    //     // return  bbox.y + bbox.height
    //     if (m.bank === "Axis") {
    //       return 40;
    //     }
    //     if (m.bank === "ICICI") {
    //       return 330;
    //     }
    //     if (m.bank === "HDFC") {
    //       return 240;
    //     }
    //     if (m.bank === "SBI") {
    //       return 185;
    //     }
    //   });

    // customized bank label generator
    yAxisGenerator.tickFormat((d,i) =>{ 
      if(d === 10.0){
        return "SBI"
      }
      if(d === 9.2){
        return "ICICI"
      }
      if(d === 10.8){
        return "Axis"
      }
      if(d === 9.4){
        return "HDFC"
      }
    })

    // Bank Axis Label
    svg
    .selectAll("myAxis")
    // For each dimension of the dataset I add a 'g' element:
    .data(dimensions)
    .enter()
    .append("g")
    .attr("class", "axis")
    .call(yAxisGenerator)
    .style("font-size", 14)
    .style("font-weight", 600)
    .attr("y", -40)

    // Other axis label dynamic values
    svg
      .selectAll("myAxis")
      // For each dimension of the dataset I add a 'g' element:
      .data(dimensions)
      .enter()
      .append("g")
      .attr("class", "axis")
      // I translate this element to its right position on the x axis
      .attr("transform", function (d) {
        return "translate(" + x(d) + ")";
      })
      // And I build the axis with the call function
      .each(function (d) {
        if (d === "Bank") {
        } else {
          d3.select(this).call(d3.axisLeft().ticks(10).scale(y[d]));
        }
      })
      // Add axis title
      .append("text")
      .style("text-anchor", "middle")
      .style("font-size", 12)
      .style("font-weight", 600)
      .attr("y", -20)
      .text(function (d) {
        return d;
      })
      .attr("fill", "#000");

    if (allSvg.length > 0) {
      allSvg[0].style.display = "none";
    }
  }, []);

  return (
    <div>
      <div id="my_dataviz"></div>
    </div>
  );
}

export default React.memo(OtherBankOffers2);
