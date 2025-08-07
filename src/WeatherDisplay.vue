<template>
  <div v-if="weather" class="mt-4">
    
    <div class="flex items-center">
      <h2 class="text-2rem font-normal md:text-base">Weather in {{ weather.name }}, {{ weather.sys.country }}</h2>
      <img class="ml-5" src="../public/img/location-logo.png">
    </div>
    <div class="flex mt-6 mb-6  justify-between text-center">
      <div >
        <span class="shadow-custom rounded-lg p-4 border-0 text-white text-xl bg-bg-custom-teal">{{ weather.main.temp_min }} °C</span>
      <p class="mt-6">Min Temperature</p> 
      </div>
      <div>
      <span class="shadow-custom rounded-lg p-4 border-0 text-white text-xl bg-bg-custom-orange"> {{ weather.main.temp_max }} °C</span>
      <p class="mt-6">Max Temperature</p>
      </div>
    </div>

    <div class="flex mt-6 mb-6 justify-between text-center"> 
      <div>
        <p class="mt-3 text-2rem md:text-base">{{ weather.main.feels_like }} °C</p>
        <p class="mt-2 mb-2">Feels Like:</p>
        <span class="material-icons">cloud</span>
      </div>
      <div>
        <p class="mt-3 text-2rem md:text-base">{{ weather.main.humidity }}%</p>
        <p class="mt-2 mb-2">Humidity:</p>
        <span class="material-icons">water_drop</span>
  
      </div>
      <div>
        <p class="mt-3 text-2rem md:text-base"> {{ weather.wind.speed }} m/s</p>
        <p class="mt-2 mb-2">Wind Speed:</p>
        <span class="material-icons">air</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        weather: Object
    }
}
</script>
