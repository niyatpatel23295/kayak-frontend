import React from 'react';
import Autosuggest from 'react-autosuggest';
import * as API from "../api/API";


var city = [];
var CurrentId;


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    var ListToBeReturned;
    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    if (CurrentId == "location")
    {
        API.getCities()
            .then((res) => {
                if (res) {
                    city = res.data;
                } else if (res) {
                    console.log("city not initialized");
                }
            })
        ListToBeReturned = city.filter(city => regex.test(city.city_name));
    }
    else if (CurrentId == "flightFromLocation")
    {
        API.getAirports()
            .then((res) => {
                if (res) {
                    city = res.data;
                    console.log(JSON.stringify(res.data));
                } else if (res) {
                    console.log("city not initialized");
                }
            });

        ListToBeReturned = city.filter(city => regex.test(city.airport));
    }
    else if (CurrentId == "flightToLocation")
    {
        API.getAirports()
            .then((res) => {
                if (res) {
                    city = res.data;
                } else if (res) {
                    console.log("city not initialized");
                }
            })
        ListToBeReturned = city.filter(city => regex.test(city.airport));
    }
    else if (CurrentId == "carlocation")
    {
        API.getCities()
            .then((res) => {
                if (res) {
                    city = res.data;
                } else if (res) {
                    console.log("city not initialized");
                }
            })
        ListToBeReturned = city.filter(city => regex.test(city.city_name));
    }


    return ListToBeReturned;
}

function getSuggestionValue(suggestion) {

    var stringToReturn;
    if(CurrentId == "flightFromLocation" || CurrentId == "flightToLocation")
    {
        stringToReturn = suggestion.airport;
    }
    else {
        stringToReturn = suggestion.city_name;
    }

    return stringToReturn;
}

function renderSuggestion(suggestion) {
    return (
        <span>{
            CurrentId == "flightFromLocation" || CurrentId == "flightToLocation" ? (
                suggestion.airport
            ):(
                suggestion.city_name
            )
        }</span>
    );
}


class MyAutosuggest extends React.Component {

    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            city: [],
            CurrentId:''
        };
    }

    onChange = (_, { newValue }) => {
        const { id, onChange } = this.props;

        this.setState({
            value: newValue,
            CurrentId: id
        });
        CurrentId = id;
        //onChange(id, newValue);
    };


    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const {id, placeholder} = this.props;
        const {value, suggestions} = this.state;
        const inputProps = {
            placeholder,
            value,
            onChange: this.onChange
        };

        {
            console.log("CurrentId: " + this.state.CurrentId);
            if(CurrentId == "flightFromLocation" || CurrentId == "flightToLocation")
            {
                this.state.city.map((task, i) =>
                    console.log(task.airport)
                )
            }
            else {

                this.state.city.map((task, i) =>
                    console.log(task.city_name)
                )
            }
        }

        return (
            <Autosuggest
                id={id}
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default MyAutosuggest;
