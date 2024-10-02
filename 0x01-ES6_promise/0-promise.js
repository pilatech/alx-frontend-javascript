export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const ans = 1 + 1;
    if (ans === 2) {
      resolve('This will resolve');
    } else {
      reject(new Error('This will reject'));
    }
  });
}
