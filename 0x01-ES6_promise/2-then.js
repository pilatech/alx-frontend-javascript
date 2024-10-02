export default function handleResponseFromAPI(promise) {
  let retVal = null;
  promise.then(() => {
    retVal = {
      status: 200,
      body: 'success',
    };
  }).catch(() => {
    retVal = new Error();
  }).finally(() => {
    console.log('Got a response from the API');
    return retVal;
  });
}
