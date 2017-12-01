import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Modal from './Modal';
import accountIcon from '../images/AccountIcon.png';

import hotelIcon from '../images/HtIcon.png';
import flightIcon from '../images/FIcon.png';
import carsIcon from '../images/Cars.png';
import pIcon from '../images/Packages.png';
import myAccount2 from '../images/MyAccount2.png';
import MyAutosuggest from "./MyAutoSuggest";
import DateTime from 'react-datetime';
import AccountPreference from './AccountPreference';
import Signup from './Signup';
import Payment from './Payment';
import AdminPage from './AdminPage';
import AddHotelComponent from './AddHotelComponent';
import SearchResultPage from './SearchResultPage';
import ReactDOM from 'react-dom';
import * as API from '../api/API';


var tabList = [
    { 'id': 1, 'name': 'HOTELS', 'url': '/hotel' },
    { 'id': 2, 'name': 'FLIGHTS', 'url': '/flight' },
    { 'id': 3, 'name': 'CARS', 'url': '/car' },
    { 'id': 4, 'name': 'PACKAGES', 'url': '' }
];

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },

    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
                <a onClick={this.handleClick} href={this.props.url}>
                    {this.props.name}
                </a>
            </li>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },

    render: function(){
        return (
            <nav>
                <ul>
                    {this.props.tabList.map(function(tab) {
                        return (
                            <Tab
                                handleClick={this.handleClick.bind(this, tab)}
                                key={tab.id}
                                url={tab.url}
                                name={tab.name}
                                isCurrent={(this.props.currentTab === tab.id)}
                            />
                        );
                    }.bind(this))}
                </ul>
            </nav>
        );
    }
});

var NavTabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },

    render: function(){
        return (
            <span className="NavTabSection">
                <nav>
                    <ul>
                        {this.props.tabList.map(function(tab) {
                            return (
                                <Tab
                                    handleClick={this.handleClick.bind(this, tab)}
                                    key={tab.id}
                                    url={tab.url}
                                    name={tab.name}
                                    isCurrent={(this.props.currentTab === tab.id)}
                                />
                            );
                        }.bind(this))}
                    </ul>
                </nav>
            </span>
        );
    }
});


var Content = React.createClass({

    handleAddNum(value) {
        var val = this.props.roomNo+1;
        this.setState({
            added: true
        })
        if(value === "Room"){
            if(this.props.roomNo === 0){
                this.setState({
                    roomNo: this.props.roomNo+1,
                    roomNumStr: val,
                    adultsNo : val,
                    guestNumStr: val
                })
            }else if(this.props.guestNumStr < this.props.roomNo){
                this.setState({
                    roomNo: this.props.roomNo+1,
                    roomNumStr: val,
                    guestNumStr: val
                })
            }else{
                //var val2 = this.state.roomNo+1
                this.setState({
                    roomNo: this.props.roomNo+1,
                    roomNumStr: val
                })
            }
        }else if(value === "Adults"){
            if(this.props.adultsNo > 0 || this.props.childrenNo >0){
                var roomN = this.props.roomNo;
                if(this.props.adultsNo > 0 && this.props.roomNo < 1){
                    roomN = 1
                }
                this.setState({
                    adultsNo : this.props.adultsNo+1,
                    guestNumStr : this.props.adultsNo+this.props.childrenNo+1,
                    roomNo : roomN
                })
            } else{
                this.setState({
                    adultsNo : this.props.adultsNo+1,
                    guestNumStr : this.props.adultsNo+this.props.childrenNo+1
                })
            }
        }else if(value === "Children"){
            this.setState({
                childrenNo : this.props.childrenNo+1,
                guestNumStr : this.props.adultsNo+this.props.childrenNo+1
            })
        }
    },

    handleSubNum(value) {
        if(value === "Room" && this.state.roomNo > 0){
            this.setState({
                roomNo: this.state.roomNo-1,
                roomNumStr: this.state.roomNo-1
            })
        }else if(value === "Room" && this.state.roomNo === 1){
            this.setState({
                roomNo: 0,
                roomNumStr: 0,
                adultsNo : 0,
                childrenNo:0
            })
        }
        else if(value === "Adults" && this.state.adultsNo > 0){
            this.setState({
                adultsNo : this.state.adultsNo-1,
                guestNumStr : this.state.adultsNo+this.state.childrenNo-1
            })
        }else if(value === "Children" && this.state.childrenNo>0){
            this.setState({
                childrenNo : this.state.childrenNo-1,
                guestNumStr : this.state.adultsNo+this.state.childrenNo-1
            })
        }
    },

    render: function(){
        var str;
        if(this.props.roomNo === 1 && this.props.guestNumStr===1){
            str = this.props.roomNumStr+" room, "+ this.props.guestNumStr+" guest";
        }else if(this.props.roomNo > 1){
            str = this.props.roomNumStr+" rooms, "+ this.props.guestNumStr+" guests";
        }else if(this.props.roomNo === 1 && this.props.guestNumStr > 1){
            str = this.props.roomNumStr+" room, "+ this.props.guestNumStr+" guests";
        }else {
            str = "";
        }

        return(
            <div className="content">
                {this.props.currentTab === 1 ?
                    <div className="hotel">
                            <div className="row justify-content-center" >
                                <div className="col-md-12" style={{alignContent: "center"}}>
                                    <div className="row justify-content-center">
                                        <div className="col-md-3 ">
                                            <MyAutosuggest
                                                id="location"
                                                placeholder="Where"
                                                onChange={this.onChange}
                                                className="hotelLocation"
                                            />
                                        </div>

                                        <div className="col-md-2 hotelFromDate">
                                            <DateTime inputProps={{
                                                placeholder: new Date().toISOString().split("T")[0],
                                                disabled: false
                                            }}
                                                      onChange={this.handleCheckInDate}/>
                                        </div>
                                        <div className="col-md-2 hotelToDate">
                                            <DateTime inputProps={{
                                                placeholder: new Date().toISOString().split("T")[0],
                                                disabled: false
                                            }}/>
                                        </div>

                                        <div className="col-md-3 hotelFiltersContainer" style={{textAlign:"left"}}>
                                            <input type="text"  value={str} /><span className="caret"  data-toggle="collapse" data-target="#demo"/>
                                            <div id="demo" className="col-md-9 collapse" onFocus={this.handleCollapse} onfocusout={this.handleCollapseOut} style={{textAlign:"left",backgroundColor:"white",paddingBottom:10}}>
                                                    <span id="box">
                                                    <table>
                                                        <tr>
                                                            <th>Occupancy</th>
                                                        </tr><hr/>
                                                        <tr>
                                                            <td>Rooms</td>
                                                            <td><button onClick={() => this.handleSubNum("Room")}>-</button></td>
                                                            <td style={{paddingRight:5,paddingLeft:5}}> {this.props.roomNo} </td>
                                                            <td><button onClick={() => this.handleAddNum("Room")}>+</button></td>
                                                        </tr><hr/>
                                                        <tr>
                                                            <td>Adults</td>
                                                            <td><button onClick={() => this.handleSubNum("Adults")}>-</button></td>
                                                            <td style={{paddingRight:5,paddingLeft:5}}> {this.props.adultsNo} </td>
                                                            <td><button onClick={() => this.handleAddNum("Adults")}>+</button></td>
                                                        </tr><hr/>
                                                        <tr>
                                                            <td>Children</td>
                                                            <td><button onClick={() => this.handleSubNum("Children")}> - </button></td>
                                                            <td style={{paddingRight:5,paddingLeft:5}}> {this.props.childrenNo} </td>
                                                            <td><button onClick={() => this.handleAddNum("Children")}>+</button></td>
                                                        </tr>
                                                    </table>
                                                    </span>
                                            </div>
                                        </div>


                                        <div className={"col-md-1"}>
                                            <a className="btn btn-lg btn-primary hotelSearchImage" href="../../components/navbar/"
                                               role="button">--&raquo;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    :null}

                {this.props.currentTab === 2 ?
                    <div className="flight">
                        <div className="row justify-content-center" >
                            <div className="col-md-12" style={{alignContent: "center"}}>
                                <div className="row justify-content-center">
                                    <div className="col-md-2">
                                        <MyAutosuggest
                                            id="location"
                                            placeholder="From"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <MyAutosuggest
                                            id="location"
                                            placeholder="To"
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}
                                                  onChange={this.handleCheckInDate}/>
                                    </div>
                                    <div className="col-md-2">
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}/>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="dropdown">
                                            <button className="btn btn-default dropdown-toggle"
                                                    type="button"
                                                    id="menu1"
                                                    data-toggle="dropdown">
                                                Tutorials
                                            </button>
                                            <ul className="dropdown-menu"
                                                role="menu"
                                                aria-labelledby="menu1">
                                                <li role="presentation">
                                                    <b>Occupancy</b>
                                                </li>
                                                <li role="presentation">
                                                    <br/>Rooms
                                                    <button className="btn btn-default" >-</button>
                                                    0
                                                    <button className="btn btn-default" >+</button>
                                                </li>
                                                <li role="presentation" className="divider"/>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Adults
                                                    <button className="btn btn-default">-</button>
                                                    0
                                                    <button className="btn btn-default">+</button>
                                                </a></li>
                                                <li role="presentation" className="divider"/>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Children
                                                    <button className="btn btn-default">-</button>
                                                    0
                                                    <button className="btn btn-default">+</button>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={"col-md-1"}>
                                        <a className="btn btn-lg btn-primary" href="../../components/navbar/"
                                           role="button">--&raquo;</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    :null}

                {this.props.currentTab === 3 ?
                    <div className="car">
                        <div className="row justify-content-center" >
                            <div className="col-md-12" style={{alignContent: "center"}}>
                                <div className="row justify-content-center">
                                    <div className="col-md-3">
                                        <MyAutosuggest
                                            id="location"
                                            placeholder="Where"
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}
                                                  onChange={this.handleCheckInDate}/>
                                    </div>
                                    <div className="col-md-2">
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}/>
                                    </div>

                                    <div className={"col-md-1"}>
                                        <a className="btn btn-lg btn-primary" href="../../components/navbar/"
                                           role="button">--&raquo;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :null}

                {this.props.currentTab === 4 ?
                    <div className="package">
                        4
                    </div>
                    :null}
            </div>
        );
    }
});

var MainTabsContainer = React.createClass({
    getInitialState: function () {
        return {
            tabList: tabList,
            currentTab: 1
        };
    },

    changeTab: function(tab) {
        this.setState({ currentTab: tab.id });
    },

    render: function(){
        return(
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
                <Content currentTab={this.state.currentTab} />
            </div>
        );
    }
});


class HomePage extends Component {

    sessionLogout = (event) => {
        console.log("Inside session Logout")

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
        roomNo : 0,
        adultsNo: 0,
        childrenNo : 0,
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
            roomNo : 0,
            adultsNo: 0,
            childrenNo : 0,
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
            roomNo : 0,
            adultsNo: 0,
            childrenNo : 0,
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
        console.log("Inside HandleSubmit ",userdata);
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
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    render()
        {

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
                                            <button type="button" className="close" data-dismiss="modal" onClick={() => this.closeModal()}><span aria-hidden="true">×</span>
                                                <span className="sr-only">Close</span></button>

                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="well">
                                                        <form>
                                                            <div className="form-group">
                                                                <label className="control-label">Username</label>
                                                                <input type="text" className="form-control" id="userID" value={this.state.email}
                                                                       onChange={(event) => {
                                                                           this.setState({
                                                                               email: event.target.value
                                                                           });
                                                                       }} required="" placeholder="Email Address"/>

                                                            </div>
                                                            <div className="form-group">
                                                                <label className="control-label">Password</label>
                                                                <input type="password" className="form-control" id="password" name="password" value={this.state.password}
                                                                       onChange={(event) => {
                                                                           this.setState({
                                                                               password: event.target.value
                                                                           });
                                                                       }} required="" title="Please enter your password"/>

                                                            </div>
                                                            <div id="loginErrorMsg" className="alert alert-error hide">Wrong username og password</div>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="remember" id="remember"/> Remember login
                                                                </label>
                                                                <p className="help-block">(if this is a private computer)</p>
                                                            </div>
                                                            <button type="submit" className="btn btn-success btn-block" onClick={() => this.handleSubmit(this.state)}>Login</button>
                                                            <h5>Don't have an account?</h5><h4><a href='/Signup' >SignUp</a></h4>
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
                                                <img src={myAccount2} width={30} style={{paddingBottom: 5}}/>My Account
                                            </a>
                                            <ul className="dropdown-menu"
                                                role="menu"
                                                aria-labelledby="menu1">
                                                <li role="presentation">
                                                    <a href="#" onClick={() => this.openModal()}><b>Sign In</b></a>
                                                </li>
                                                <li role="presentation" className="divider"/>
                                                <li role="presentation">
                                                    <a href="/AccountPreference" ><b>Account Preference</b></a>
                                                </li>
                                                <li role="presentation" className="divider"/>
                                                <li role="presentation">
                                                    <a href="#" ><b>Trips</b></a>
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

                        <br/><h2 style={{textAlign: "center", color: "white", fontWeight: "300", fontWeight: "700", fontSize: "24px", marginTop: "50px", marginBottom : "15px"}}>Search of hundreds of travel sites at

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
                    <AccountPreference />
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
               <Route exact path="/AdminPage/addHotels" render={() => (
                   <AddHotelComponent/>
               )}/>
               <Route exact path="/searchItem" render={() => (
                   <SearchResultPage searchResult = {this.state.result}/>
               )}/>
                
            </div>
        )
    }
}

export default withRouter(HomePage);
