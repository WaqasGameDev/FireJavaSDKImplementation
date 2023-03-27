mergeInto(LibraryManager.library, {
   
	GetToken: function(vapid) {
        // Add the public key generated from the console here.
getToken(messaging, { vapidKey: UTF8ToString(vapid) }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
	console.log(currentToken);
    // ...
  } else {
    // Show permission request UI
    console.warn('No registration token available. Request permission to generate one.');
	    // ...
  }
}).catch((err) => {
  console.error('An error occurred while retrieving token. ', err);
  // ...
});
    }, 

});