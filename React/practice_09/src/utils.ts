function convertToHex(c: number) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + convertToHex(r) + convertToHex(g) + convertToHex(b);
}

export default rgbToHex;
