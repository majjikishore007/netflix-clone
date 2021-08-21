import firebase from "firebase";
import { auth, fbProvider, googleprovider } from "../../firebase";

export const googleSignIn = () => {
  firebase
    .auth()
    .signInWithPopup(googleprovider)
    .then((result) => {
      var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      return result;
      // ...
    })
    .catch((error) => {
      console.log(error.message);
    });
};
export const facebookSignIn = () => {
  console.log(fbProvider);
  firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // The signed-in user info.
      var user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;
      return result;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      // ...
    });
};
var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://majjikishore.page.link/6RQi",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "majjikishore.page.link",
};
export const signupWithEmail = (email) => {
  firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      console.log("emailForSignIn", email);
      window.localStorage.setItem("emailForSignIn", email);
      // ...
    })
    .catch((error) => {
      console.log("ERROR", error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};
