export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve, reject) => {
    Promise.any(chinaDownload, USDownload).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}
