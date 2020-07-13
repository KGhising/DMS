import React, {useEffect, useState, useCallback} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import WeatherItem from './WeatherItem';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/weather';
import * as authActions from '../../../store/actions/auth';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto',
        marginTop: '20px'
    },
    type: {
        marginTop: '20px'
    }
});

const Weather = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const weather = useSelector(({ weather }) => weather.weatherData);
    // const [places, setPlaces] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    // console.log(types);
    
    // const loadWeather = useCallback(async () => {
    //     setError(null);
    //     // setIsLoading(true);
    //     setIsRefreshing(true);
    //     try {
    //         await dispatch(actions.getWeather());
    //     } catch (error) {
    //         setError(true);
    //     }
    //     // setIsLoading(false);
    //     setIsRefreshing(false);
    // }, [dispatch, setIsLoading, setError]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     loadWeather().then(() => {
    //         setIsLoading(false);
    //     });
    // }, [dispatch, loadWeather]);

    useEffect(() => {
        // dispatch(authActions.authStart());
        // dispatch(authActions.setInitURL('/weather'));
        dispatch(actions.getWeather());
        
    },[dispatch]);

    // useEffect(() => {
    //     console.log("Weather",weather);
    //     const place = [];
    //     place.push(weather);
    //     place.push(weather);
    //     place.push(weather);
    //     place.push(weather);
    //     setPlaces(place);
    // },[weather]);
    if (error) {
        return <p>Error</p>
        // <View style={styles.centered}>
        //     <Text>An error occurred</Text>
        //     <Button title="Try Again" onPress={loadProducts} color={Colors.primary} />
        // </View>
    }

    if (isLoading) {
        return  <p>isLoading</p>
    }

    if ( weather.length === 0) {
        return <p>Weather length 0</p>
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} className={classes.type}>
                <Grid container spacing={2}>
                    {weather.map(place => {
                        return <Grid key={place.place} item lg={6} sm={6}>
                            <WeatherItem place={place.place} temp={place.temp} min={place.temp_min} 
                            max={place.temp_max} wind={place.wind_speed} humidity={place.humidity} 
                            description={place.main} image={place.icon}
                            // date={place.date}
                            />
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Weather;