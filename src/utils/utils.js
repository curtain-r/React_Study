export function randomNum(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

export function calculateWidth(str) {
  return 30 + str.length * 15;
}