import axios from 'axios';
const API_KEY = '38b845f47239c9c11962113f49b078a0';

const ROOT_URL= `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}