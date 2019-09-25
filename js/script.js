var html = "";
var rgbColor;

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function randomRgb() {
  var color = "rgb(";
  color += randomColor() + ",";
  color += randomColor() + ",";
  color += randomColor() + ")";
  return color;
}

for (i = 0; i < 10; i += 1) {
  rgbColor = randomRgb();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
