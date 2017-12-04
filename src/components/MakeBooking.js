import React from 'react'
import * as API from "../api/API";
import '../index.css'
import {withRouter} from "react-router-dom";
import Payment from './Payment'

class MakeBooking extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        cardNo: '',
        cardName: '',
        expiryDate: '',
        cvc: '',
        selectedRoom: '',
        selectedHotel: '',
        bookingType:'Hotel'
    };

    componentWillMount(){
        this.setState({
            cardNo: '',
            cardName: '',
            expiryDate: '',
            cvc: '',
            bookingType:'Hotel'
        });
    }

    handleSubmitPaymentDetails = (userdata) => {
        API.SubmitPaymentDetails(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        message: "Details submitted successfully..!!"
                    });
                    this.props.history.push("/bookingDetails");
                } else if (status === 401) {
                    this.setState({
                        message: "Error.. Try again..!!"
                    });
                }
            });
    };



    componentDidMount() {
        API.getSelectedRoom()
            .then((data) => {
                console.log("data.data " + data.data);
                this.setState({
                   selectedRoom : data.data
                });
            });

        API.getSelectedHotelToBook()
            .then((data) => {
                console.log("data.data " + data.data.hotel_name);
                this.setState({
                    selectedHotel: {
                        hotel_name: data.data.hotel_name,
                        description: data.data.hotel_description,
                        hotel_ratings: data.data.hotel_ratings,
                        hotel_address: data.data.hotel_address,
                        hotel_stars: data.data.hotel_stars,
                        hotel_image: data.data.hotel_image,
                        from_date: data.dates.from_date,
                        to_date: data.dates.to_date
                    }
                });
            });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/*Navigation*/}
                            <nav className="w3-bar w3-black">
                                <a href="/" className="w3-button w3-bar-item">Home</a>
                                <a href="#band" className="w3-button w3-bar-item">Hotels</a>
                                <a href="#tour" className="w3-button w3-bar-item">Flights</a>
                                <a href="#contact" className="w3-button w3-bar-item">Cars</a>
                            </nav>
                            <br/>


                            <div className="container card-header">
                                <div className="row " style={{padding: "10"}}>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-8 border">
                                        <h1>
                                            {this.state.selectedHotel.hotel_name}
                                        </h1>
                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                </div>
                                <div className="row" style={{padding: "10"}}>
                                    <div className="col-md-4 ">
                                        <h4>
                                            {this.state.selectedHotel.description}
                                        </h4>
                                    </div>
                                    <div className="col-md-4 ">
                                        <h4>
                                            {this.state.selectedHotel.hotel_address}
                                        </h4>
                                    </div>
                                    <div className="col-md-4 ">
                                        <h4>
                                            Ratings : {this.state.selectedHotel.hotel_ratings}
                                        </h4>
                                        <h4>
                                            Stars: {this.state.selectedHotel.hotel_stars}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                        <div className="col-md-12">
                            <div className="container card-header">
                                <div className="row " style={{padding: "10"}}>
                                    <div className="col-md-12">
                                        <table>
                                            <tr>
                                                <th colSpan="2" ><h4>Your Room Booking Info </h4></th>
                                            </tr>
                                            <tr>
                                                <td>Room Type</td>
                                                <td>{this.state.selectedRoom.room_type}</td>

                                            </tr>
                                            <tr>
                                                <td>Room Number</td>
                                                <td>{this.state.selectedRoom.room_number}</td>
                                            </tr>
                                            <tr>
                                                <td>Room Description</td>
                                                <td>{this.state.selectedRoom.room_description}</td>
                                            </tr>
                                            <tr>
                                                <td>Room Price</td>
                                                <td>${this.state.selectedRoom.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Check-in Date</td>
                                                <td>{this.state.selectedHotel.from_date}</td>
                                            </tr>
                                            <tr>
                                                <td>Check-out Date</td>
                                                <td>{this.state.selectedHotel.to_date}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="container card-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-4 col-md-offset-4">
                                    <br/><br/>
                                    <div className="">
                                        <div className="">
                                            <div className="row">
                                                <h3 className="text-center">Payment Details</h3>
                                                <img className="img-responsive cc-img" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png" style={{height:80}}/>
                                            </div>
                                        </div>
                                        <div className="">
                                            <form role="form">
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <div className="form-group">
                                                            <label>CARD NUMBER</label>
                                                            <div className="input-group">
                                                                <input type="tel" className="form-control" placeholder="Valid Card Number"
                                                                       value={this.state.cardNo}
                                                                       onChange={(event) => {
                                                                           this.setState({
                                                                               cardNo: event.target.value
                                                                           });
                                                                       }} />
                                                                <span className="input-group-addon"><span className="fa fa-credit-card" /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-7 col-md-7">
                                                        <div className="form-group">
                                                            <label><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                                                            <input type="tel" className="form-control" placeholder="MM / YY"  value={this.state.expiryDate}
                                                                   onChange={(event) => {
                                                                       this.setState({
                                                                           expiryDate: event.target.value
                                                                       });
                                                                   }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-5 col-md-5 pull-right">
                                                        <div className="form-group">
                                                            <label>CV CODE</label>
                                                            <input type="tel" className="form-control" placeholder="CVC" value={this.state.cvc}
                                                                   onChange={(event) => {
                                                                       this.setState({
                                                                           cvc: event.target.value
                                                                       });
                                                                   }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <div className="form-group">
                                                            <label>CARD OWNER</label>
                                                            <input type="text" className="form-control" placeholder="Card Owner Names" value={this.state.cardName}
                                                                   onChange={(event) => {
                                                                       this.setState({
                                                                           cardName: event.target.value
                                                                       });
                                                                   }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="">
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <button className="btn btn-warning btn-lg btn-block" onClick={() => this.handleSubmitPaymentDetails(this.state)}>Process payment</button>
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MakeBooking);