import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import kayak from '../images/KAYAK.png';
import * as API from '../api/API';
import MyAutosuggest from "./MyAutoSuggest";

class UpdateCarComponent extends Component {
    state = {
        car_model: '',
        no_passangers: '',
        no_largebags: '',
        no_door: '',
        car_class: '',
        price: '',
        cid: '',
        pickup_address: '',
        searchCar_key: ''
    }

    constructor(props) {
        super(props);
        this.handleSearchCars = this.handleSearchCars.bind(this);
    }

    handleSearchCars() {
        console.log("SearchCar: " + document.getElementsByClassName("react-autosuggest__input")[0].getAttribute("value"));
        var valueOfCity = document.getElementsByClassName("react-autosuggest__input")[0].getAttribute("value");
        this.setState({
            city: valueOfCity
        })
    }

    handleGetCarDetails = () => {
        //    this.handleSearchCars();
        console.log(this.state.searchCar_key);

        API.get_car_details(this.state)
            .then((res) => {
                if (res.data) {
                    console.log(res);
                    console.log("res.data[0].car_model"+res.data[0].car_model)
                    this.setState ({
                        car_model: res.data[0].car_model,
                        no_passangers: res.data[0].no_passangers,
                        no_largebags: res.data[0].no_largebags,
                        no_door: res.data[0].no_door,
                        car_class: res.data[0].car_class,
                        price: res.data[0].price,
                        pickup_address: res.data[0].pickup_address,
                        cid: res.data[0].cid

                    });
                } else if (res) {
                    console.log("Error");
                }
            })
    };

    handleUpdateCar = () => {
        this.handleSearchCars();
        API.updateCars(this.state)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        message: "Car updated..!!",
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
                                    <h2>Update Car</h2>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Enter Car ID to search : </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input id="Hotel Name" name="hotelName" type="text"
                                                       placeholder="Car Model" value={this.state.searchCar_key}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               searchCar_key: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="btn btn-success"
                                               onClick={this.handleGetCarDetails}><span
                                                className="glyphicon glyphicon-thumbs-up"/> Search</a>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Car Model </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="Car Model" value={this.state.car_model}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               car_model: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"> No. of passangers </label>
                                        <div className="col-md-2  col-xs-4">
                                            <input type="text"
                                                   placeholder="No. of passangers" value={this.state.no_passangers}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           no_passangers: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"> No. of Largebags </label>
                                        <div className="col-md-2  col-xs-4">
                                            <input type="text"
                                                   placeholder="No. of Largebags" value={this.state.no_largebags}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           no_largebags: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">No. of Doors</label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="No of doors "
                                                       value={this.state.no_door}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               no_door: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Class </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="class "
                                                       value={this.state.car_class}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               car_class: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Price </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="price"
                                                       value={this.state.price}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               price: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Pickup address </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <input type="text"
                                                       placeholder="Pickup address"
                                                       value={this.state.pickup_address}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               pickup_address: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">City </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <div className="col-md-2  col-xs-4">
                                                    <MyAutosuggest
                                                        id="location"
                                                        placeholder="City"
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label"/>
                                        <div className="col-md-4">
                                            <a href="#" className="btn btn-success" onClick={this.handleUpdateCar}><span
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

export default withRouter(UpdateCarComponent);