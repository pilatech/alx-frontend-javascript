export default function cleanSet(set, startString) {
  if (!startString) return '';
  const starr = [];
  for (const item of set) {
    starr.push(item);
  }
  if (starr.length === 0) return '';

  const cleanedArr = starr.filter((value) => value.startsWith(startString));

  const arrWithoutFirst = cleanedArr.map((item) => item.substring(startString.length));
  return arrWithoutFirst.join('-');
}
