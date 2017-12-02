import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import kayak from '../images/KAYAK.png';
import * as API from '../api/API';

class AddFlightComponent extends Component {
    state = {
        flight_name: '',
        to_airport: '',
        from_airport: '',
        departure: '',
        arrival: '',
        class: '',
        fair: '',
        flight_number: '',
        duration: ''
    }

    handleAddFlight = () => {
        API.addFlight(this.state)
            .then((status) => {
                if (status === 201) {
                    this.setState({

                        message: "flight added..!!",
                    });
                } else if (status === 401) {
                    this.setState({

                        message: "Error.. Try again..!!"
                    });
                }
            });
    };

    render() {

        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Administrator Console
                            <hr/>
                        </h1>
                    </div>
                    <div className="nav-side-menu col-md-2" style={{textAlign: 'Left'}}>
                        <a className="navbar-brand" href="/"><img src={kayak} width={110} style={{paddingTop: 15}}/></a>
                        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"/>

                        <div className="menu-list">

                            <ul id="menu-content" className="menu-content collapse out">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-dashboard fa-lg"/> Dashboard
                                    </a>
                                </li>

                                <li data-toggle="collapse" data-target="#service" className="collapsed">
                                    <a href="#"><i className="fa fa-globe fa-lg"/> Listings <span
                                        className="arrow"/></a>
                                </li>
                                <ul className="sub-menu collapse" id="service">
                                    <li data-toggle="collapse" data-target="#service3" className="collapsed">Add<span
                                        className="arrow"/>
                                    </li>
                                    <ul className="sub-menu collapse" id="service3">
                                        <li style={{paddingLeft: 20}}>Hotel</li>
                                        <li style={{paddingLeft: 20}}>Flight</li>
                                        <li style={{paddingLeft: 20}}>Car</li>
                                    </ul>
                                    <li>Search</li>
                                    <li>Edit</li>
                                </ul>
                                <li data-toggle="collapse" data-target="#service1" className="collapsed">
                                    <a href="#"><i className="fa fa-users fa-lg"/> User Account<span className="arrow"/></a>
                                </li>
                                <ul className="sub-menu collapse" id="service1">
                                    <li>View</li>
                                    <li>Modify</li>
                                </ul>
                                <li data-toggle="collapse" data-target="#service2" className="collapsed">
                                    <a href="#"><i className="fa fa-users fa-lg"/> Bills<span className="arrow"/></a>
                                </li>
                                <ul className="sub-menu collapse" id="service2">
                                    <li>Search By Date</li>
                                    <li>Search By Month</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ">
                            <form className="form-horizontal">
                                <fieldset>
                                    <h2>Add Flights</h2>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Flight Name </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input id="Flight Name" name="flightName" type="text"
                                                       placeholder="Flight Name" value={this.state.flight_name}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               flight_name: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"> To airport </label>
                                        <div className="col-md-2  col-xs-4">
                                            <input type="text"
                                                   placeholder="To airport" value={this.state.to_airport}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           to_airport: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"> From airport </label>
                                        <div className="col-md-2  col-xs-4">
                                            <input type="text"
                                                   placeholder="From airport" value={this.state.from_airport}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           from_airport: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Departure </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="departure "
                                                       value={this.state.departure}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               departure: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Arrival </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="arrival "
                                                       value={this.state.arrival}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               arrival: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">class </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="Economy / Business "
                                                       value={this.state.class}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               class: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Fair </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="fair "
                                                       value={this.state.fair}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               fair: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Flight_number </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="flight_number "
                                                       value={this.state.flight_number}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               flight_number: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Duration </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="duration "
                                                       value={this.state.duration}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               duration: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label"/>
                                        <div className="col-md-4">
                                            <a href="#" className="btn btn-success" onClick={this.handleAddFlight}><span
                                                className="glyphicon glyphicon-thumbs-up"/> Submit</a>
                                            <a href="#" className="btn btn-danger" value=""><span
                                                className="glyphicon glyphicon-remove-sign"/> Clear</a>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddFlightComponent);