import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import kayak from '../images/KAYAK.png';
import AddHotelComponent from './AddHotelComponent';
import UpdateHotelComponent from './UpdateHotelComponent';
import AddFlightComponent from './AddFlightComponent';
import AddCarComponent from './AddCarComponent';

class AdminPage extends Component {
    render() {
        return (
            <div>
                <Route exact path="/AdminPage" render={() => (
                    <div className='row'>
                        <div className='col-md-12'>

                            <h1>Administrator Console
                                <hr/>
                            </h1>
                        </div>
                        <div className="nav-side-menu col-md-2" style={{textAlign: 'Left'}}>
                            <a className="navbar-brand" href="/"><img src={kayak} width={110} style={{paddingTop: 15}}/></a>
                            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse"
                               data-target="#menu-content"/>

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
                                        <li data-toggle="collapse" data-target="#service3" className="collapsed">
                                            Add<span className="arrow"/>
                                        </li>
                                        <ul className="sub-menu collapse" id="service3">
                                            <li style={{paddingLeft: 20}}><a href="/addHotels">Hotel</a></li>
                                            <li style={{paddingLeft: 20}}><a href="/addFlights">Flight</a></li>
                                            <li style={{paddingLeft: 20}}><a href="/addCars">Car</a></li>
                                        </ul>
                                        <li>Search</li>
                                        <li data-toggle="collapse" data-target="#service4" className="collapsed">
                                            Update<span className="arrow"/>
                                        </li>
                                        <ul className="sub-menu collapse" id="service4">
                                            <li style={{paddingLeft: 20}}><a href="/updateHotels">Hotel</a></li>
                                            <li style={{paddingLeft: 20}}><a href="/updateFlights">Flight</a></li>
                                            <li style={{paddingLeft: 20}}>Car</li>
                                        </ul>
                                    </ul>
                                    <li data-toggle="collapse" data-target="#service1" className="collapsed">
                                        <a href="#"><i className="fa fa-users fa-lg"/> User Account<span
                                            className="arrow"/></a>
                                    </li>
                                    <ul className="sub-menu collapse" id="service1">
                                        <li>View</li>
                                        <li>Modify</li>
                                    </ul>
                                    <li data-toggle="collapse" data-target="#service2" className="collapsed">
                                        <a href="#"><i className="fa fa-users fa-lg"/> Bills<span
                                            className="arrow"/></a>
                                    </li>
                                    <ul className="sub-menu collapse" id="service2">
                                        <li>Search By Date</li>
                                        <li>Search By Month</li>
                                    </ul>


                                </ul>
                            </div>
                        </div>
                    </div>
                )}/>
                <Route exact path="/addHotels" render={() => (
                    <AddHotelComponent/>
                )}/>
                <Route exact path="/updateHotels" render={() => (
                    <UpdateHotelComponent/>
                )}/>
                <Route exact path="/addFlights" render={() => (
                    <AddFlightComponent/>
                )}/>
                <Route exact path="/addCars" render={() => (
                    <AddCarComponent/>
                )}/>


            </div>
        )
    }
}

export default withRouter(AdminPage);