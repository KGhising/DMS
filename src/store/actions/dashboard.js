// import axios from 'axios';

import { GET_CARDS, CARD_ERROR } from './actionTypes';

export const getCurrentCards = () => async dispatch => {
    try {
        // const res = await axios.get('api/dashboard');
        const res = {
            data: {
                cards: [
                    {
                      cardColor: 'primary',
                      icon: 'airplane',
                      title: '09',
                      subTitle: 'Drones'
                    }, {
                      cardColor: 'secondary',   
                      icon: 'flight-takeoff',
                      title: '457',
                      subTitle: 'Flying drone'
                    }, {
                      cardColor: 'info',
                      icon: 'assignment-check',
                      title: '247',
                      subTitle: 'Delivery made'
                    }, {
                      cardColor: 'warning',
                      icon: 'hospital-alt',
                      title: '09',
                      subTitle: 'Health post'
                    },
                  ],
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
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: CARD_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}