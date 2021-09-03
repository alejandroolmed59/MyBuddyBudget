import FireBaseApp from './fire'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

console.log(FireBaseApp)
const provider = new GoogleAuthProvider();
const auth = getAuth();
const logInGoogle = () =>{
    return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const credential = GoogleAuthProvider.credentialFromResult(result);

      //const token = credential.accessToken;
      console.log(GoogleAuthProvider.credentialFromResult(result))
      // The signed-in user info.
      return result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      //const errorCode = error.code;
       console.log(error.message);
      // The email of the user's account used.
      //const email = error.email;
      // The AuthCredential type that was used.
      //const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export default logInGoogle;