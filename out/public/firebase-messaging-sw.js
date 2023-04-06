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
self.addEventListener('message', (event) => {
	if(event.data == 'CallMe'){
		console.error("Called from message generated from index post message");
			  // Send a message to the main page with the payload
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage('SampleText');
    });
  });
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
