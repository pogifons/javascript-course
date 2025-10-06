'use strict';
 console.log('Mapty OOP Foundation');

 class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10)
    clicks = 0;

    constructor(coords, distance, duration) {
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }
    setDescription() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.description = `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click(){
      this.clicks++;
    }
 }

 // Test the Workout class
const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout); 

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this.setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this.setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// ===== TESTING THE CLASS HIERARCHY =====

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);

console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);


 //main form element
const form = document.querySelector('.form'); 
 //container for workouts
const contrainerWorkouts = document.querySelector('.workouts');
 //inputype
const inputType = document.querySelector('.form__input--type');
  //input distance
  const inputDistance = document.querySelector('.form__input--distance');
  //input duration
  const inputDuration = document.querySelector('.form__input--duration');
  //input cadence
  const inputCadence = document.querySelector('.form__input--cadence');
  //input elevation
  const inputElevation = document.querySelector('.form__input--elevation');
class App{
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor(){
    console.log('App is starting');
    this._getPosition();
  }

  _getPosition(){
     if (navigator.geolocation) {
    console.log('🔍 Requesting user location...');
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      this._handleLocationError.bind(this), 
      {
        timeout: 10000,
        enableHighAccuracy: true,
        maximumAge: 600000,
      });
  } else {
    alert('❌ Geolocation is not supported by this browser');
    this._loadDefaultMap();
  } 
  }
  
  _handleLocationError(error){
    console.error('Geolocation error:', error);
 
        let message = 'Could not get your position. ';
 
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message +=
              'Location access was denied. Please enable location services and refresh the page.';
            break;
          case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            message += 'Location request timed out.';
            break;
          default:
            message += 'An unknown error occurred.';
            break;
        }
 
        alert(`📍 ${message}`);
        this._loadDefaultMap();
  }
  _loadDefaultMap(){

    console.log('Loading default map Location(Manila)');

  //actual coordinates 
  const defaultCoords = [14.604, 120.994];
  //from const map
  //from 13 to #thisZoomLevel
  this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    // add open street map
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this.#map);

  
  this.#map.on('click', this._showForm.bind(this));

    console.log('Default map loaded successfully'); 
  }

  _loadMap(position){ 
    
    const { latitude, longitude } = position.coords;
    console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);
 
    // create coordinate array
    const coords = [latitude, longitude];
 
    // initialize map and center at users position
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
 
    // add open street maps
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
 
    // add a marker to the users location
    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();
    
    //new the map event listener
    this.#map.on('click', this._showForm.bind(this));

 
    console.log('map loaded successfully at users location');
  }
  _showForm(mapE){ 
    this.#mapEvent = mapE;
      const { lat, lng } = mapE.latlng; 
      console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

      //create marker
      L.marker([lat, lng])
        .addTo(this.#map)
        .bindPopup(
          `Workout location<br>Lat: ${lat.toFixed(4)}<br>Lng: ${lng.toFixed(4)}`
    )
    .openPopup();
  }
}

const app = new App();
console.log('Hour 2 Complete');