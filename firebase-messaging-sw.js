importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyAk1D1rzMlhWGyAIY4Xh-GJ2P_20gCo2jU",
    authDomain: "webdeploy-8ea7b.firebaseapp.com",
    projectId: "webdeploy-8ea7b",
    storageBucket: "webdeploy-8ea7b.appspot.com",
    messagingSenderId: "514541319742",
    appId: "1:514541319742:web:d46d86edd331207479436f"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
