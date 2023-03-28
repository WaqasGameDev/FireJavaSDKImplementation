var firebaseMessagingObject = {


  GetToken: function(vapid)  {
     gameInstance.Module.FirebaseMessagingRequestPermission(vapid);
  },
}

mergeInto(LibraryManager.library, firebaseMessagingObject);
