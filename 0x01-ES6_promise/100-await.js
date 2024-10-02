import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let res = null;

  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    res = { photo, user };
  } catch (e) {
    if (e) {
      res = {
        photo: null,
        user: null,
      };
    }
  }
  return res;
}
