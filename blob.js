var heatmap = require("./index");
var fs = require("fs");

var heat = heatmap(1024, 600, { radius: 30 });

heat.addTimestamp(
  "XXXX-YYYY-ZZZZ",
  "February 16th 2022",
  "20:32:05",
  "Current Count: 1",
  "Max Count: 49"
);
// fs.writeFileSync("blob2.png", heat.backgroundCanvas.toBuffer());
