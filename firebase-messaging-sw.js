importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB-iE3JOO2bU5Rm0rh2l1QZ1fvJepEV55M",
  authDomain: "puchocodri-507b1.firebaseapp.com",
  projectId: "puchocodri-507b1",
  storageBucket: "puchocodri-507b1.firebasestorage.app",
  messagingSenderId: "558917990116",
  appId: "1:558917990116:web:53c400531bfb9196ce5ef1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png',
    badge: '/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
