# Weather Forecast Dashboard
This is a weather forecast web application built using HTML, CSS, JavaScript, and React with Vite. It features a responsive UI, location search, weather details, clear button to reset screen, background images that dynamically change according to the weather conditions, and animations.

## Table of Contents
+ [Features](#features)
+ [Technologies Used](#technologies-used)
+ [Getting Started](#getting-started)
+ [Prerequisites](#prerequisites)
+ [Installation](#installation)
+ [Key Components](#key-components)
+ [Approach](#approach)
+ [Contributing](#contributing)

## Features
+ Responsive UI - supports both mobile and desktop view
+ Location search option
+ Displays 
    + City, Country, current weather icon
    + Current Temperature
    + Minimum temperature
    + Maximum temperature
    + Humidity
    + Wind speed, direction
    + Description of the weather (e.g. Clear sky, Clouds, etc)
+ 5-days forecast for the City 
    + Date 
    + Average temperature
    + Description of weather
    + Appropriate weather icon
+ Option to view in either Celsius or Fahrenheit
+ Error handling
+ Clear button to reset screen 
+ Changes background image according to the weather conditions

## Technologies Used
+ HTML
+ CSS
+ JavaScript
+ React
+ Vite

## Getting Started

### Prerequisites
+ Node.js
+ npm

### Installation

1. Clone the repository:

###
    git clone <url from above <>Code Clone>

2. Navigate to the project directory:
###
    cd prachi-raghav-wasserstoff-FullstackInternTask03

3. Install dependencies:
###
    npm install

4. Running the Application
+ Start the development server:
###
    npm run dev

5. Open your browser and go to (http://localhost:5173) to see the application.

### Live Demo
https://weather-forecast-prachis-projects-c6533694.vercel.app/

## Approach
This application follows a component-based architecture using React. It utilizes OpenWeatherMap API to fetch weather data from all over the world, dynamically updates the UI based on the fetched weather data, and handles user interactions such as searching for different locations, resetting the search using clear button.

## Key Components
+ App.jsx: The main component managing state and rendering child components.
+ WeatherDetails.jsx: provides current weather information.
+ WeatherForm.jsx: features form for handling search.
+ WeatherForecast.jsx: Provides 5-day forecast for given location.

### Styling:
The application uses CSS for styling with specific classes.
Background images are dynamically updated based on the current weather conditions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
