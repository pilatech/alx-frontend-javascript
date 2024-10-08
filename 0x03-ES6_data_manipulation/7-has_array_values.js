export default function hasValuesFromArray(st, arr) {
  const starr = Array.from(st);
  for (const item of arr) {
    if (!starr.includes(item)) {
      return false;
    }
  }
  return true;
}
