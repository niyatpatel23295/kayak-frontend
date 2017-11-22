import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import kayak from '../images/KAYAK.png';
import accountIcon from '../images/AccountIcon.png';
import Background from '../images/background.jpg';
import hotelIcon from '../images/HotelIcon2.png';
import MyAutosuggest from "./MyAutoSuggest";
import DateTime from 'react-datetime';


class HomePage extends Component {

    state = {
        checkInDate : "",
        checkOutDate : ""
    }

    constructor(props){
        super(props);
        this.handleCheckInDate= this.handleCheckInDate.bind(this)

    }

    componentDidMount(){
        this.state = {
            checkInDate : "",
            checkOutDate : ""
        }
    }

    componentWillMount(){
        this.state = {
            checkInDate : "",
            checkOutDate : ""
        }
    }

    handleCheckInDate(value){
        console.log(value._d);
        const cc = value._d;
        console.log(cc);
        this.setState({
            checkInDate : cc
        })
    }


    render() {
        return (
            <div style={{backgroundImage: "url(" + Background + ")"}}>
                <div className="navbar navbar-expand-md">
                    <a className="navbar-brand" href="#"><img src={kayak} width={120}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/hotels">Hotels <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Flights">Flights</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Cars">Cars</a>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <a className="nav-link" href="/myAccount"><img src={accountIcon} width={25}/>My Account</a>
                        </form>
                    </div>
                </div>
                <hr/>


                <main role="main" className="container">

                    <h3 style={{textAlign: "center", color: "white"}}><br/>Search of hundreds of travel sites at once
                    </h3>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8">
                            <form>
                                <div className="row justify-content-center">

                                    <button className="btn-group-vertical"><img src={hotelIcon} width={"100"}/></button>
                                    <button className="btn-group-vertical">FLIGHTS</button>
                                    <button className="btn-group-vertical">CARS</button>
                                    <button className="btn-group-vertical">PACKAGES</button>

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
                                            id="type-c"
                                            placeholder="Where"
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <DateTime inputProps={{ placeholder: new Date().toISOString().split("T")[0], disabled: false }}
                                        onChange = {this.handleCheckInDate} />
                                    </div>
                                    <div className="col-md-2">
                                        <DateTime inputProps={{ placeholder: new Date().toISOString().split("T")[0], disabled: false }} />
                                    </div>

                                    <div className="col-md-3">
                                        <MyAutosuggest
                                            id="type-c"
                                            placeholder="Type 'c'"
                                            onChange={this.onChange}
                                        />
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
        )
    }


}

export default withRouter(HomePage);