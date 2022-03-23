import { fireStore } from "./firebase"
import firebase from "firebase/app"

const database = fireStore;

export const createNewUser = async (user_uid, userObj) => {
  await database.collection('users').doc(user_uid).set(userObj);
}
