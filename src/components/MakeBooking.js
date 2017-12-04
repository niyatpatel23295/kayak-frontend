import React from 'react'
import * as API from "../api/API";
import '../index.css'
import {withRouter} from "react-router-dom";

class MakeBooking extends React.Component {

    state = {
        selectedRoom: '',
        selectedHotel: ''
    }

    constructor(props){
        super(props);
    }

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
                        from_date: data.data.from_date,
                        to_Date: data.data.to_Date
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
                                        {JSON.stringify(this.state.selectedRoom)}
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
                                                <td>{this.state.selectedRoom.from_date}</td>
                                            </tr>
                                            <tr>
                                                <td>Check-out Date</td>
                                                <td>{this.state.selectedRoom.to_date}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MakeBooking);