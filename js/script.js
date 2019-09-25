var html = "";
var red;
var green;
var blue;
var rgbColor;

function randomColor() {
  return Math.floor(Math.random() * 256);
}

for (i = 0; i < 10; i += 1) {
  red = randomColor();
  green = randomColor();
  blue = randomColor();
  rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
