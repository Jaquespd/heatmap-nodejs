var heatmap = require("./index");
var fs = require("fs");

var heat = heatmap(1024, 600, { radius: 30 });
heat.addTimestamp("February 16th 2022", "20:32:05");
fs.writeFileSync("blob2.png", heat.backgroundCanvas.toBuffer());
