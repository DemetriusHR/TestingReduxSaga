function generateRandomColors() {
  const num =
    "#" +
    [1, 2, 3, 4, 5, 6]
      .map(_ => "0123456789abcdef"[Math.floor(Math.random() * 16)])
      .join("");
  return num;
}

export default generateRandomColors;

export function getTextColor(color) {
  const colorCheck = color.substring(1);
  const rgb = parseInt(colorCheck, 16);

  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  if (luma < 180) {
    return "#fff";
  }

  return "#000";
}
