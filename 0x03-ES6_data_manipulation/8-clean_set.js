export default function cleanSet(set, startString) {
  if (!startString) return '';
  const starr = Array.from(set);
  const cleanedArr = starr.filter((value) => value.startsWith(startString));

  const arrWithoutFirst = cleanedArr.map((item) => item.substring(startString.length));
  return arrWithoutFirst.join('-');
}
