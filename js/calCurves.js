// tvalue table
var tStatisticValues = {
  "50%": { 
    1: 1.000, 2: 0.816, 3: 0.765, 4: 0.741, 5: 0.727, 6: 0.718, 7: 0.711, 8: 0.706, 9: 0.703, 10: 0.700, 
    11: 0.697, 12: 0.695, 13: 0.694, 14: 0.692, 15: 0.691, 16: 0.690, 17: 0.689, 18: 0.688, 19: 0.688, 20: 0.687 
  },
  "60%": { 
    1: 1.376, 2: 1.061, 3: 0.978, 4: 0.941, 5: 0.920, 6: 0.906, 7: 0.896, 8: 0.889, 9: 0.883, 10: 0.897, 
    11: 0.876, 12: 0.873, 13: 0.870, 14: 0.868, 15: 0.866, 16: 0.865, 17: 0.863, 18: 0.862, 19: 0.861, 20: 0.860 
  },
  "70%": { 
    1: 1.963, 2: 1.386, 3: 1.250, 4: 1.190, 5: 1.156, 6: 1.134, 7: 1.119, 8: 1.108, 9: 1.100, 10: 1.093, 
    11: 1.088, 12: 1.083, 13: 1.079, 14: 1.076, 15: 1.074, 16: 1.071, 17: 1.069, 18: 1.067, 19: 1.066, 20: 1.064 
  },
  "80%": { 
    1: 3.078, 2: 1.886, 3: 1.638, 4: 1.533, 5: 1.476, 6: 1.440, 7: 1.415, 8: 1.397, 9: 1.383, 10: 1.372, 
    11: 1.363, 12: 1.356, 13: 1.350, 14: 1.345, 15: 1.341, 16: 1.337, 17: 1.333, 18: 1.330, 19: 1.328, 20: 1.325 
  },
  "90%": { 
    1: 6.314, 2: 2.920, 3: 2.353, 4: 2.132, 5: 2.015, 6: 1.943, 7: 1.895, 8: 1.860, 9: 1.833, 10: 1.812, 
    11: 1.796, 12: 1.782, 13: 1.771, 14: 1.761, 15: 1.753, 16: 1.746, 17: 1.740, 18: 1.734, 19: 1.729, 20: 1.725 
  },
  "95%": {
    1: 12.71, 2: 4.303, 3: 3.182, 4: 2.776, 5: 2.571, 6: 2.447, 7: 2.365, 8: 2.306, 9: 2.262, 10: 2.228,
    11: 2.201, 12: 2.179, 13: 2.160, 14: 2.145, 15: 2.131, 16: 2.120, 17: 2.110, 18: 2.101, 19: 2.093, 20: 2.086
  },
  "98%": { 
    1: 31.821, 2: 6.965, 3: 4.541, 4: 3.747, 5: 3.365, 6: 3.143, 7: 2.998, 8: 2.896, 9: 2.821, 10: 2.764, 
    11: 2.718, 12: 2.681, 13: 2.650, 14: 2.624, 15: 2.602, 16: 2.583, 17: 2.567, 18: 2.552, 19: 2.539, 20: 2.528 
  },
  "99%": { 
    1: 63.657, 2: 9.925, 3: 5.841, 4: 4.604, 5: 4.032, 6: 3.707, 7: 3.499, 8: 3.355, 9: 3.250, 10: 3.169, 
    11: 3.106, 12: 3.055, 13: 3.012, 14: 2.977, 15: 2.947, 16: 2.921, 17: 2.898, 18: 2.878, 19: 2.861, 20: 2.845 
  }
};

// setup a data structure for generating 1x1, 2x2, 3x3 and 4x4 plots
var resolutionData = {
  "gridID": "svg-grid-container",
  "1x1": {
    "n": 1,
    "svgIDs": ["svg00"],
    "ddIDs": ["dd00"], // dropdown IDs
    "circleR": 15,
    "bestFitLW": 6.5,
    "grid-template-columns": "1fr",
    "grid-template-rows": "1fr",
    "svgWidth": 1110,
    "svgHeight": 520,
    "nYTicks": 7,
    "fontSize": "24px"
  },
  "2x2": {
    "n": 4,
    "svgIDs": [
      "svg00", "svg01", 
      "svg10", "svg11"
    ],
    "ddIDs": [
      "dd00", "dd01",
      "dd10", "dd11"
    ],
    "circleR": 11,
    "bestFitLW": 5.5,
    "grid-template-columns": "1fr 1fr",
    "grid-template-rows": "auto 1fr",
    "svgWidth": 550,
    "svgHeight": 260,
    "nYTicks": 5,
    "fontSize": "22px"
  },
  "3x3": {
    "n": 9,
    "svgIDs": [
      "svg00", "svg01", "svg02",
      "svg10", "svg11", "svg12",
      "svg20", "svg21", "svg22"
    ],
    "ddIDs": [
      "dd00", "dd01", "dd02",
      "dd10", "dd11", "dd12",
      "dd20", "dd21", "dd22"
    ],
    "circleR": 7.5,
    "bestFitLW": 4.5,
    "grid-template-columns": "1fr 1fr 1fr",
    "grid-template-rows": "auto 1fr 1fr",
    "svgWidth": 363.5,
    "svgHeight": 173.3,
    "nYTicks": 5,
    "fontSize": "20px"
  },
  "4x4": {
    "n": 16,
    "svgIDs": [
      "svg00", "svg01", "svg02", "svg03",
      "svg10", "svg11", "svg12", "svg13",
      "svg20", "svg21", "svg22", "svg23",
      "svg30", "svg31", "svg32", "svg33"
    ],
    "ddIDs": [
      "dd00", "dd01", "dd02", "dd03",
      "dd10", "dd11", "dd12", "dd13",
      "dd20", "dd21", "dd22", "dd23",
      "dd30", "dd31", "dd32", "dd33"
    ],
    "circleR": 5,
    "bestFitLW": 3.5,
    "grid-template-columns": "1fr 1fr 1fr 1fr",
    "grid-template-rows": "auto 1fr 1fr 1fr",
    "svgWidth": 270,
    "svgHeight": 130,
    "nYTicks": 4,
    "fontSize": "16px"
  },
}

/**
 * Returns the Positive AND Negative mode data from the INTERPRET NTA results .xlsx file.
 * @param {string} filePath Path to the INTERPRET NTA results .xlsx file.
 * @returns {[Object[], Object[]]} An array whose first element is an array of objects, one object for each row of data
 * for positive mode; and whose second element is an array of object for negative mode.
 */
async function readInterpretOutputXLSX(filePath) {
  // fetch file
  const response = await fetch(filePath);
  const arrayBuffer = await response.arrayBuffer();

  // access data from desired tracer detection sheet and write to json object
  const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
  const sheetName = "Sheet1";
  const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  return jsonData;
}

/**
 * Cleans the XLSX input data by removing unwanted columns and generating the log10 of concentrations and
 * blank subtracted means. Also returns unique sample names (e.g., 10ppb, 100ppb, etc...)
 * @param {object[]} data The raw data pulled from the XLSX file.
 * @returns {object[], string[]} The cleaned data and an array of unique sample names.
 */
function cleanData(data) {
  const blankSubHeaderSuffix = "BlankSub Mean ";
  const concentrationHeaderSuffix = "Conc ";
  const columnsToKeep = [
    "Feature ID",
    "Chemical Name",
    "Ionization Mode",
    "Retention Time"
  ];

  // remove any unwanted columns from our data
  const uniqueSampleNames = [];
  data.forEach(row => {
    Object.entries(row).forEach(([colName, value]) => {
      if (!columnsToKeep.includes(colName) && !colName.startsWith(blankSubHeaderSuffix) && !colName.startsWith(concentrationHeaderSuffix)) {
        delete row[colName];
        return;
      }

      // We need to append the ionization mode to the chemical name
      if (colName === "Chemical Name") {
        row[colName] = `${row[colName]} (${row["Ionization Mode"]})`;
        return;
      }

      // if blank subtracted mean OR concentration, go ahead and take the log
      if (colName.startsWith(concentrationHeaderSuffix)) {
        row[`log${colName}`] = Math.log10(value) !== -Infinity ? Math.log10(value) : undefined;
        const sampleName = colName.split(" ")[1];
        if (!uniqueSampleNames.includes(sampleName)) {
          uniqueSampleNames.push(sampleName);
        }
        return;
      }

      if (colName.startsWith(blankSubHeaderSuffix)) {
        row[`log${colName}`] = Math.log10(value) !== -Infinity ? Math.log10(value) : undefined;
      }
    });
  });

  return [ data, uniqueSampleNames ];
}

/**
 * Returns an array of objects, each holding data for a single point on the scatter plots.
 * @param {object[]} data The cleaned data.
 * @param {string[]} uniqueSampleNames The array of unique sample ground names (e.g., 10ppb, 100ppb, etc...)
 * @returns {object[]} An array of object, each mapped to a single point.
 */
function getPointData(data, uniqueSampleNames) {
  const columnsToKeep = [
    "Feature ID",
    "Chemical Name",
    "Ionization Mode",
    "Retention Time"
  ];

  const pointData = [];
  data.forEach(row => {
    for (let sampleName of uniqueSampleNames) {
      const pointDatum = {};

      // remove undefined values
      if (row[`logBlankSub Mean ${sampleName}`] === undefined || row[`logConc ${sampleName}`] === undefined) {
        continue;
      }
      pointDatum[`Conc`] = row[`Conc ${sampleName}`];
      pointDatum[`logConc`] = row[`logConc ${sampleName}`];
      pointDatum[`BlankSub Mean`] = row[`BlankSub Mean ${sampleName}`];
      pointDatum[`logBlankSub Mean`] = row[`logBlankSub Mean ${sampleName}`];
      pointDatum["Sample Name"] = sampleName;

      columnsToKeep.forEach(colName => {
        pointDatum[colName] = row[colName];
      });
      
      pointData.push(pointDatum);
    }
  });

  return pointData;
}

function ols(data, xName, yName) {
  // find average of x and y variables
  const n = data.length;
  let xBar = 0;
  let yBar = 0;
  data.forEach(row => {
    xBar += row[xName];
    yBar += row[yName];
  });
  xBar /= n;
  yBar /= n;

  // find variance and covariance
  let sXX = 0;
  let sXY = 0;
  data.forEach(row => {
    sXX += (row[xName] - xBar)**2;
    sXY += (row[yName] - yBar) * (row[xName] - xBar);
  });

  // find slope and y-intercept
  const slope = sXY / sXX;
  const yIntercept = yBar - slope*xBar;

  // r squared
  let sst = 0; // total sum of squares
  let sse = 0; // estimated sum of squares
  data.forEach(row => {
    const estimate = yIntercept + slope*row[xName]
    sse += (row[yName] - estimate)**2;
    sst += (row[yName] - yBar)**2;
  });
  
  const r_sq = 1 - (sse / sst);

  return [ slope, yIntercept, r_sq ];
}

function calculatePredictionIntervals(data, xName, yName, slope, yIntercept, confidence) {
  const n = data.length;
  const df = n - 2;
  let xBar = d3.mean(data, d => d[xName]);

  let mse = 0;
  data.forEach(row => mse += (row[yName] - (yIntercept + slope*row[xName]))**2);
  mse /= df;

  return data.map(row => {
    const x = row[xName];
    const y = yIntercept + slope * x;
    const numerator = (x - xBar) ** 2;
    const denominator = d3.sum(data, d => (d[xName] - xBar) ** 2);
    
    const t = tStatisticValues[confidence][df];

    const radicand = mse * (1 + 1/n + numerator/denominator);
    const marginOfError = t * Math.sqrt(radicand)
    return {
      x: x,
      y: y,
      yLower: y - marginOfError,
      yUpper: y + marginOfError
    };
  });
}

/**
 * Filters the primary cleaned data for a single chemical.
 * @param {object[]} data The cleaned data ready for plotting all chemicals.
 * @param {string} chemName The chemical name.
 * @returns {object[]} The data for plotting points of a single chemical.
 */
function getPlottingDataForChem(data, chemName) {
   return data.filter(d => d["Chemical Name"] === chemName);
}

/**
 * Returns an array of chemical names found in the main data structure. If no chemical names found, returns an array
 * of empty strings.
 * @param {Object[]} dataMain dataMain The main data array of objects (for Pos or Neg mode).
 * @returns {string[]} An array of the chemical names pulled from the main data structure.
 */
function getChemNames(dataMain, chemNameSuffix = "(ESI+)") {
  let chemNames = [];

  // allow for "Chemical Name" or "Chemical_Name" as keys
  let chemNameKey;
  if (Object.keys(dataMain[0]).includes("Chemical Name")) {
    chemNameKey = "Chemical Name";
  } else if (Object.keys(dataMain[0]).includes("Chemical_Name")) {
    chemNameKey = "Chemical_Name";
  } else {
    // if no chemical names found, generate a list of empty strings
    dataMain.forEach(() => {
      chemNames.push("");
    });

    return chemNames
  }

  // now pull the chemical names using the key found above
  dataMain.forEach(row => {
    chemNames.push(`${row[chemNameKey]} ${chemNameSuffix}`);
  });

  return chemNames
}

/**
 * A d3 selection of an HTML element.
 * @typedef {d3.Selection<HTMLElement, unknown, null, undefined>} D3Selection
 */

function setupTopButtonPanel() {

}

/**
 * Generates a SVG within the specified parentElement.
 * @param {number} width The width of the SVG.
 * @param {number} height The height of the SVG.
 * @param {string} className The SVG class.
 * @param {string} id The SVG id.
 * @param {D3Selection} parentElement The d3 selection of the container the SVG should be appended to.
 * @returns 
 */
function makeSvgElement(width, height, className, id, parentElement) {
  const svg = parentElement.append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("overflow", "hidden")
    .attr("class", className)
    .attr("id", id);

  return svg;
}

/**
 * Creates a tooltip container and the tooltip itself for displaying data when scatter points are hovered over.
 * @returns {[D3Selection, D3Selection]} The tooltip container and the tooltip itself.
 */
function makeTooltip(parentGrid) {
  const tooltipContainer = parentGrid.append("div")
    .attr("class", "tooltip-container")
    .attr("id", "calCurveTooltip")
    .style("position", "absolute")
    .style("border-left", "1px solid black")
    .style("background-color", "#69b3a2")
    .style("height", "150px")
    .style("width", "350px")
    .style("margin-top", "50px");

  const tooltip = tooltipContainer.append("div")
    .style("background", "#fff")
    .style("color", "#000")
    .style("padding", "5px 10px")
    .style("height", "140px")
    .style("width", "345px")
    .style("border-left", "1px solid black")
    .style("font-size", "18px")
    .style("line-height", "1.5")
    .style("padding", "5px")
    .style("margin", "0px")
    .style("margin-left", "5px")
    .style("pointer-events", "none");

  return [ tooltipContainer, tooltip ];
}

/**
 * Generates plots based on the resolution being used.
 * @param {object} resolutionData The resolution data structure.
 * @param {string} resolution The resolution ("1x1", "2x2", "3x3" or "4x4").
 * @param {object[]} plottingData The data used for generating plots.
 * @param {string[]} chemNames An array of chemical names to plot.
 * @param {D3Selection} tooltip The tooltip selection.
 * @param {D3Selection} tooltipContainer The tooltip container selection.
 * @param {Function} colorScale The d3 color scale function being used.
 * @param {boolean} linesOfBestFit If true, plots are generated with the best fit lines.
 * @param {string} yScaleType The y-axis scale ("logarithmic" or "linear")
 */
function makeCalCurvesXxY(
  resolutionData, 
  resolution, 
  plottingData, 
  chemNames,  
  tooltip, 
  tooltipContainer, 
  confidence = "95%"
) {
  // store values based on our resolution in variables for easy access
  const nSVGs = resolutionData[resolution]["n"];
  const svgIDs = resolutionData[resolution]["svgIDs"];
  const circleR = resolutionData[resolution]["circleR"];
  const bestFitLW = resolutionData[resolution]["bestFitLW"];
  const svgWidth = resolutionData[resolution]["svgWidth"];
  const svgHeight = resolutionData[resolution]["svgHeight"];
  const gridTemplateCols = resolutionData[resolution]["grid-template-columns"];
  const gridTemplateRows = resolutionData[resolution]["grid-template-rows"];
  const nYTicks = resolutionData[resolution]["nYTicks"];
  const fontSize = resolutionData[resolution]["fontSize"];

  // first let's empty our svg grid container and change the number of rows and columns based on the resolution
  const gridID = resolutionData["gridID"];
  const svgParentGrid = d3.select(`#${gridID}`)
    .style("grid-template-columns", gridTemplateCols)
    .style("grid-template-rows", gridTemplateRows);

  svgParentGrid.selectAll("*").remove();

  // now we can iterate through our SVGs and chemNames to generate our plots one by one
  for (let i = 0; i < nSVGs; i++) {
    const svgID = svgIDs[i];
    const chemName = i < chemNames.length ? chemNames[i] : "Empty";

    // get the plotting data for the current chemical
    const pointData = getPlottingDataForChem(plottingData, chemName);

    const svg = makeSvgElement(svgWidth, svgHeight, "calCurveSVG", svgID, svgParentGrid);
    
    makeCalCurve(
      svg, 
      svgWidth,
      svgHeight,
      pointData, 
      chemName, 
      resolution,
      tooltip,
      tooltipContainer,
      confidence,
      circleR,
      bestFitLW,
      nYTicks,
      fontSize
    );
  }
}

function makeCalCurve(
  svg, 
  svgWidth,
  svgHeight,
  pointData, 
  chemName, 
  resolution,
  tooltip, 
  tooltipContainer, 
  confidence,
  circleR = 10,
  bestFitLW = 5,
  nYticks = 6,
  fontSize = "20px"
) {
  // reset svg contents
  svg.innerHTML = "";
  svg.selectAll("*").remove();

  if (chemName === "Empty") {
    return;
  }

  pointData = getPlottingDataForChem(pointData, chemName);

  // Add X axis
  let widthOffset = 50;
  let heightOffset = 20;
  let [ xMin, xMax ] = d3.extent(pointData, d => d["logConc"]);
  xMin -= 0.1;
  xMax += 0.1;
  const x = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([widthOffset, svgWidth-10]);
  svg.append("g")
    .attr("transform", `translate(0, ${svgHeight - heightOffset})`) // Adjusted transformation
    .call(d3.axisBottom(x).ticks(5));

  // Add Y axis
  let [ yMin, yMax ] = d3.extent(pointData, d => d["logBlankSub Mean"]);
  yMin = 0;
  yMax = Math.ceil(yMax)+1;
  let yTicks = [];
  let stepSize = yMax / nYticks;
  stepSize = yMax / (nYticks - 1);
  for (let i = 0; i < nYticks; i++) {
    yTicks.push(i*stepSize);
  }
  const y = d3.scaleLinear()
    .domain([yMin, yMax])
    .range([svgHeight-heightOffset, 75]);
  svg.append("g")
    .attr("transform", `translate(${widthOffset}, 0)`)
    .call(d3.axisLeft(y).tickValues(yTicks));

  // Define clipping path
  svg.append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("x", widthOffset)
    .attr("y", 75)
    .attr("width", svgWidth - widthOffset - 10)
    .attr("height", svgHeight - heightOffset - 75);

  // Add a group element and apply the clipping path
  const plotArea = svg.append("g")
    .attr("clip-path", "url(#clip)");

  // Add dots
  svg.append('g')
    .selectAll("circle")
    .data(pointData)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d["logConc"]); } )
      .attr("cy", function (d) { return y(d["logBlankSub Mean"]); } )
      .attr("r", circleR)
      .style("fill", "#69b3a2")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .on("mouseover", function(event, d) {
        d3.selectAll("circle").transition().duration(300).attr("r", circleR);
        d3.select(this).transition().duration(300).attr("r", circleR * 1.8);
        tooltipContainer.style("visibility", "visible");
        tooltipContainer.transition().duration(300).style("opacity", 1);
        tooltip.html(`<b>Chemical:</b> ${d["Chemical Name"]}<br><b>Feature ID:</b> ${d["Feature ID"]}<br><b>Sample Name:</b> ${d["Sample Name"]}<br><b>log<sub>10</sub>(Conc):</b> ${d["logConc"].toFixed(2)}<br><b>log<sub>10</sub>(Mean Area):</b> ${d["logBlankSub Mean"].toFixed(2)}`);
      })

  // Calculate linear regression coefficients
  const [ slope, intercept, r_sq ] = ols(pointData, "logConc", "logBlankSub Mean")
  
  // console.log(`y-intercept: ${intercept}\nslope: ${slope}\nr_sq: ${r_sq}`)

  // Calculate prediction intervals
  const predictionIntervals = calculatePredictionIntervals(pointData, "logConc", "logBlankSub Mean", slope, intercept, confidence);

  // Create line of best fit
  const lineData = [
    { x: xMin, y: slope * xMin + intercept },
    { x: xMax, y: slope * xMax + intercept }
  ];

  const line = d3.line()
    .x(d => x(d.x))
    .y(d => y(d.y));

  plotArea.append("path")
    .datum(lineData)
    .attr("class", "regression-line")
    .attr("d", line)
    .style("stroke", "magenta")
    .style("stroke-width", bestFitLW)
    .style("fill", "none");

  // Plot prediction intervals
  const area = d3.area()
    .x(d => x(d.x))
    .y0(d => y(d.yLower))
    .y1(d => y(d.yUpper));

  const predArea = plotArea.append("path")
    .datum(predictionIntervals)
    .attr("class", "prediction-interval")
    .attr("d", area)
    .style("fill", "lightblue")
    .style("opacity", 0.35);

  predArea.lower();

  // Plot upper bound
  const upperBound = d3.line()
    .x(d => x(d.x))
    .y(d => y(d.yUpper));

  plotArea.append("path")
    .datum(predictionIntervals)
    .attr("class", "upper-bound")
    .attr("d", upperBound)
    .style("stroke", "rgb(252, 137, 7)")
    .style("stroke-width", 2)
    .style("stroke-dasharray", "6,3")
    .style("fill", "none");

  // Plot lower bound
  const lowerBound = d3.line()
    .x(d => x(d.x))
    .y(d => y(d.yLower));

  plotArea.append("path")
    .datum(predictionIntervals)
    .attr("class", "lower-bound")
    .attr("d", lowerBound)
    .style("stroke", "rgb(252, 137, 7)")
    .style("stroke-width", bestFitLW)
    .style("stroke-dasharray", "6,3")
    .style("fill", "none");

  // Add gridlines
  const gridGroup = svg.append("g")
    .attr("class", "grid");

  gridGroup.selectAll(".y-grid")
    .data(yTicks)
    .enter()
    .append("line")
    .attr("class", "y-grid")
    .attr("x1", widthOffset)
    .attr("x2", svgWidth - 10)
    .attr("y1", d => y(d))
    .attr("y2", d => y(d))
    .attr("stroke", "#ddd")
    .attr("stroke-width", 1);

  gridGroup.selectAll(".x-grid")
    .data(x.ticks())
    .enter()
    .append("line")
    .attr("class", "x-grid")
    .attr("x1", d => x(d))
    .attr("x2", d => x(d))
    .attr("y1", 75)
    .attr("y2", svgHeight - heightOffset)
    .attr("stroke", "#ddd")
    .attr("stroke-width", 1);

  gridGroup.lower();

  // title
  svg.append("text")
    .attr("x", svgWidth / 2 + widthOffset / 2)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize)
    .attr("font-weight", "bold")
    .text(chemName);
  svg.append("foreignObject")
    .attr("x", widthOffset + 5)
    .attr("y", 28)
    .attr("width", resolution === "1x1" ? "280px" : "250px")
    .attr("height", ["1x1", "2x2"].includes(resolution) ? "50px" : resolution === "3x3" ? "40px" : "35px")
    .append("xhtml:div")
    .style("background-color", "rgba(0, 238, 255, 0.05)")
    .style("border", "1px solid black")
    .style("border-radius", "3px")
    .style("padding", "5px")
    .style("padding-left", "4px")
    .style("line-height", resolution === "1x1" ? "11px" : "8px")
    .style("font-size", resolution === "1x1" ? "18px" : "16px")
    .html(`LogArea = ${intercept.toFixed(2)} + ${slope.toFixed(2)}log<sub>10</sub>(Conc)<br>R<sup>2</sup> = ${r_sq.toFixed(2)}`);
}

async function calCurvesMain(inputXlsxPath) {
  // input data and process
  const data = await readInterpretOutputXLSX(inputXlsxPath);

  const [ cleanedData, uniqueSampleNames ] = cleanData(data);
  const pointData = getPointData(cleanedData, uniqueSampleNames);

  // get unique chemical names
  var chemNames = [];
  pointData.forEach(row => {
    if (!chemNames.includes(row["Chemical Name"])) {
      chemNames.push(row["Chemical Name"]);
    }
  })
  var chemNamesToggled = chemNames;

  // get plotting data for every chemical
  const plottingData = chemNames.map(chemName => getPlottingDataForChem(pointData, chemName));

  // setup parent grids and resolution data
  // setup containers for grid elements
  const parentGridContainer = d3.select("#cal-curves-container")
    .append("div")
    .attr("id", "parent-grid-container")
    .style("display", "grid")
    .style("height", "fit-content")
    .style("width", "fit-content")
    .style("grid-template-columns", "40px 1fr 170px")
    .style("grid-template-rows", "125px 27px 1fr 30px")
    .style("grid-template-areas", `
      "buttons buttons buttons"
      "yAxisTitle svg-grid groupTitle"
      "yAxisTitle svg-grid legendTooltip"
      "null1 xAxisTitle legendTooltip"
    `);

  const buttonGridContainer = parentGridContainer.append("div")
    .attr("id", "button-grid-container")
    .style("display", "grid")
    .style("grid-template-columns", "auto auto auto auto auto auto")
    .style("grid-area", "buttons")
    .style("justify-content", "center")
    .style("grid-template-areas", `
      "resolution pagination dropdowns reset confidence"
    `);

  const resolutionButtonContainer = buttonGridContainer.append("div")
      .attr("id", "resolution-button-grid-container")
      .style("grid-area", "resolution")
      .style("display", 'grid')
      .style("grid-template-columns", "1fr 1fr 1fr")
      .style("grid-template-rows", "1fr")
      .style("border", "1px solid #777")
      .style("height", "75px")
      .style("border-radius", "3px")
      .style("margin-right", "12px")
      .style("margin-top", "25px");

  const gridContainer = parentGridContainer.append("div")
    .attr("id", "svg-grid-container")
    .style("display", "grid")
    .style("grid-template-columns", "1fr 1fr")
    .style("grid-template-rows", "auto 1fr")
    .style("gap", "10px")
    .style("row-gap", "0px")
    .style("height", "fit-content")
    .style("width", "fit-content")
    .style("overflow", "visible")
    .style("grid-area", "svg-grid");

  const legendTooltipGridContainer = parentGridContainer.append("div")
    .attr("id", "legendTooltip-grid-container")
    .style("display", "grid")
    .style("grid-template-columns", "1fr")
    .style("grid-area", "legendTooltip");

  // add yAxisTitle
  const yAxisTitleContainer = parentGridContainer.append("div")
    .style("display", "grid")
    .style("grid-area", "yAxisTitle")
    .style("place-items", "center")
    .style("text-align", "center");

  yAxisTitleContainer
    .append("div")
    .style("transform", "translate(-35%, 80%) rotate(-90deg)")
    .style("font-size", "30px")
    .style("width", "218px")
    .style("text-align", "center")
    .html("log<sub>10</sub>(Mean Area)");

  // add xAxisTitle
  const xAxisTitleContainer = parentGridContainer.append("div")
    .style("display", "grid")
    .style("grid-area", "xAxisTitle")
    .style("place-items", "center");

  xAxisTitleContainer
    .append("div")
    .style("font-size", "30px")
    .style("transform", "translate(10%, 50%)")
    .html("log<sub>10</sub>(Concentration)");

  // setup a data structure for generating 1x1, 2x2, 3x3 and 4x4 plots
  let resolutionData = {
    "gridID": "svg-grid-container",
    "1x1": {
      "n": 1,
      "svgIDs": ["svg00"],
      "ddIDs": ["dd00"], // dropdown IDs
      "circleR": 15,
      "bestFitLW": 2.5,
      "grid-template-columns": "1fr",
      "grid-template-rows": "1fr",
      "svgWidth": 1110,
      "svgHeight": 520,
      "nYTicks": 7,
      "fontSize": "24px"
    },
    "2x2": {
      "n": 4,
      "svgIDs": [
        "svg00", "svg01", 
        "svg10", "svg11"
      ],
      "ddIDs": [
        "dd00", "dd01",
        "dd10", "dd11"
      ],
      "circleR": 11,
      "bestFitLW": 2,
      "grid-template-columns": "1fr 1fr",
      "grid-template-rows": "auto 1fr",
      "svgWidth": 550,
      "svgHeight": 260,
      "nYTicks": 5,
      "fontSize": "22px"
    },
    "3x3": {
      "n": 9,
      "svgIDs": [
        "svg00", "svg01", "svg02",
        "svg10", "svg11", "svg12",
        "svg20", "svg21", "svg22"
      ],
      "ddIDs": [
        "dd00", "dd01", "dd02",
        "dd10", "dd11", "dd12",
        "dd20", "dd21", "dd22"
      ],
      "circleR": 7.5,
      "bestFitLW": 1.8,
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-template-rows": "auto 1fr 1fr",
      "svgWidth": 363.5,
      "svgHeight": 173.3,
      "nYTicks": 5,
      "fontSize": "20px"
    },
    "4x4": {
      "n": 16,
      "svgIDs": [
        "svg00", "svg01", "svg02", "svg03",
        "svg10", "svg11", "svg12", "svg13",
        "svg20", "svg21", "svg22", "svg23",
        "svg30", "svg31", "svg32", "svg33"
      ],
      "ddIDs": [
        "dd00", "dd01", "dd02", "dd03",
        "dd10", "dd11", "dd12", "dd13",
        "dd20", "dd21", "dd22", "dd23",
        "dd30", "dd31", "dd32", "dd33"
      ],
      "circleR": 5,
      "bestFitLW": 1.5,
      "grid-template-columns": "1fr 1fr 1fr 1fr",
      "grid-template-rows": "auto 1fr 1fr 1fr",
      "svgWidth": 270,
      "svgHeight": 130,
      "nYTicks": 4,
      "fontSize": "16px"
    },
  }

  let resolution = "2x2";

  // setup tooltip for on-hovers
  const [ tooltipContainer, tooltip ] = makeTooltip(legendTooltipGridContainer);

  // tvalue table
  var confidence = "95%";

  // construct cal curves
  makeCalCurvesXxY(
    resolutionData,
    resolution,
    pointData,
    chemNamesToggled,
    tooltip,
    tooltipContainer,
    confidence
  );

  // pagination buttons
  const buttonData = [
    { "text": "&#x00AB;" },
    { "text": "&#x00BB;" },
  ];

  buttonGridContainer.append("div")
    .style("grid-area", "pagination")
    .selectAll("button")
    .data(buttonData)
    .enter()
    .append("button")
    .style("height", "100%")
    .html(d => d.text)
    .style("font-size", "30px")
    .style("width", "38px")
    .on("click", function(event, d) {
      const dIndex = Number(resolution[0])**2;
      // if back button
      if (d.text === "&#x00AB;") {
        // do nothing if dd00 has the first chemical already
        if (chemNameIndex === 0) {
          return;
        }
        chemNameIndex -= dIndex;
      } else if (d.text === "&#x00BB;"){ // if forward button
        // if the final active box is already populated with the last chemical, do nothing
        if (chemNameIndex >= chemNamesToggled.length - Number(resolution[0])**2) {
          return;
        }
        chemNameIndex += dIndex;
      }

      // update the dropdowns
      let index = 0;
      d3.selectAll(".dropdown")
        .each(function(d, i) {
          if (d3.select(this).property("disabled") === true) {
            return;
          }
          const chemName = chemNamesToggled[chemNameIndex + index];
          this.value = chemNamesToggled[chemNameIndex + index];
          this.text = chemNamesToggled[chemNameIndex + index];
          index++;
        });

      // replot chemicals
      const chemNamesTemp = chemNamesToggled.slice(chemNameIndex, chemNameIndex + Number(resolution[0])**2)
      makeCalCurvesXxY(
        resolutionData,
        resolution,
        pointData,
        chemNamesTemp,
        tooltip,
        tooltipContainer,
        confidence
      );
    });

  // add a "button" with 4 dropdown menues for selecting which chemicals to plot in each SVG
  const dropdownContainer = buttonGridContainer.append("div")
    .attr("id", "dropdown-container")
    .style("grid-area", "dropdowns")
    .style("display", "grid")
    .style("grid-template-columns", "1fr 1fr 1fr")
    .style("grid-template-rows", "1fr 1fr 1fr")
    .style("gap", "5px")
    .style("padding", "3px")
    .style("border", "1px solid black")
    .style("background-color", "#E9E9E9");
  
  let chemNameIndex = 0;
  const dropdownData = [
    { "id": "dd00", "svg": "svg00", "disabled": null },
    { "id": "dd01", "svg": "svg01", "disabled": null },
    { "id": "dd02", "svg": "svg02", "disabled": true },
    // { "id": "dd03", "svg": "svg03", "disabled": true },
    { "id": "dd10", "svg": "svg10", "disabled": null },
    { "id": "dd11", "svg": "svg11", "disabled": null },
    { "id": "dd12", "svg": "svg12", "disabled": true },
    // { "id": "dd13", "svg": "svg13", "disabled": true },
    { "id": "dd20", "svg": "svg20", "disabled": true },
    { "id": "dd21", "svg": "svg21", "disabled": true },
    { "id": "dd22", "svg": "svg22", "disabled": true },
    // { "id": "dd23", "svg": "svg23", "disabled": true },
    // { "id": "dd30", "svg": "svg30", "disabled": true },
    // { "id": "dd31", "svg": "svg31", "disabled": true },
    // { "id": "dd32", "svg": "svg32", "disabled": true },
    // { "id": "dd33", "svg": "svg33", "disabled": true },
  ];

  function setDropdownsFromResolution(
    resolutionData, 
    resolution, 
    dropdownData,
    chemNamesToggled
  ) {
    // get the IDs for active dd menus at this resolution
    const dropdownIDs = resolutionData[resolution]["ddIDs"];
  
    // disable non-active dd menus
    const selections = d3.selectAll("#dropdown-container").selectAll("select")
      .attr("disabled", (_, i) => dropdownIDs.includes(dropdownData[i].id) ? null : true );
      
    // empty dd menu values to repopulate
    selections.selectAll("option").remove();

    // add a blank value for all dd menus
    selections.append("option")
      .attr("value", "Empty")
      .text("")

    // add the chemNames from the dd menu
    let chemIndex = 0;
    dropdownData.forEach(ddObject => {
      if (!dropdownIDs.includes(ddObject.id)) {
        return;
      }
      const dropdown = d3.select(`#${ddObject.id}`);
      chemNamesToggled.forEach(chemName => {
        dropdown.append("option")
          .attr("value", chemName)
          .text(chemName);
      });
      dropdown.property("value", chemNamesToggled[chemIndex]);
      chemIndex++;
    }); 
  }

  // set initial dropdown values
  let chemIndex = 0;
  let activeDDIDs = resolutionData[resolution]["ddIDs"];
  dropdownData.forEach(d => {
    let dropdown = dropdownContainer.append("select")
      .attr("id", d.id)
      .attr("class", "dropdown")
      .style("width", "200px")
      .style("font-size", "14px")
      .attr("disabled", d.disabled);

    dropdown.append("option")
      .attr("value", "Empty")
      .text("")

    chemNamesToggled.forEach(chemName => {
      dropdown.append("option")
        .attr("value", chemName)
        .text(chemName);      
    });

    if (chemIndex < 4 && activeDDIDs.includes(d.id)) {
      dropdown.property("value", chemNamesToggled[chemIndex]);
      chemIndex++;
    } else {
      dropdown.property("value", "");
    }

    dropdown.on("change", () => {
      const selectedChemName = dropdown.property("value");
      const svg = d3.select(`#${d["svg"]}`)

      makeCalCurve(
        svg, 
        resolutionData[resolution]["svgWidth"],
        resolutionData[resolution]["svgHeight"],
        pointData, 
        selectedChemName, 
        resolution,
        tooltip, 
        tooltipContainer,
        confidence,
        resolutionData[resolution]["circleR"],
        resolutionData[resolution]["bestFitLW"],
        resolutionData[resolution]["nYTicks"],
        resolutionData[resolution]["fontSize"]
      );

      // update dropdown menu to reflect the current chemical name
      dropdown.selectAll("option").remove();
      dropdown.append("option")
        .attr("value", "Empty")
        .text("")
      chemNamesToggled.forEach(chemName => {
        dropdown.append("option")
          .attr("value", chemName)
          .text(chemName);
      });
      dropdown.property("value", selectedChemName);
    });
  });

  // add reset button
  buttonGridContainer.append("button")
    .style("grid-area", "reset")
    .html("&#x21BA;")
    .style("font-size", "28px")
    .style("width", "38px")
    .style("padding-top", "6px")
    .on("click", function() {
      d3.select("#groupTitle").remove();
      chemNameIndex = 0;

      chemNamesToggled = chemNames;
      setDropdownsFromResolution(
        resolutionData, 
        resolution, 
        dropdownData,
        chemNamesToggled
      )

      // update plots
      makeCalCurvesXxY(
        resolutionData,
        resolution,
        pointData,
        chemNamesToggled,
        tooltip,
        tooltipContainer,
        confidence
      );
    });

  // add confidence dropdown
  const confidenceDropdownDiv = buttonGridContainer.append("div")
    .style("background-color", "#f0f0f0")
    .style("border-radius", "3px")
    .style("border", "1px solid #a9a9a9")
    .style("display", "flex")
    .style("flex-direction", "column")
    .style("align-items", "center");
  
  confidenceDropdownDiv.append("text")
    .text("Prediction:")
    .style("font-size", "18px")
    .style("margin-top", "28px")
    .style("font-weight", "bold");

  const confidenceDropdown = confidenceDropdownDiv.append("select")
    .attr("id", "confidence-dropdown")
    .style("grid-area", "confidence")
    .style("font-size", "22px")
    .style("padding-left", "17px")
    .style("margin", "3px")
    .style("margin-top", "5px")
    .style("height", "40px")
    .style("width", "100px")
    .on("change", function() {
      confidence = this.value;
      const chemNamesTemp = [];
      dropdownData.forEach(ddObject => {
        const dd = d3.select(`#${ddObject.id}`);
        if (dd.property("disabled") === true) {
          return;
        }
        chemNamesTemp.push(dd.property("value"));
      });
      makeCalCurvesXxY(
        resolutionData,
        resolution,
        pointData,
        chemNamesTemp,
        tooltip,
        tooltipContainer,
        confidence
      );
    });

  Object.keys(tStatisticValues).forEach(conf => {
    confidenceDropdown.append("option")
      .attr("value", conf)
      .text(conf);
  });

  // Set the default value to "95%"
  confidenceDropdown.property("value", "95%");

  // add resolution buttons
  const resolutionButtonData = [
    { "text": "1x1", "rects": 1 },
    { "text": "2x2", "rects": 4 },
    { "text": "3x3", "rects": 9 },
    // { "text": "4x4", "rects": 16 }
  ];

  resolutionButtonData.forEach(buttonObject => {
    const button = resolutionButtonContainer
      .append("button")
      .style("margin", "2px")
      .on("click", () => {
        // reset chemNameIndex for pagination
        chemNameIndex = 0; 

        // update resolution
        resolution = buttonObject.text;

        // update plots
        makeCalCurvesXxY(
          resolutionData,
          buttonObject.text,
          pointData,
          chemNamesToggled,
          tooltip,
          tooltipContainer,
          confidence
        );

        // update dropdown menus
        setDropdownsFromResolution(
          resolutionData, 
          resolution, 
          dropdownData,
          chemNamesToggled
        );
      });

      const rectSize = 32 / Math.sqrt(buttonObject.rects) + "px";
      const rectsPerRow = Math.sqrt(buttonObject.rects);
  
      const contentsDiv = button.append("div")
        .style("display", "grid")
        .style("grid-template-rows", "1fr ".repeat(rectsPerRow).trim())
        .style("grid-template-columns", "1fr ".repeat(rectsPerRow).trim())
        .style("gap", "2px")
        .style("margin", "auto")
        .style("place-items", "center");
  
      for (let i = 0; i < buttonObject.rects; i++) {
        contentsDiv.append("div")
          .style("width", rectSize)
          .style("height", rectSize)
          .style("background-color", "#999")
          .style("border", "1px solid black");
      }
    });

  // add grouping functionality
  let groupCount = 0;

  // button for creating groups
  d3.select("#cal-curves-container")
    .append("button")
    .text("Create Group")
    .style("margin-top", "20px")
    .style("margin-bottom", "10px")
    .style("margin-left", "20px")
    .on("click", createGroup);

  // add a group container for the groups
  const groupContainer = d3.select("#cal-curves-container")
    .append("div")
    .attr("class", "group-container")
    .style("display", "flex")
    .style("flex-wrap", "wrap")
    .style("gap", "10px")
    .style("justify-content", "flex-start");

  function createGroup() {
    groupCount++;

    // create a container for each group
    const groupDiv = groupContainer.append("div")
      .attr("class", "group-interface")
      .attr("id", `group-${groupCount}`)
      .style("margin-bottom", "10px")
      .style("border", "1px solid black")
      .style("padding", "10px")
      .style("position", "relative")
      .style("display", "flex")
      .style("flex-direction", "column")
      .style("width", "600px");

    // input for group name
    groupDiv.append("label")
      .text("Group Name: ")
      .style("margin-bottom", "4px");
    const groupNameInput = groupDiv.append("input")
      .attr("type", "text")
      .attr("class", "group-name")
      .style("margin-bottom", "10px");

    // input for description
    groupDiv.append("label")
      .text("Description: ")
      .style("margin-bottom", "4px");
    groupDiv.append("textarea")
      .attr("class", "group-desc")
      .style("margin-bottom", "10px")
      .attr("rows", "3")
      .style("width", "595px")
      .style("resize", "none")
      .style("font-family", "inherit")
      .style("font-size", "inherit")
      .style("font-height", "inherit");

    groupDiv.append("label")
      .text("Select Chemical: ")
      .style("margin-bottom", "4px");

    // dropdown for selecting chem names
    const chemSelectContainer = groupDiv.append("div")
      .style("display", "flex")
      .style("align-items", "center")
      .style("gap", "10px");

    const select = chemSelectContainer.append("select")
      .attr("class", "chem-dropdown")
      .style("width", "300px");

    select.selectAll("option")
      .data(chemNamesToggled)
      .enter()
      .append("option")
      .text(d => d);

    // add button for adding chemical
    chemSelectContainer.append("button")
      .text("Add Chemical")
      .style("width", "100px")
      .on("click", () => {
        const selectedChem = select.property("value");
        addChemToList(groupDiv, selectedChem);
      });

    // list to display selected chems
    groupDiv.append("ul").attr("class", "chem-list");

    // buttons in bottom right
    const groupButtonContainer = groupDiv.append("div")
      .style("display", "flex")
      .style("align-items", "center")
      .style("gap", "15px")
      .style("position", "absolute")
      .style("bottom", "10px")
      .style("right", "10px");

    // visualize group button
    groupButtonContainer.append("button")
      .html("&#x1F453;")
      .style("font-size", "26px")
      .on("click", () => {
        const chemList = [];
        groupDiv.selectAll("li").nodes().forEach((d) => {
          chemList.push(d3.select(d).select("span").text());
        });

        if (chemList.length === 0) {
          return;
        }
        chemNamesToggled = chemList;

        // update dropdown menus
        setDropdownsFromResolution(
          resolutionData, 
          resolution, 
          dropdownData,
          chemNamesToggled
        )

        // update plots
        makeCalCurvesXxY(
          resolutionData,
          resolution,
          pointData,
          chemNamesToggled,
          tooltip,
          tooltipContainer,
          confidence
        );

        // add group name to plot
        d3.select("#groupTitle").remove();
        const groupNameValue = groupNameInput.property("value");
        const groupTitleContainer = parentGridContainer.append("div")
          .attr("id", "groupTitleContainer")
          .style("grid-area", "groupTitle")
          .style("display", "grid")
          .style("transform", "translate(16px, 0)");

        groupTitleContainer.append("div")
          .attr("id", "groupTitle")
          .style("font-size", "26px")
          .style("width", "fit-content")
          .style("height", "fit-content")
          .style("border-bottom", "1px solid #444")
          .style("margin-top", "6px")
          .style("color", "#444")
          .style("padding", "6px 8px")
          .style("padding-bottom", "3px")
          .style("white-space", "nowrap") // Prevent line breaks
          .style("overflow", "visible")
          .text(groupNameValue);
        });

    // remove group button at bottom right
    groupButtonContainer.append("button")
      .html("&#x1F5D1;")
      .style("font-size", "26px")
      .style("color", "red")
      .on("click", () => {
        const groupNameValue = groupNameInput.property("value");
        const chemList = groupDiv.selectAll("li").nodes();
        if (groupNameValue || chemList.length > 0) {
          const confirmed = window.confirm(` Are you sure you want to delete ${groupNameValue ? '"' + groupNameValue + '"' : "this group"}?`);
          if (confirmed) {
            groupDiv.remove();
            groupCount--;
            
            chemNamesToggled = chemNames;

            // update dropdown menus
            setDropdownsFromResolution(
              resolutionData, 
              resolution, 
              dropdownData,
              chemNamesToggled
            )

            // update plots
            makeCalCurvesXxY(
              resolutionData,
              resolution,
              pointData,
              chemNamesToggled,
              tooltip,
              tooltipContainer,
              confidence
            );

            // remove group title on plot if exists
            d3.select("#groupTitle").remove();
          }
        } else {
          groupDiv.remove();
          groupCount--;
        }
      });
  }

  /**
   * Populates a user created group with a selected chemical.
   * @param {D3Selection} groupDiv The group div selection to add the chemicals to.
   * @param {string} chemName The chemical that is being added to the group list.
   */
  function addChemToList(groupDiv, chemName) {
    const list = groupDiv.select(".chem-list");

    // check if this chem is already in the list
    const exists = list.selectAll("li")
      .nodes()
      .some(li => d3.select(li).select("span").text() === chemName);

    if (exists){
      return;
    }
    
    // remove button
    const listItem = list.append("li")
      .style("display", "flex")
      .style("align-items", "center");
    
    listItem.append("button")
      .html("&#x1F5D1;")
      .style("font-size", "22px")
      .style("color", "red")
      .style("padding", "-5px 1px")
      .style("margin-bottom", "5px")
      .on("click", () => {
        listItem.remove();
      });

    // create list item
    listItem.append("span")
      .text(chemName)
      .style("margin-left", "10px");
  }

  /**
   * @typedef {[string, string, string[], string[]]} CustomGroup
   */

  /**
   * Returns an array of data corresponding to any custom groups created by the user. If a group has been created
   * but not populated with any chemicals, it is ignored.
   * @returns {CustomGroup[]} An array of custom groups in the form:
   *  [
   *    ["group0Name", "group0Desc", ["group0Chem0", "group0Chem1", ...], ["group0Mode0", "group0Mode1", ...]],
   *    ["group1Name", "group1Desc", ["group1Chem0", "group1Chem1", ...], ["group1Mode0", "group1Mode1", ...]],
   *    ...
   *  ] 
   */
  function getGroupData() {
    const groupData = [];
    const groups = d3.selectAll(".group-interface").nodes();

    groups.forEach(group => {
      const chemicals = d3.select(group)
        .select(".chem-list")
        .selectAll("li")
        .nodes()
        .map(li => d3.select(li).select("span").text());
      
      if (chemicals.length === 0) {
        return;
      }

      const chemicalNames = [];
      const chemicalModes = [];
      const esiRegex = /\s\((ESI[+-])\)/
      chemicals.forEach(chemical => {
        const [ chemName, chemMode, _ ] = chemical.split(esiRegex);
        chemicalNames.push(chemName);
        chemicalModes.push(chemMode);
      });

      const groupTitle = d3.select(group)
        .select("input")
        .property("value");
      const groupDesc = d3.select(group)
        .select("textarea")
        .property("value");

      const groupDatum = [
        groupTitle, groupDesc, chemicalNames, chemicalModes
      ];

      groupData.push(groupDatum);
    });

    return groupData;
  }

  /** Uncomment below to test the getGroupData() function */

  // d3.select("body").append("button").text("get group data").on("click", () => {
  //   const dat = getGroupData();
  //   console.log(dat)
  // });

  

}

const inputXlsxPath = "./data/qNTA_Surrogate_Detection_Statistics_File_WW2DW.xlsx";
calCurvesMain(inputXlsxPath);
