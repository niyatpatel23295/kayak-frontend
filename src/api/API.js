//const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://10.0.0.165:3001';
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

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


export const get_car_details = (payload) =>
    fetch(`${api}/get_car_details`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updateCars = (payload) =>
    fetch(`${api}/updateCars`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
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
    fetch(`${api}/updateFlight`, {
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

export const GetHotelDetails = (payload) =>
    fetch(`${api}/hotels/get_hotel_details`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updateHotels = (payload) =>
    fetch(`${api}/hotels/update_hotel`, {
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



