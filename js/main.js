// Initialize Firebase
var config = {
  apiKey: "AIzaSyDdZhvl2O4IrU6SojSABdG-zXVeMn3STEQ",
  authDomain: "js-circuits.firebaseapp.com",
  databaseURL: "https://js-circuits.firebaseio.com",
  storageBucket: "js-circuits.appspot.com",
};

firebase.initializeApp(config);

// Connect to Database
var database = firebase.database();
function writeRestaurantData(restaurantId, name, cuisine) {
  firebase.database().ref('restaurant/' + restaurantId).set({
    name: name,
    cuisine: cuisine
  });
}
function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

function writeReservationData(reservationId, userId, restaurantId, date, time, guestCount) {
  firebase.database().ref('reservations/' + reservationId).set({
    user: userId,
    restaurant: restaurantId,
    date: date,
    time: time,
    guestCount: guestCount
  });
}
