# heatmap

Heatmaps for node.js!

This is an update of the original library which can be found at:
"author": {
"name": "James Halliday",
"email": "mail@substack.net",
"url": "http://substack.net"
"git": "https://github.com/substack/node-heatmap"
},

I made the update for specific use in a project of mine. So I don't know if it will work for you. I recommend using the original library above.

# example

## blob.js

```javascript
var heatmap = require("heatmap");

var heat = heatmap(500, 500, { radius: 30 });
for (var i = 0; i < 5000; i++) {
  var rho = Math.random() * 2 * Math.PI;
  var z = Math.pow(Math.random(), 2) * 200;

  var x = 250 + Math.cos(rho) * z;
  var y = 250 + Math.sin(rho) * z;

  heat.addPoint(x, y);
}
heat.draw();

var fs = require("fs");
fs.writeFileSync("blob.png", heat.canvas.toBuffer());
```

# methods

var heatmap = require('heatmap');

## var heat = heatmap(...)

Create a new heatmap from an existing canvas element, a numeric width and
height, or an option object with canvas or width and height fields.

Optionally, you can set the `opts.radius` and `opts.threshold` to control the
rendering a little.

## heat.addPoint(x, y, params)

Add a point to the heatmap with a `radius`.

`params` can have:

- radius, defaults to heat.radius || 20
- weight, defaults to 0.1

## heat.scale(x, y)

Scale the canvas by the coefficients `x` and `y`.

If `y` is undefined, scale both x and y by the first parameter, `x`.

## heat.draw()

Render all the points onto the canvas element.

## heat.canvas

# install

With [npm](http://npmjs.org), just do:

    npm install heatmap-nodejs
