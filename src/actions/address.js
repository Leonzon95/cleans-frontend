import axios from 'axios'

export const addAddress = (address) => ({type: "ADD_ADDRESS", address: address});

export const fetchAddresses = (userId) => {
    return dispatch => {
        dispatch({ type: 'LOADING_ADDRESSES'})
        axios.get(`http://localhost:3001/users/${userId}/addresses` ,{withCredentials: true})
        .then(response => {
            dispatch({type: "ADD_ADDRESSES", addresses: response.data.addresses});
          })
        .catch(error => console.log('api errors:', error));
    }
}
