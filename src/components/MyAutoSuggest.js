import React from 'react';
import Autosuggest from 'react-autosuggest';
import * as API from "../api/API";


var city = [];


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    API.getCities()
        .then((res) => {
            if (res) {
                city = res.data;
            } else if (res) {
                console.log("city not initialized");
            }
        })

    return city.filter(city => regex.test(city.city_name));
}

function getSuggestionValue(suggestion) {
    return suggestion.city_name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.city_name}</span>
    );
}


class MyAutosuggest extends React.Component {

    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            city: []
        };
    }
    


    onChange = (_, { newValue }) => {
        const { id, onChange } = this.props;

        this.setState({
            value: newValue
        });

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
            this.state.city.map((task, i) =>
                console.log(task.city_name)
            )
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
