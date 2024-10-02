import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve, reject) => {
    const states = [];
    signUpUser(firstName, lastName).then((user) => {
      states.push({
        status: 'resolved',
        value: user,
      });
      return uploadPhoto(fileName);
    }).catch((err) => {
      states.push({
        status: 'rejected',
        value: err,
      });
    }).finally(() => {
      if (states.length > 0) resolve(states);
      else reject();
    });
  });
}
