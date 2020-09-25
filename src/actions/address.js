import axios from 'axios'

export const addAddress = (address) => ({type: "ADD_ADDRESS", address: address});

export const fetchAddresses = (userId) => {
    return dispatch => {
        dispatch({ type: 'LOADING_ADDRESSES'})
        axios.get(`http://localhost:3001/users/${userId}/addresses`,{job} ,{withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: "ADD_ADDRESSES", addresses: response.data});
          })
        .catch(error => console.log('api errors:', error));
    }
}
