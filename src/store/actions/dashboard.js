// import axios from 'axios';

import { GET_CARDS, CARD_ERROR } from './actionTypes';
import * as axios from '../../response/falseFetch';
import * as actionTypes from './actionTypes';
export const getCurrentCards = () => async dispatch => {
    try {
        // const res = await axios.get('api/dashboard');
        const res = {
            data: {
                cards: {
                    totalDrones: 4,
                    flyingDrones: 3,
                    totalDeliveries: 5,
                    totalHealthPosts: 10,
                    newRequest: 5
                },
                graphs: {
                    cdc: [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 15 }],
                    rhps: [
                        [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 15 }],
                        [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 15 }],
                        [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 15 }]
                    ]
                }

            }
        }
        dispatch({
            type: GET_CARDS,
            data: res.data
        })

    } catch (error) {
        dispatch({
            type: CARD_ERROR,
            // error: error.response.statusText, 
            // status: error.response.status 
            error: "data not found"
        })
    }
}

export const getPlaces = () => {
    return dispatch => {
        const url = './places.js';
        axios.get(url).then(response => {
            dispatch(setPlaces(response.placesResponse));
        })
    }
}

export const setPlaces = (places) => {
    return {
        type: actionTypes.SET_PLACES,
        places: places
    }
}