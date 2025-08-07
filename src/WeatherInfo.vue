<template>
  <div v-if="weather">
    <p class="text-4rem my-2.5 mb-2 md:text-2rem">{{ currentDay }}</p>  
    <p class="text-1.5xl mb-4">{{ currentDate }}</p>
    <span class="text-150 material-icons">{{ weatherIcon }}</span>
    <p class="text-2.5xl mb-2">{{ weather.main.temp }} °C</p>
    <p class="text-2rem">{{ weatherDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentDay() {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return daysOfWeek[new Date().getDay()];
    },
    currentDate() {
      return new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    weatherIcon() {
      const weatherCondition = this.weather.weather[0].main.toLowerCase();
      const iconMap = {
        clear: 'sunny',
        clouds: 'cloud',
        rain: 'water_drop',
        snow: 'cloudy_snowing',
        thunderstorm: 'thunderstorm'
      };
      return iconMap[weatherCondition] || 'default';
    },
    weatherDescription() {
      const weatherCondition = this.weather.weather[0].main.toLowerCase();
      const descriptionMap = {
        clear: 'Sunny',
        clouds: 'Cloudy',
        rain: 'Rainy',
        snow: 'Snowy',
        thunderstorm: 'Thunderstorm'
      };
      return descriptionMap[weatherCondition] || 'Unknown weather condition';
    }
  }
};
</script>

 