// C-CREATE
// R-READ
// U-UPDATE
// D-DELETE



//3 part
// memory data store (CRUD)
//UI(DOM) (
    //create - New Element creation
    //read - showing UI
    //update - updating UI
    //delete - deleting UI
//)
//LocalStorage (CRUD)

//weatherStore.city //get
//weatherStore.city = 'csds' //set

//Grouping data
/* const weatherStore = {
    privateCity: 'Pabna',
    privateCountry: 'BD',
    API_KEY: 'd777b9cd1436c98f958dac1e189e4f09',
    set city(name){
        //validation
        this.privateCity = name;
    },  
    set country(name){
        this.privateCountry = name;
    },
    async fetchData() {
        try{
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${this.privateCity},${this.privateCountry}&units=metric&appid=${this.API_KEY}`
            );
            return await res.json();
        } catch(err) {
            UI.showMessage(err.message);
        }
    },
    
}; */

/* const storage = {
    privateCity: '',
    privateCountry: '',
    set city(name) {
        this.privateCity = name;
    },
    set country(name) {
        this.privateCountry = name;
    },
    saveItem() {
        localStorage.setItem('BD-weather-city', this.privateCity);
        localStorage.setItem('BD-weather-country', this.privateCountry);
    }
}; */

/* const UI = {
    loadSelectors(){
        const cityElm = document.querySelector('#city');
        const cityInfoElm = document.querySelector('#w-city');
        const iconElm = document.querySelector('#w-icon');
        const temperatureElm = document.querySelector('#w-temp');
        const pressureElm = document.querySelector('#w-pressure');
        const humidityElm = document.querySelector('#w-humidity');
        const feelElm = document.querySelector('#w-feel');
        const formElm = document.querySelector('#form');
        const countryElm = document.querySelector('#country');
        const messageElm = document.querySelector('#messageWrapper');

        return {
            cityElm,
            cityInfoElm,
            iconElm,
            temperatureElm,
            pressureElm,
            humidityElm,
            feelElm,
            formElm,
            countryElm,
            messageElm
        };
    },
    getInputValues() {
        const { cityElm, countryElm } = this.loadSelectors();
        const city = cityElm.value;
        const country = countryElm.value;
        return {
            city,
            country
        }
    },
    validateInput(city, country) {
        let error = false;
        if(city === '' || country === '') {
            error = true;
        }

        return error;
    },
    hideMessage() {
        const msgContentElm = document.querySelector('.err-msg');
        if(msgContentElm) {
            setTimeout(() => {
                msgContentElm.remove();
            }, 2000);
            
        }
    },
    showMessage(msg) {
        const { messageElm } = this.loadSelectors();
        const msgContentElm = document.querySelector('.err-msg');
        const elm = `<div class='alert alert-danger err-msg'>${msg}</div>`;
        if(!msgContentElm) {
            messageElm.insertAdjacentHTML('afterbegin', elm);
        }
        
        this.hideMessage();
    },
    getIconSrc(iconCode) {
        return `https://openweathermap.org/img/w/${iconCode}.png`; 
    },
    printWeather(data) {
        const { 
            cityInfoElm,
            temperatureElm,
            pressureElm,
            humidityElm,
            feelElm,
            iconElm
        } = this.loadSelectors();

        const { main, weather, name } = data;
        console.log(data);
        cityInfoElm.textContent = name;
        temperatureElm.textContent = `Temperature: ${main.temp}C`;
        humidityElm.textContent = `Humidity: ${main.pressure}kpa`;
        pressureElm.textContent = `pressure: ${main.pressure}kpa`;
        feelElm.textContent = weather[0].description;
        const src = this.getIconSrc(weather[0].icon);
        iconElm.setAttribute('src', src);
    },
    resetInput() {
        const { countryElm, cityElm } = this.loadSelectors();
        cityElm.value = '';
        countryElm.value = '';
    },
    init(){
        const { formElm } = this.loadSelectors();
        
        formElm.addEventListener("submit", async (e) => {
            e.preventDefault();

            //get the input value
            const { city, country } = this.getInputValues();

            //reset Input
            this.resetInput();

            //Validate input
            const error = this.validateInput(city, country);
            if(error) {
                //show error message in UI
                this.showMessage('Please provide valid Input');
                return;
            }

            //set city and country to UI
            /* this.city = city;
            this.country = country; */

/*             //setting data to weather data store
            weatherStore.city = city;
            weatherStore.country = country;

            //setting to localStorage
            storage.city = city;
            storage.country = country;
            storage.saveItem();

            //send request to API server
            const data = await weatherStore.fetchData();
            if(Number(data.cod) > 400) {
                this.showMessage(data.message);
            } else {
                this.printWeather(data);
            }
            
        }) */

 /*        document.addEventListener('DOMContentLoaded', async (e) => {
            //Load data from localStorage
            if(localStorage.getItem('BD-weather-city')) {
                //setting data to data store
                weatherStore.city = localStorage.getItem('BD-weather-city');
            }
            if(localStorage.getItem('BD-weather-country')) {
                //setting data to data store
                weatherStore.country = localStorage.getItem('BD-weather-country');
            }
            

            //send request to API server
            const data = await weatherStore.fetchData();

            //show data to UI
            this.printWeather(data);
        })
    }
    
}; */ 

/* UI.init(); */








const CurrencyStore = {

};

const store = {

};

const UI = {
    
};

let jsonValue;

fetch(`https://free.currconv.com/api/v7/currencies?apiKey&apiKey=e36bbd57844e9998eea7`)
.then(response => response.text())
.then(data => {
    jsonValue = data;
    //console.log(data)
});