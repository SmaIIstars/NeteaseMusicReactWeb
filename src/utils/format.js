export function getSizeImage(imgURL, width, height) {
  return `${imgURL}?param=${width}x${height}`;
}

export function getPlayCount(number) {
  if (number < 0) return;
  if (number < 10000) return number;
  else if (number / 10000 < 10000) return Math.floor(number / 1000) / 10 + "万";
  else return Math.floor(number / 10000000) / 10 + "亿";
}
