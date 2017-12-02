import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import kayak from '../images/KAYAK.png';
import * as API from '../api/API';

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
        searchHotel_key:'',
        HotelDetails:''
    }

    constructor(props) {
        super(props);
        this.makeAddress = this.makeAddress.bind(this);
    }

    componentDidMount() {
        /*   API.getCities()
               .then((res) => {
                   if (res) {
                       this.setState({
                           city: res.data
                       });
                   } else if (res) {
                        console.log(res);
                   }
               })*/
    }

    makeAddress() {
        this.setState({
            hotel_address: this.state.hotel_area + " " + this.state.hotel_street + " " + this.state.city
        })
    }

    handleUpdateHotel = () => {
        API.addHotels(this.state)
            .then((status) => {
                if (status === 201) {
                    this.setState({

                        message: "hotel added..!!",
                    });
                } else if (status === 401) {
                    this.setState({

                        message: "Error.. Try again..!!"
                    });
                }
            });
    };

    handleGetHotelDetails = () => {
        API.GetHotelDetails(this.state)
            .then((res) => {
                if (res) {
                    this.setState({
                        HotelDetails: res.data
                    });
                } else if (res) {
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
                                            <a href="#" className="btn btn-success" onClick={this.handleGetHotelDetails}><span
                                                className="glyphicon glyphicon-thumbs-up"/> Search</a>
                                        </div>
                                    </div>
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
                                                       placeholder={this.state.HotelDetails.hotel_name} value={this.state.hotel_name}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               hotel_name: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"> Description </label>
                                        <div className="col-md-2  col-xs-4">
                                            <input id="description" name="description" type="text"
                                                   placeholder={this.state.HotelDetails.description} value={this.state.description}
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
                                        <div className="col-md-2  col-xs-4">
                                            <input id="Address" name="Address" type="text" placeholder={this.state.HotelDetails.city}
                                                   value={this.state.city}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           city: event.target.value
                                                       });
                                                   }}
                                                   className="form-control input-md "/>
                                        </div>
                                        <div className="col-md-2 col-xs-4">
                                            <input id="Address" name="Address" type="text" placeholder="Area"
                                                   value={this.state.hotel_area}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           hotel_area: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"/>
                                        <div className="col-md-2  col-xs-4">
                                            <input id="Permanent Address" name="Permanent Address" type="text"
                                                   placeholder={this.state.HotelDetails.hotel_address} value={this.state.hotel_street}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           hotel_street: event.target.value
                                                       });
                                                   }} className="form-control input-md "/>
                                        </div>
                                        <div className="col-md-2 col-xs-4">
                                            <input id="Address" name="Address" type="text" placeholder={this.state.HotelDetails.zip_code}
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
                                                       placeholder={this.state.HotelDetails.email} value={this.state.hotel_email}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               hotel_email: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Room Type </label>
                                        <div className="col-md-2">
                                            <label className="col-form-label">Delux </label>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="input-group">
                                                <input id="Room number" name="Room number" type="text"
                                                       placeholder="Number Of Rooms"
                                                       value={this.state.deluxNo}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               deluxNo: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"/>
                                        <div className="col-md-2">
                                            <label className="col-form-label">Premium </label>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="input-group">
                                                <input id="Room number" name="Room number" type="text"
                                                       placeholder="Number Of Rooms"
                                                       value={this.state.premiumNo}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               premiumNo: event.target.value
                                                           });
                                                       }} className="form-control input-md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"/>
                                        <div className="col-md-2">
                                            <label className="col-form-label">Standard </label>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="input-group">
                                                <input id="Room number" name="Room number" type="text"
                                                       placeholder="Number Of Rooms"
                                                       value={this.state.standardNo}
                                                       onChange={(event) => {
                                                           this.setState({
                                                               standardNo: event.target.value
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

                                    {/*
                                    <div className="dropdown">
                                        <button className="dropbtn">Dropdown</button>
                                        <div className="dropdown-content">
                                            {this.state.city.map((task, i) =>
                                                <div className="RecentItem" key={i}>
                                                    <a href="#" value ={task.city_name} onClick = {(event) => {
                                                        this.setState({
                                                            selected_city: task.city_name
                                                        });
                                                    }}>{task.city_name}</a>
                                                </div>
                                            )}
                                            {console.log("this.state.selected_city"+this.state.selected_city)}
                                            </div>
                                    </div>


*/}

                                    <div className="form-group">
                                        <label className="col-md-4 control-label"/>
                                        <div className="col-md-4">
                                            <a href="#" className="btn btn-success" onClick={this.handleUpdateHotel}><span
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

export default withRouter(UpdateHotelComponent);