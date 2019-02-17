class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }
  paint(data){
    this.wind.textContent = data.weather.wind.speed
    this.location.textContent = `${data.weather.name}, ${data.weather.sys.country}`;
    this.desc.textContent = `Description : ${data.weather.weather[0].main}`;
    this.string.textContent = `Temperature : ${data.weather.main.temp}`;
    this.details.textContent = `Details : ${ data.weather.weather[0].description}`;
    this.humidity.textContent = `Humidity : ${data.weather.main.humidity}`;
    this.icon.className += ` owf-${data.weather.weather[0].id}`;
   // console.log(this.icon)

    //console.log(data.weather);
    this.wind.textContent = data.weather.wind.speed;
    console.log(this.wind)

    //this.icon.setAttribute('src',data.weather.weather[0].icon);
  }
}

