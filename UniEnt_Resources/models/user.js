
    export function registerUser(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    export function login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }
    export function logout() {
        return firebase.auth().signOut()
    }
/*
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
*/