import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MyAutosuggest from "./MyAutoSuggest";
import DateTime from 'react-datetime';


var Content = React.createClass({
    getInitialState () {
        return {
            roomNo: 0,
            roomNumStr: "",
            adultsNo: 0,
            guestNumStr: "",
            childrenNo : 0
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
        if(this.state.roomNo === 1 && this.state.guestNumStr===1){
            str = this.state.roomNumStr+" room, "+ this.state.guestNumStr+" guest";
        }else if(this.state.roomNo > 1){
            str = this.state.roomNumStr+" rooms, "+ this.state.guestNumStr+" guests";
        }else if(this.state.roomNo === 1 && this.state.guestNumStr > 1){
            str = this.state.roomNumStr+" room, "+ this.state.guestNumStr+" guests";
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
                                        <div id="demo" className="col-md-9 collapse" onFocus={this.handleCollapse} onfocusout={this.handleCollapseOut} style={{textAlign:"left",backgroundColor:"white",paddingBottom:10,maxWidth: "unset",marginTop: "5px"}}>
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
                                                            <td style={{paddingRight:5,paddingLeft:5}}> {this.state.roomNo} </td>
                                                            <td><button onClick={() => this.handleAddNum("Room")}>+</button></td>
                                                        </tr><hr/>
                                                        <tr>
                                                            <td>Adults</td>
                                                            <td><button onClick={() => this.handleSubNum("Adults")}>-</button></td>
                                                            <td style={{paddingRight:5,paddingLeft:5}}> {this.state.adultsNo} </td>
                                                            <td><button onClick={() => this.handleAddNum("Adults")}>+</button></td>
                                                        </tr><hr/>
                                                        <tr>
                                                            <td>Children</td>
                                                            <td><button onClick={() => this.handleSubNum("Children")}> - </button></td>
                                                            <td style={{paddingRight:5,paddingLeft:5}}> {this.state.childrenNo} </td>
                                                            <td><button onClick={() => this.handleAddNum("Children")}>+</button></td>
                                                        </tr>
                                                    </table>
                                                    </span>
                                        </div>
                                    </div>

                                    <div className={"col-md-1"}>
                                        <a className="btn btn-lg btn-primary flightSubmitButton" href="../../components/navbar/"
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

export default Content;