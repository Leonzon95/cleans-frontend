import axios from 'axios';

export const sendLogIn = (user) => ( { type: "LOGIN", user: user } );
export const sendLogOut = () => ( { type: "LOGOUT" } );
export const updateUsersRating = (user) => ({type: "UPDATE_CLEANERS_RATING", user: user});

export const updateHourlyRate = (userId, hourlyRate) => {
    return dispatch => {
        axios.patch(`http://localhost:3001/users/${userId}`,{hourly_rate: hourlyRate} , {withCredentials: true})
        .then(response => {
            dispatch({type: "UPDATE_USER", user: response.data.user });
          })
        .catch(error => console.log('api errors:', error));
    }
}