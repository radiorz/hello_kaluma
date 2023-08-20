const pins = ([r, g, b] = [0, 2, 4]);
function setColor(red, green, blue) {
  analogWrite(r, red);
  analogWrite(g, green);
  analogWrite(b, blue);
}
function genRandomRGB() {
  return [...new Array(3)].map(() => Math.random() * 255);
}
setInterval(() => {
  setColor(...genRandomRGB());
}, 1000);
