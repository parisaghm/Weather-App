# weather-app
This is a weather application built with Vue 3, which allows users to search for real-time weather information by city. The app fetches data from the OpenWeatherMap API and displays it in an elegant and responsive UI, with dynamic backgrounds based on the weather conditions.

![Weather](https://github.com/user-attachments/assets/383cd880-8530-4a71-ac06-51dce5590edc)

# Features

- Search weather information by city name.
- Display current temperature, humidity, wind speed, and more.
- Shows min and max temperature for the day.
- Dynamic backgrounds based on weather conditions like clear, cloudy, rain, and snow.
- Displays additional weather details such as "Feels Like" temperature.
- Mobile-friendly and responsive design.

# Technologies Used

- Vue 3: The app is built with the latest version of Vue for creating reactive components.
- TailwindCSS: Used for styling the UI with minimal custom CSS.
- Axios: To make HTTP requests to the OpenWeatherMap API.
- OpenWeatherMap API: For fetching real-time weather data.


## Project setup

1. Clone the repository:

```
git clone https://github.com/your-username/vue-weather-app.git
cd vue-weather-app
```
2. Install dependencies:
   
```
npm install
```

3. Add your OpenWeatherMap API key:

The app uses the OpenWeatherMap API to fetch weather data. You'll need to get a free API key from OpenWeatherMap.
Once you have your API key, replace the placeholder apiKey in App.vue with your actual API key:

```
const apiKey = 'YOUR_API_KEY'; // Replace this with your OpenWeatherMap API key
```

4. Run the app:
```
npm run serve
```

The app will now be running on http://localhost:8080.

### Compiles and minifies for production
```
npm run build
```

# Project Structure

```
.
├── public                # Static assets
├── src
│   ├── assets            # App-specific assets like images and fonts
│   ├── components        # Vue components (SearchBox, WeatherDisplay, WeatherInfo)
│   ├── App.vue           # Main app component
│   ├── main.js           # Entry point for Vue app
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```
