;(function(ng) {
  'use strict';
  ng.module('ComicsDates')
  .controller('LoginController', LoginController);
  }(window.angular));

  LoginController.$inject = ['$scope','$firebase','$firebaseAuth'];
  function LoginController ($scope, $firebase, $firebaseAuth) {
    var self = this;

    self.ciao="ciao";

    var config = {
      apiKey: "AIzaSyAGNIf5Z6JZV_-WWPjL9mR0MkNMvKdtWZE",
      authDomain: "comicsdates.firebaseapp.com",
      databaseURL: "https://comicsdates.firebaseio.com",
      storageBucket: "comicsdates.appspot.com",
    };
    firebase.initializeApp(config);


    if (!firebase.auth().currentUser) {
        // [START createprovider]
        var provider = new firebase.auth.GoogleAuthProvider();
        // [END createprovider]
        // [START addscopes]
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        // [END addscopes]
        // [START signin]
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(result);
          self.authData=user;
          self.authData="ciaone";
          self.ciao="ciaone";

          // [START_EXCLUDE]
          //document.getElementById('quickstart-oauthtoken').textContent = token;
          // [END_EXCLUDE]
        }).catch(function(error) {
          console.log(error);
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // [START_EXCLUDE]
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
          } else {
            console.error(error);
          }
          // [END_EXCLUDE]
        });
        // [END signin]
      } else {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      }

    return self;
  }
