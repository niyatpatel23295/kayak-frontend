import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import kayak from '../images/KAYAK.png';
import * as API from '../api/API';

import MyAutosuggest from "./MyAutoSuggest";

class UpdateHotelComponent extends Component {
    state = {
        hotel_name: '',
        hotel_address: '',
        zip_code: '',
        hotel_stars: '',
        hotel_ratings: '',
        description: '',
        city: [],
        hotel_image: '',
        standardNo: '',
        deluxNo: '',
        premiumNo: '',
        hotel_phoneNo: '',
        hotel_email: '',
        hotel_area: '',
        hotel_street: '',
        selected_city: '',
        searchHotel_key: '',
        HotelDetails: '',
        message: ''
    }

    constructor(props) {
        super(props);
        this.handleUpdateHotel = this.handleUpdateHotel.bind(this);
    }



    handleUpdateHotel = () => {
        API.updateHotels(this.state)
            .then((res) => {
                if (res) {
                    console.log("response "+res);
                    this.setState({
                        message: res.data
                    });
                } else {
                    this.setState({
                        message: "Error.. Try again..!!"
                    });
                }
            });
    };

    handleGetHotelDetails = () => {
        console.log("this.state.searchHotel_key", this.state.searchHotel_key);
        this.setState({
            message: ''
        })
        API.GetHotelDetails(this.state)
            .then((res) => {
                if (res.data) {
                    console.log(res.data[0].hid);
                    this.setState({
                        hotel_name: res.data[0].hotel_name,
                        hotel_address: res.data[0].hotel_address,
                        zip_code: res.data[0].zip_code,
                        hotel_ratings: res.data[0].hotel_ratings,
                        description: res.data[0].description,
                        hotel_area: 'San Pedro Market',
                        city: 'San Jose',
                        hotel_street: '101',
                        hotel_phoneNo: '9996865412',
                        hotel_email: 'hotel1@hotel.com',
                    });
                } else if (res.error_message) {
                    this.setState({
                        message: res.error_message
                    })
                    console.log(res);
                }
            })
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
                                    <h2>Update Hotels</h2>
                                    {console.log(this.state.city)}


                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Enter Hotel Name to search : </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-user">
                                                    </i>
                                                </div>
                                                <input id="Hotel Name" name="hotelName" type="text"
                                                       placeholder="Hotel Name" value={this.state.searchHotel_key}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               searchHotel_key: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="#" className="btn btn-success"
                                               onClick={this.handleGetHotelDetails}><span
                                                className="glyphicon glyphicon-thumbs-up"/> Search</a>
                                        </div>
                                    </div>
                                    {console.log("this.state.searchHotel_key 2 ", this.state.searchHotel_key)}
                                    <hr/>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Hotel Name </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-user">
                                                    </i>
                                                </div>
                                                <input id="Hotel Name" name="hotelName" type="text"
                                                       placeholder={this.state.HotelDetails.hotel_name}
                                                       value={this.state.hotel_name}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               hotel_name: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                            {console.log("this.state.HotelDetails.hotel_name" + this.state.HotelDetails.hotel_name)}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"> Description </label>
                                        <div className="col-md-2  col-xs-4">
                                            <input id="description" name="description" type="text"
                                                   placeholder={this.state.HotelDetails.description}
                                                   value={this.state.description}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           description: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Upload photo</label>
                                        <div className="col-md-4">
                                            <input id="Upload photo" name="Upload photo" className="input-file"
                                                   value={this.state.hotel_image}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           hotel_image: event.target.value
                                                       });
                                                   }}
                                                   type="file"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label col-xs-12">Address</label>

                                        <div className="col-md-2 col-xs-4">
                                            <input id="Address" name="Address" type="text" placeholder="Area"
                                                   value={this.state.hotel_address}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           hotel_address: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                        <div className="col-md-2  col-xs-4">
                                            <MyAutosuggest
                                                id="location"
                                                placeholder="City"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"/>
                                        <div className="col-md-2 col-xs-4">
                                            <input id="Address" name="Address" type="text" placeholder="ZipCode"
                                                   value={this.state.zip_code}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           zip_code: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Phone number </label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-phone"/>
                                                </div>
                                                <input id="Phone number " name="Phone number " type="text"
                                                       placeholder={this.state.HotelDetails.phoneNo}
                                                       value={this.state.hotel_phoneNo}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               hotel_phoneNo: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Email Address</label>
                                        <div className="col-md-4">
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-envelope-o"/>
                                                </div>
                                                <input id="Email Address" name="Email Address" type="text"
                                                       placeholder={this.state.HotelDetails.email}
                                                       value={this.state.hotel_email}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               hotel_email: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Hotel Stars</label>
                                        <div className="col-md-4" style={{textAlign: "left"}}>
                                            <Rater total={5} rating={this.state.HotelDetails.rating}
                                                   value={this.state.hotel_stars}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           hotel_stars: event.target.value
                                                       });
                                                   }}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label"/>
                                        <div className="col-md-4">
                                            <a href="#" className="btn btn-success"
                                               onClick={this.handleUpdateHotel}><span
                                                className="glyphicon glyphicon-thumbs-up"/> Submit</a>
                                            <a href="#" className="btn btn-danger" value=""><span
                                                className="glyphicon glyphicon-remove-sign"/> Clear</a>
                                        </div>
                                    </div>
                                    <h1 style={{color: "red"}}>{this.state.message}</h1>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UpdateHotelComponent);
