importScripts('https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyDa_VEU9wV7CBZgsWJ6v1Fba7KMV-gUY34",
  authDomain: "fir-javascriptsdk.firebaseapp.com",
  projectId: "fir-javascriptsdk",
  storageBucket: "fir-javascriptsdk.appspot.com",
  messagingSenderId: "743642467709",
  appId: "1:743642467709:web:a24fca9b5d24f48313d014",
  measurementId: "G-XP1Z9K22VR"
};

firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add an event listener to handle background messages.
self.addEventListener('push', (event) => {
  if (event.data) {
    // Handle background message
    const message = event.data.json();
    console.log('Received background message:', message);

    // Customize notification here
    const notificationTitle = message.notification.title;
    const notificationOptions = {
      body: message.notification.body,
      icon: '/firebase-logo.png',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  }
});

// Add an event listener to handle messages received in the foreground.
messaging.onMessage((message) => {
  console.log('Received foreground message:', message);

  // Customize notification here
  const notificationTitle = message.notification.title;
  const notificationOptions = {
    body: message.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Export the necessary functions and variables
self.firebase = firebase;
self.messaging = messaging;

var gameInstance = null;

self.addEventListener('message', (event) => {
	sendMessageWithDelayFunction(event.data.objectName, event.data.methodName, event.data.message)
});

function sendMessageWithDelayFunction(objectName, methodName, message) {
	console.error('Game instance received is : '+gameInstance);
  if (gameInstance !== null) {
    gameInstance.SendMessage(objectName, methodName, message);
  } else {
    let scheduledAction = function() {
      if (gameInstance !== null) {
        gameInstance.SendMessage(objectName, methodName, message);
      } else {
        console.log("gameInstance is still null, rescheduling action...");
        setTimeout(scheduledAction, 100);
      }
    };
    console.log("gameInstance is null, scheduling action...");
    setTimeout(scheduledAction, 100);
  }
}

