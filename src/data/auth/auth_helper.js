import firebase from "firebase";
import { auth, fbProvider, googleprovider } from "../../firebase";

export const googleSignIn = () => {
  return firebase
    .auth()
    .signInWithPopup(googleprovider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      return result;
    })
    .catch((error) => {
      return error;
    });
};
export const facebookSignIn = () => {
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
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
