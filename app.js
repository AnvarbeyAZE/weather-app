
//Initi storage
const storage = new Storage();

//Get stored location data
//console.log(storage.getLocationData);
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);

//Init objects : Weather , Ui
const app = new Weather(storage.city);
const ui = new UI;
//Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  //const state = document.getElementByI  d('state').value;


  app.changeLocation(city);

  storage.setLocationData(city);


  getWeather();

  $('#locModal').modal('hide');


})

function getWeather(){
app.getData()
.then((data)=>{
ui.paint(data);
})
.catch(err=>setTimeout(function(){
  alert('Sorry ,City Not Found');
},2000));
}
