const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://10.0.0.106:3001';
//const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const doSignUp = (payload) =>
    fetch(`${api}/Signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const addFlight = (payload) =>
    fetch(`${api}/addFlight`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const addCars = (payload) =>
    fetch(`${api}/addCars`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const GetHotelDetails = (payload) =>
    fetch(`${api}/hotels/GetHotelDetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const SubmitPaymentDetails = (payload) =>
    fetch(`${api}/SubmitPaymentDetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const logout = () =>
    fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
            ...headers
        },
        credentials:'include'
    }).then(res => {
        return res.status;
        res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const addHotels = (payload) =>
fetch(`${api}/hotels/add_hotel`, {
       method: 'POST',
       headers: {
           ...headers,
       'Content-Type': 'application/json'
   },
   credentials:'include',
   body: JSON.stringify(payload)
}).then(res => {
   console.log(res);
return res.status;
})
.catch(error => {
   console.log("This is error");
return error;
});


export const getCities = () =>
    fetch(`${api}/getCities`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
        });

export const GetFlightDetails = (payload) =>
    fetch(`${api}/flight/GetFlightDetails`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const updateFlight = (payload) =>
    fetch(`${api}/flight/updateFlight`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getAirports = () =>
    fetch(`${api}/getAirports`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
        });

export const doHotelSearch = (payload) =>
    fetch(`${api}/hotels/search_hotels`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log("hotels/search_hotels: "+res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getHotelSearchResults = () =>
    fetch(`${api}/hotels/search_hotels`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
        });

//to get details of hotel being booked
export const postSelectedHotelToBook = (payload) =>
    fetch(`${api}/hotels/get_selected_hotel`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log("hotels/search_hotels: "+res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getSelectedHotelToBook = () =>
    fetch(`${api}/hotels/get_selected_hotel`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
        });


export const doFlightSearch = (payload) =>
    fetch(`${api}/flights/search_flights`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log("hotels/search_hotels: "+res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getFlightSearchResults = () =>
    fetch(`${api}/flights/search_flights`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error"+error);
            return error;
        });
