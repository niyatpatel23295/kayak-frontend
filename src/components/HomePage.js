import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import kayak from '../images/KAYAK.png';
import accountIcon from '../images/AccountIcon.png';
import Background from '../images/background.jpg';
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
        numOfRooms: 0
    }

    constructor(props) {
        super(props);
        this.handleCheckInDate = this.handleCheckInDate.bind(this)

    }

    componentDidMount() {
        this.state = {
            checkInDate: "",
            checkOutDate: ""
        }
    }

    componentWillMount() {
        this.state = {
            checkInDate: "",
            checkOutDate: ""
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


    render() {
        return (
            <div className='container-fluid'>
                <Route exact path="/" render={() => (<div style={{backgroundImage: "url(" + Background + ")"}}>
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-10">
                            <div className="navbar navbar-expand-md">


                                <a className="navbar-brand" href="#"><img src={kayak} width={110}/></a>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/hotels"
                                               style={{color: "white", fontSize: 13}}>Hotels <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/Flights"
                                               style={{color: "white", fontSize: 13}}>Flights</a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/Cars" style={{color: "white", fontSize: 13}}>Cars</a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/Packages"
                                               style={{color: "white", fontSize: 13}}>Packages</a>
                                        </li>
                                    </ul>
                                    <form className="form-inline mt-12 mt-md-0">

                                        <div className="dropdown">
                                            <a className="dropdown-toggle"
                                                    id="menu1"
                                                    data-toggle="dropdown" style={{color: "white", fontSize: 13}}>
                                                <img src={myAccount2} width={30} style={{paddingBottom: 5}}/>My Account
                                            </a>
                                            <ul className="dropdown-menu"
                                                role="menu"
                                                aria-labelledby="menu1">
                                                <li role="presentation">
                                                    <a href="/SignIn" ><b>Sign In</b></a>
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
                                                    <a href="/" ><b>Sign Out</b></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="col-md-1">

                        </div>

                    </div>


                    <main role="main" className="container">

                        <br/><h4 style={{textAlign: "center", color: "white"}}>Search of hundreds of travel sites at
                        once.
                    </h4>
                        <br/><br/>
                        <div className="row">
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-8">
                                <form>
                                    <div className="row justify-content-center">

                                        <button className="btn-group-vertical"><img src={hotelIcon} width={"140"}/>
                                        </button>
                                        <button className="btn-group-vertical"><img src={flightIcon} width={"140"}/>
                                        </button>
                                        <button className="btn-group-vertical"><img src={carsIcon} width={"140"}/>
                                        </button>
                                        <button className="btn-group-vertical"><img src={pIcon} width={"140"}/></button>

                                    </div>
                                </form>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                        <div className="row">
                        </div>
                        <div className="jumbotron">
                            <div className="row justify-content-center">
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

            </div>
        )
    }


}

export default withRouter(HomePage);