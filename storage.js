class Storage{
  constructor(){
    this.city;
    this.state
    this.defaultCity = 'Tashkent';
    this.defaultState = 'UZ';
  }

  getLocationData(){
    if(localStorage.getItem('city')===null){
      this.city = this.defaultCity

    }
    else{
     return this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('state')===null){
     this.state = this.defaultCity

    }
    else{
      this.state = localStorage.getItem('state');
    }

  }

  setLocationData(city,state){
    localStorage.setItem('city',city);
    localStorage.setItem('state',state);
  }
}
