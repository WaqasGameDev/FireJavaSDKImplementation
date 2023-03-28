Module.FirebaseMessagingRequestPermission = function(vapid)  {
    console.log('RequestPermission called');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        Module.FirebaseMessagingGenerateToken(vapid);
      } else {
        console.warn('Notification permission Not Granted.');
        window.alert("Notification Permission Denied.");
      };
    })
  }

  Module.FirebaseMessagingGenerateToken = function(vapid)  {
    console.log('GenerateToken called');
    getToken(messaging, {
      vapidKey: UTF8ToString(vapid)
    }).then((currentToken) => {
      if (currentToken) {
        console.log(currentToken);
      }
    }).catch((err) => {
      console.error('An error occurred while retrieving token. ', err);
    });
  }
