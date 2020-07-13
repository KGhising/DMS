import axios from 'axios';
import * as actionTypes from './actionTypes';

const getWeatherByPlace = async (p) => {
    const api = '7d075324e76eb73bf9c70e7381fa4bc6';
    const place = p;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api}`;
    // console.log(url);
    try {
        const response = await axios.get(url);
        // console.log(response.statusText);
        if (response.statusText === "OK") {
            // console.log(response);
            const res = {
                place: place,
                main: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                temp: (response.data.main.temp - 273).toFixed(2),
                temp_min: (response.data.main.temp_min - 273).toFixed(2),
                temp_max: (response.data.main.temp_max - 273).toFixed(2),
                humidity: response.data.main.humidity,
                wind_speed: response.data.wind.speed
            }
            // console.log(res);
            return res;
        } else {
            throw new Error("Error");
        }
    } catch (e) {
        console.log(e.message);
    }
}

const getWeatherByLatLon = async (lat, lon) => {
    const api = '7d075324e76eb73bf9c70e7381fa4bc6';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
    console.log(url);
    try {
        const response = await axios.get(url);
        // console.log(response.statusText);
        if (response.statusText === "OK") {
            // console.log(response);
            const res = {
                lat: lat,
                lon: lon,
                main: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                temp: (response.data.main.temp - 273).toFixed(2),
                temp_min: (response.data.main.temp_min - 273).toFixed(2),
                temp_max: (response.data.main.temp_max - 273).toFixed(2),
                humidity: response.data.main.humidity,
                wind_speed: response.data.wind.speed
            }
            // console.log(res);
            return res;
        } else {
            throw new Error("Error");
        }
    } catch (e) {
        console.log(e.message);
    }
}

export const getWeather = () => {
    return async (dispatch, getState) => {
        const placess = getState().dashboard.places.data;
        const places = ["Dharan", "Biratnagar"];
        // console.log(places);
        const weathers = [];
        dispatch(getWeatherStart());
        // const res = (getWeatherByLatLon(26.81, 87.28));
        // weathers = await Promise.map(places, async (place) => {
        //     return await getWeatherByPlace(place); 
        // }, {concurrency: 2});
        // let weather = await getWeatherByPlace("Dharan"); 
        // weathers.push(weather);
        // weathers = places.map(async place => {
        //     // console.log(place);
        //     return  await getWeatherByPlace(place);

        // });
        // Promise.all([
        //     fetch("url1"),
        //     fetch("url2"),
        //     fetch("url3"),
        //   ]).then(([res1, res2, res3]) => {
        //     this.setState({status: "fetched"})
        //   })
        // weathers = await Promise.all(places.map(async (place) => {
        //     let weather = await getWeatherByPlace(place)
        //     console.log("Weather",weather);
        //     weathers.push(weather);
        // }));
        // for (let i in arr){
        //     await callAsynchronousOperation(i);
        //     resultingArr.push(i + 1)
        //   }
        // const unresolvedPromises = places.map(place => getWeatherByPlace(place));
        // weathers = await Promise.all(unresolvedPromises);
        // for (let place in places) {
        //     let weather = await getWeatherByPlace(place);
        //     weathers.push(weather);
        // }
        console.log(weathers);
        dispatch(setWeather(weathers));
        console.log("Done");
    }
    // console.log(res);
}

export const getWeatherStart = () => {
    return {
        type: actionTypes.GET_WEATHER_DATA_START
    }
}

export const setWeather = (data) => {
    return {
        type: actionTypes.SET_WEATHER_DATA,
        weatherData: data
    }
}
// export const sendResetPassword = () => {
//     return {
//         type: actionTypes.RESET_PASSWORD
//     }
// }
