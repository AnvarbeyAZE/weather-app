class Weather{

  constructor(city,state){
    this.apiKey='abe9dfa48473bb328b45b72fa9b04277';
    this.city = city;
    this.state =state

  }

  async getData(){

  const weatherObj = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
  const weather = await weatherObj.json();

  return{
    weather
  }
  }

  changeLocation(city){
    console.log(city);
    this.city = city;

  }


}
