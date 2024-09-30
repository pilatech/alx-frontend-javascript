export default function iterateThroughObject(reportWithIterator) {
  let retStr = '';
  for (const name of reportWithIterator) {
    retStr += `${name} | `;
  }
  retStr = retStr.trim();
  const strArr = retStr.split(' ');
  strArr.pop();
  return strArr.join(' ');
}
