import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let content = '';
  uploadPhoto().then((data) => {
    content += `${data.body} `;
    return createUser();
  }).then((user) => {
    content += `${user.firstName} ${user.lastName}`;
    console.log(content);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
