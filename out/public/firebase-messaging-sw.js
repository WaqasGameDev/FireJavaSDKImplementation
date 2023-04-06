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

var indexHtmlClient = null;

addEventListener('message', event => {

if(event.data == "setIndexHtmlClient")
{
	console.log('received index.html source');
	indexHtmlClient = event.source;
	return;
}
if(indexHtmlClient){
	
	// event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  indexHtmlClient.postMessage("Hi client");
  return;
}

	
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
	
	  // Send a message to the main page with the payload
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage('call-my-function');
    });
  });

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
