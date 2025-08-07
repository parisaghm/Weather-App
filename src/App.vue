<template>
  <div :class="['transition-all duration-1000 ease-in-out min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat flex-row', weatherBackground]">
    <div class="wrapper">
    <div class="flex bg-black bg-opacity-40 rounded p-9 text-white w-full h-[512px] justify-between mx-auto">
      <div class="weather-info text-center max-w-[47%] flex">
        <WeatherInfo v-if="weatherData" :weather="weatherData" />
      </div>
      <div class="flex flex-col max-w-[47%]">
        <SearchBox @search="fetchWeather" />
        <WeatherDisplay v-if="weatherData" :weather="weatherData" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBox from './SearchBox.vue';
import WeatherDisplay from './WeatherDisplay.vue';
import WeatherInfo from './WeatherInfo.vue';

export default {
  components: {
    SearchBox,
    WeatherDisplay,
    WeatherInfo
  },
  data() {
    return {
      weatherData: null,
      weatherBackground: 'default-weather'
    };
  },
  methods: {
    async fetchWeather(query) {
      const apiKey = 'e5e65342db64c6532932257a3a8bb137'; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
        this.updateBackground(response.data.weather[0].main);
      } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('City not found. Please try again.');
      }
    },
    updateBackground(weatherCondition) {
      const condition = weatherCondition.toLowerCase();
      const backgroundMap = {
        rain: 'rainy-background',
        snow: 'snowy-background',
        clear: 'clear-background',
        clouds: 'cloudy-background'
      };

      this.weatherBackground = backgroundMap[condition] || 'default-weather';
    }
  }
};
</script>


<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

* {
  font-family: 'ABeeZee', sans-serif;
}

.wrapper{
  width: 100%;
  max-width: 960px;
  margin: 125px auto 92px;
}

.weather-info{
  margin-top: -2rem;
}

.rainy-background {
  background-image: url('../public/img/rainy-background.jpg');
} 

 .snowy-background {
  background-image: url('../public/img/snowy-background.jpg');
}

.clear-background {
  background-image: url('../public/img/clear-background.jpg');
}

.cloudy-background {
  background-image: url('../public/img/cloudy-background.jpg');
} 

 .default-weather {
  background-image: url('../public/img/default-background.jpg');
} 
</style>
