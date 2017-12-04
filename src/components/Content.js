import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MyAutosuggest from "./MyAutoSuggest";
import DateTime from 'react-datetime';
import * as API from '../api/API';
import {Route, withRouter} from 'react-router-dom';


var Content = React.createClass({
   getInitialState () {
        return {
            roomNo: 0,
            roomNumStr: "",
            adultsNo: 0,
            guestNumStr: "",
            childrenNo : 0,
            result:"",
            adultF:0,
            senior:0,
            child:0,
            infant:0,
            flightStr:"",
            traveller:0
        };
    },
    
        handleAddNum(value) {
        var val = this.state.roomNo+1;
        this.setState({
            added: true
        })
        if(value === "Room"){
            if(this.state.roomNo === 0){
                this.setState({
                    roomNo: this.state.roomNo+1,
                    roomNumStr: val,
                    adultsNo : val,
                    guestNumStr: val
                })
            }else if(this.state.guestNumStr < this.state.roomNo){
                this.setState({
                    roomNo: this.state.roomNo+1,
                    roomNumStr: val,
                    guestNumStr: val
                })
            }else{
                //var val2 = this.state.roomNo+1
                this.setState({
                    roomNo: this.state.roomNo+1,
                    roomNumStr: val
                })
            }
        }else if(value === "Adults"){
            if(this.state.adultsNo > 0 || this.state.childrenNo >0){
                var roomN = this.state.roomNo;
                if(this.state.adultsNo > 0 && this.state.roomNo < 1){
                    roomN = 1
                }
                this.setState({
                    adultsNo : this.state.adultsNo+1,
                    guestNumStr : this.state.adultsNo+this.state.childrenNo+1,
                    roomNo : roomN
                })
            } else{
                this.setState({
                    adultsNo : this.state.adultsNo+1,
                    guestNumStr : this.state.adultsNo+this.state.childrenNo+1
                })
            }
        }else if(value === "Children"){
            this.setState({
                childrenNo : this.state.childrenNo+1,
                guestNumStr : this.state.adultsNo+this.state.childrenNo+1
            })
        }
    },

    handleSubNum(value) {
        console.log("inside sub");
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

    handleAddFlightNum(value) {
        console.log("Inside Add "+value);
        var traveller = this.state.roomNo+1;
        this.setState({
            added: true
        })
        if(value === "Adults"){
                this.setState({
                    adultF: this.state.adultF+1,
                    traveller : this.state.traveller+1
                })
        }else if(value === "Seniors"){
                this.setState({
                    senior: this.state.senior+1,
                    traveller : this.state.traveller+1
                })
        }else if(value === "Child"){
            this.setState({
                child : this.state.child+1,
                traveller : this.state.traveller+1
            })
        }
        else if(value === "Infant"){
            this.setState({
                infant : this.state.infant+1,
                traveller : this.state.traveller+1
            })
        }

        // if((this.state.infant+this.state.adultF+this.state.child+this.state.senior)>0){
        //     this.setState({
        //         traveller : this.state.infant+this.state.adultF+this.state.child+this.state.senior
        //     })
        // }
    },

    handleSubFlightNum(value) {
        console.log("Inside Sub "+value);
        if(value === "Adults" && this.state.adultF > 0){
            this.setState({
                adultF: this.state.adultF-1,
                traveller : this.state.traveller-1
            })
        }else if(value === "Seniors" && this.state.senior > 0){
            this.setState({
                senior: this.state.senior-1,
                traveller : this.state.traveller-1
            })
        }
        else if(value === "Child" && this.state.child > 0){
            this.setState({
                child: this.state.child-1,
                traveller : this.state.traveller-1
            })
        }else if(value === "Infant" && this.state.infant>0){
            this.setState({
                infant : this.state.infant-1,
                traveller : this.state.traveller-1
            })
        }

        // if((this.state.infant+this.state.adultF+this.state.child+this.state.senior)>0){
        //     this.setState({
        //         traveller : this.state.infant+this.state.adultF+this.state.child+this.state.senior-1
        //     })
        // }
    },

    handleSearchHotels() {
        var valueOfCity = document.getElementsByClassName("react-autosuggest__input")[0].getAttribute("value");
        var valueOfFromDate = document.getElementsByClassName("hotelFromDate")[0].children[0].children[0].getAttribute("value");
        var valueOfToDate = document.getElementsByClassName("hotelToDate")[0].children[0].children[0].getAttribute("value");
        var total = this.state.adultsNo + this.state.childrenNo;
        var JSON_filter = {
            "filter": {
                "city_name": valueOfCity,
                "hotel_price": "",
                "hotel_ratings": "",
                "no_rooms" : this.state.roomNo,
                "no_guests" : total,
                "from_date" : valueOfFromDate,
                "to_date" : valueOfToDate
            }
        };
        console.log(JSON_filter);

        API.doHotelSearch(JSON_filter)
            .then((data) => {
                if (data.message === "Success") {
                    //console.log("Response: " + JSON.stringify(data));
                    this.setState({
                        result: data
                    });
                    // this.props.history.push("/searchItem");
                    this.props.history.push({
                        pathname: '/searchItem',
                        state: {result: data}
                    });
                } else {
                    this.setState({
                        message: "Hotel Search: Bad Query"
                    });
                }
            });

    },

    handleSearchCar() {
        var valueOfCity = document.getElementsByClassName("react-autosuggest__input")[0].getAttribute("value");
        var valueOfFromDate = document.getElementsByClassName("carFromDate")[0].children[0].children[0].getAttribute("value");
        var valueOfToDate = document.getElementsByClassName("carToDate")[0].children[0].children[0].getAttribute("value");

        var JSON_filter = {
            "filter": {
                "city_name": valueOfCity,
                "from_date" : valueOfFromDate,
                "to_date" : valueOfToDate
            }
        };
        console.log(JSON_filter);

        API.doHotelSearch(JSON_filter)
            .then((data) => {
                if (data.message === "Success") {
                    //console.log("Response: " + JSON.stringify(data));
                    this.setState({
                        result: data
                    });
                    // this.props.history.push("/searchItem");
                    this.props.history.push({
                        pathname: '/searchItem',
                        state: {result: data}
                    });
                } else {
                    this.setState({
                        message: "Hotel Search: Bad Query"
                    });
                }
            });

    },

    handleSearchFlight() {
        var to_airport = document.getElementsByClassName("react-autosuggest__input")[0].getAttribute("value");
        var from_airport = document.getElementsByClassName("react-autosuggest__input")[1].getAttribute("value");
        var flightFromDate = document.getElementsByClassName("flightFromDate")[0].children[0].children[0].getAttribute("value");

        var JSON_filter = {
            "filter": {
                "to_airport": to_airport,
                "from_airport": from_airport,
                "departure_date": flightFromDate,
                "flex_days" : 1
            }
        };
        console.log(JSON_filter);

        API.doFlightSearch(JSON_filter)
            .then((data) => {
                if (data.message === "Success") {
                    //console.log("Response: " + JSON.stringify(data));
                    this.setState({
                        result: data
                    });
                    // this.props.history.push("/searchItem");
                    this.props.history.push({
                        pathname: '/searchFlight',
                        state: {result: data}
                    });
                } else {
                    this.setState({
                        message: "Flight Search: Bad Query"
                    });
                }
            });

    },

    render: function(){
        var str;
        if(this.state.roomNo === 1 && this.state.guestNumStr===1){
            str = this.state.roomNumStr+" room, "+ this.state.guestNumStr+" guest";
        }else if(this.state.roomNo > 1){
            str = this.state.roomNumStr+" rooms, "+ this.state.guestNumStr+" guests";
        }else if(this.state.roomNo === 1 && this.state.guestNumStr > 1){
            str = this.state.roomNumStr+" room, "+ this.state.guestNumStr+" guests";
        }else {
            str = "";
        }

        var str2 ="";
        if(this.state.traveller > 0){
            str2 = this.state.traveller + " traveler";
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
                                        }} onChange={this.handleCheckInDate}/>
                                    </div>
                                    <div className="col-md-2 hotelToDate">
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}/>
                                    </div>

                                    <div className="col-md-3 hotelFiltersContainer" style={{textAlign:"left"}}>
                                        <input type="text"  value={str} /><span className="caret"  data-toggle="collapse" data-target="#demo"/>
                                        <div id="demo" className="col-md-9 collapse" onFocus={this.handleCollapse} onBlur={this.handleCollapseOut} style={{textAlign:"left",backgroundColor:"white",paddingBottom:10,maxWidth: "unset",marginTop: "5px",boxShadow:"0 3px 12px 1px rgba(0,0,0,0.26)"}}>
                                            <span id="HotelFilterbox">
                                                <div>
                                                    <div className="HotelFilterboxTitle">Occupancy</div>
                                                </div>
                                                <div className="HotelFilterboxRoom">
                                                    <span className="HotelFilterboxRoomTitle">Rooms</span>
                                                    <span><button onClick={() => this.handleSubNum("Room")}>-</button></span>
                                                    <span style={{paddingRight:5,paddingLeft:5}}> {this.state.roomNo} </span>
                                                    <span><button onClick={() => this.handleAddNum("Room")}>+</button></span>
                                                </div>
                                                 <div className="HotelFilterboxAdults">
                                                    <span className="HotelFilterboxAdultsTitle">Adults</span>
                                                    <span><button onClick={() => this.handleSubNum("Adults")}>-</button></span>
                                                    <span style={{paddingRight:5,paddingLeft:5}}> {this.state.adultsNo} </span>
                                                    <span><button onClick={() => this.handleAddNum("Adults")}>+</button></span>
                                                </div>
                                                  <div className="HotelFilterboxChildren">
                                                    <span className="HotelFilterboxChildrenTitle">Children</span>
                                                   <span><button onClick={() => this.handleSubNum("Children")}> - </button></span>
                                                      <span style={{paddingRight:5,paddingLeft:5}}> {this.state.childrenNo} </span>
                                                    <span><button onClick={() => this.handleAddNum("Children")}>+</button></span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>


                                    <div className={"col-md-1"}>
                                        <a className="btn btn-lg btn-primary hotelSearchImage" role="button" onClick={this.handleSearchHotels}>--&raquo;</a>
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
                                            id="flightFromLocation"
                                            placeholder="From"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <MyAutosuggest
                                            id="flightToLocation"
                                            placeholder="To"
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="col-md-2 flightFromDate" >
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}
                                                  onChange={this.handleCheckInDate}/>
                                    </div>
                                    {/*<div className="col-md-2 flightToDate">
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}/>
                                    </div>*/}

                                    <div className="col-md-3 flightFiltersContainer" style={{textAlign:"left"}}>
                                        <input type="text"  value={str2} /><span className="caret"  data-toggle="collapse" data-target="#demo"/>
                                        <div id="demo" className="col-md-9 collapse" onFocus={this.handleCollapse} onBlur={this.handleCollapseOut} style={{textAlign:"left",backgroundColor:"white",paddingBottom:10,maxWidth: "unset",marginTop: "5px", marginLeft:"20px", boxShadow:"0 3px 12px 1px rgba(0,0,0,0.26)", height:"300px" }}>
                                            <span id="FlightFilterbox">
                                                <div>
                                                    <div className="FlightFilterboxTitle">Travelers</div>
                                                </div>
                                                <div className="FlightFilterboxRoom">
                                                    <span className="FlightFilterboxRoomTitle">Adults</span>
                                                    <span><button onClick={() => this.handleSubNum("Room")}>-</button></span>
                                                    <span style={{paddingRight:5,paddingLeft:5}}> {this.state.roomNo} </span>
                                                    <span><button onClick={() => this.handleAddNum("Room")}>+</button></span>
                                                </div>
                                                 <div className="FlightFilterboxAdults">
                                                    <span className="FlightFilterboxAdultsTitle">Seniors</span>
                                                    <span><button onClick={() => this.handleSubNum("Adults")}>-</button></span>
                                                    <span style={{paddingRight:5,paddingLeft:5}}> {this.state.adultsNo} </span>
                                                    <span><button onClick={() => this.handleAddNum("Adults")}>+</button></span>
                                                </div>
                                                 <div className="FlightFilterboxChildren">
                                                    <span className="FlightFilterboxChildrenTitle">Child</span>
                                                   <span><button onClick={() => this.handleSubNum("Children")}> - </button></span>
                                                      <span style={{paddingRight:5,paddingLeft:5}}> {this.state.childrenNo} </span>
                                                    <span><button onClick={() => this.handleAddNum("Children")}>+</button></span>
                                                </div>
                                                <div className="FlightFilterboxChildren">
                                                    <span className="FlightFilterboxChildrenTitle">Infant</span>
                                                   <span><button onClick={() => this.handleSubNum("Children")}> - </button></span>
                                                      <span style={{paddingRight:5,paddingLeft:5}}> {this.state.childrenNo} </span>
                                                    <span><button onClick={() => this.handleAddNum("Children")}>+</button></span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    <div className={"col-md-1"}>
                                        <a className="btn btn-lg btn-primary flightSubmitButton"role="button" onClick={this.handleSearchFlight}>--&raquo;</a>
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
                                            id="carlocation"
                                            placeholder="Where"
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="col-md-2 carFromDate">
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}
                                                  onChange={this.handleCheckInDate}/>
                                    </div>
                                    <div className="col-md-2 carToDate">
                                        <DateTime inputProps={{
                                            placeholder: new Date().toISOString().split("T")[0],
                                            disabled: false
                                        }}/>
                                    </div>

                                    <div className={"col-md-1"}>
                                        <a className="btn btn-lg btn-primary carSubmitButton" href="../../components/navbar/"
                                           role="button">--&raquo;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :null}

                {this.props.currentTab === 4 ?
                    <div className="package">

                    </div>
                    :null}



            </div>
        );
    }
});

export default withRouter(Content);
