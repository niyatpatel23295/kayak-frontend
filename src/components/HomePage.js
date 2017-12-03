import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Modal from './Modal';

import accountIcon from '../images/AccountIcon.png';
import hotelIcon from '../images/HtIcon.png';
import flightIcon from '../images/FIcon.png';
import carsIcon from '../images/Cars.png';
import pIcon from '../images/Packages.png';
import myAccount2 from '../images/MyAccount2.png';

import Tabs from './Tabs';
import NavTabs from './NavTabs';
import Content from './Content';
import * as API from '../api/API';
import AccountPreference from './AccountPreference';
import Signup from './Signup';
import Payment from './Payment';
import AdminPage from './AdminPage';
import SignIn from './SignIn';
import AddHotelComponent from './AddHotelComponent';
import SearchResultPage from './SearchResultPage';
import UpdateHotelComponent from './UpdateHotelComponent';
import AddFlightComponent from './AddFlightComponent';
import AddCarComponent from './AddCarComponent';

var tabList = [
    {'id': 1, 'name': 'HOTELS', 'url': '/hotel'},
    {'id': 2, 'name': 'FLIGHTS', 'url': '/flight'},
    {'id': 3, 'name': 'CARS', 'url': '/car'},
    {'id': 4, 'name': 'PACKAGES', 'url': ''}
];

var MainTabsContainer = React.createClass({
    getInitialState: function () {
        return {
            tabList: tabList,
            currentTab: 1
        };
    },

    changeTab: function (tab) {
        this.setState({currentTab: tab.id});
    },

    render: function () {
        return (
            <div>
                <NavTabs
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                />
                <Tabs
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                />
                <Content currentTab={this.state.currentTab}/>
            </div>
        );
    }
});


class HomePage extends Component {

    sessionLogout = (event) => {
        console.log("Inside session Logout");
        // API.sessionLogout()
        //     .then((status) => {
        //         if (status === 204) {
        //             console.log("status "+status)
        //         } else if(status === 401){
        //             //Error
        //             console.log("Cannot Logout!")
        //         }
        //     });
    };

    state = {
        checkInDate: "",
        checkOutDate: "",
        numOfRooms: 0,
        email: '',
        password: '',
        isModalOpen: false,
        roomNo: 0,
        adultsNo: 0,
        childrenNo: 0,
        roomNumStr: "",
        guestNumStr: ""
    }

    constructor(props) {
        super(props);
        this.handleCheckInDate = this.handleCheckInDate.bind(this);
        this.hotelToggle = this.hotelToggle.bind(this);
        this.flightToggle = this.flightToggle.bind(this);
        this.carToggle = this.carToggle.bind(this);

        this.state = {
            shownHotel: true,
            shownFlight: false,
            shownCar: false
        }
    }

    hotelToggle() {
        this.setState({
            shownHotel: true,
            shownFlight: false,
            shownCar: false
        });
        console.log(this.state);
    }

    flightToggle() {
        this.setState({
            shownHotel: false,
            shownFlight: true,
            shownCar: false
        });
    }

    carToggle() {
        this.setState({
            shownHotel: false,
            shownFlight: false,
            shownCar: true
        });
    }

    componentDidMount() {
        this.state = {
            checkInDate: "",
            checkOutDate: "",
            isModalOpen: false,
            shownHotel: true,
            roomNo: 0,
            adultsNo: 0,
            childrenNo: 0,
            roomNumStr: "",
            guestNumStr: ""
        }
    }

    componentWillMount() {
        this.state = {
            checkInDate: "",
            checkOutDate: "",
            email: '',
            password: '',
            roomNo: 0,
            adultsNo: 0,
            childrenNo: 0,
            roomNumStr: "",
            guestNumStr: "",
            isModalOpen: false
        }
    }

    handleCheckInDate(value) {
        console.log(value._d);
        const cc = value._d;
        console.log(cc);
        this.setState({
            checkInDate: cc
        })
    }


    handleSubmit = (userdata) => {
        console.log("Inside HandleSubmit ", userdata);
        API.doLogin(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        email: userdata.email
                    });
                    this.closeModal();
                    this.props.history.push("/");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    openModal() {
        this.setState({isModalOpen: true})
    }

    closeModal() {
        this.setState({isModalOpen: false})
    }

    render() {

        var shownHotel = {
            display: this.state.shownHotel ? "block" : "none"
        };

        var shownFlight = {
            display: this.state.shownFlight ? "block" : "none"
        };

        var shownCar = {
            display: this.state.shownCar ? "block" : "none"
        };

        return (
            <div className='container-fluid'>
                <Route exact path="/" render={() => (<div className="FancyBackgroundImage">
                        <div className="row">
                            {/* <div>
                            <h2 style={ shown }>this.state.shown = true</h2>
                            <h2 style={ hidden }>this.state.shown = false</h2>
                            <button onClick={this.toggle.bind(this)}>Toggle</button>
                        </div>*/}
                            <div>
                                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>

                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myModalLabel">Login to kayak.com</h4>
                                        <button type="button" className="close" data-dismiss="modal"
                                                onClick={() => this.closeModal()}><span aria-hidden="true">×</span>
                                            <span className="sr-only">Close</span></button>

                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="well">
                                                    <form>
                                                        <div className="form-group">
                                                            <label className="control-label">Username</label>
                                                            <input type="text" className="form-control" id="userID"
                                                                   value={this.state.email}
                                                                   onChange={(event) => {
                                                                       this.setState({
                                                                           email: event.target.value
                                                                       });
                                                                   }} required="" placeholder="Email Address"/>

                                                        </div>
                                                        <div className="form-group">
                                                            <label className="control-label">Password</label>
                                                            <input type="password" className="form-control"
                                                                   id="password" name="password"
                                                                   value={this.state.password}
                                                                   onChange={(event) => {
                                                                       this.setState({
                                                                           password: event.target.value
                                                                       });
                                                                   }} required="" title="Please enter your password"/>

                                                        </div>
                                                        <div id="loginErrorMsg" className="alert alert-error hide">Wrong
                                                            username og password
                                                        </div>
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="remember" id="remember"/>
                                                                Remember login
                                                            </label>
                                                            <p className="help-block">(if this is a private
                                                                computer)</p>
                                                        </div>
                                                        <button type="submit" className="btn btn-success btn-block"
                                                                onClick={() => this.handleSubmit(this.state)}>Login
                                                        </button>
                                                        <br/>
                                                        Don't have an account! <a href="/Signup"> Sign Up Here</a>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Modal>
                            </div>

                            <div className="col-md-1">

                            </div>
                            <div className="col-md-10">
                                <div className="navbar navbar-expand-md">
                                    <a className="navbar-brand kayaklogo" href="#"></a>

                                    <div>
                                    </div>

                                    <div className="collapse navbar-collapse" id="navbarCollapse">
                                        <form className="form-inline mt-12 mt-md-0">

                                            <div className="dropdown">
                                                <a className="dropdown-toggle myAccount"
                                                   id="menu1"
                                                   data-toggle="dropdown" style={{color: "white", fontSize: 13}}>
                                                    <img src={myAccount2} width={30} style={{paddingBottom: 5}}/>My
                                                    Account
                                                </a>
                                                <ul className="dropdown-menu"
                                                    role="menu"
                                                    aria-labelledby="menu1">
                                                    <li role="presentation">
                                                        <a href="#" onClick={() => this.openModal()}><b>Sign In</b></a>
                                                    </li>
                                                    <li role="presentation" className="divider"/>
                                                    <li role="presentation">
                                                        <a href="/AccountPreference"><b>Account Preference</b></a>
                                                    </li>
                                                    <li role="presentation" className="divider"/>
                                                    <li role="presentation">
                                                        <a href="#"><b>Trips</b></a>
                                                    </li>
                                                    <li role="presentation" className="divider"/>
                                                    <li role="presentation">
                                                        <a href="/" onClick={this.sessionLogout()}><b>Sign Out</b></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <span className="Horizonatalline"></span>
                            </div>
                            <div className="col-md-1">

                            </div>

                        </div>


                        <main role="main" className="container">

                            <br/><h2 style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "300",
                            fontWeight: "700",
                            fontSize: "24px",
                            marginTop: "50px",
                            marginBottom: "15px"
                        }}>Search of hundreds of travel sites at

                            once.
                        </h2>
                            <br/><br/>
                            <div className="row">
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-8">
                                    <MainTabsContainer/>
                                </div>
                            </div>
                            <div className="row">
                            </div>

                        </main>

                    </div>
                )}/>
                <Route exact path="/AccountPreference" render={() => (
                    <AccountPreference/>
                )}/>
                <Route exact path="/Signup" render={() => (
                    <Signup/>
                )}/>
                <Route exact path="/Payment" render={() => (
                    <Payment/>
                )}/>
                <Route exact path="/AdminPage" render={() => (
                    <AdminPage/>
                )}/>
                <Route exact path="/SignIn" render={() => (
                    <SignIn/>
                )}/>

                <Route exact path="/addHotels" render={() => (
                    <AddHotelComponent/>
                )}/>
                <Route exact path="/searchItem" render={() => (
                    <SearchResultPage searchResult={this.state.result}/>
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

export default withRouter(HomePage);
