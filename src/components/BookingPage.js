import React from 'react'
import * as API from "../api/API";
import '../index.css'
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import room3 from '../images/room3.jpg'
import Slider from 'react-slick'
import {withRouter} from "react-router-dom";

class BookingPage extends React.Component {

    state = {
        searchResults: {
            rooms: []
        }
    }


    constructor(props) {
        super(props);
        this.ToggleAcc = this.ToggleAcc.bind(this);
    }

    bookItem(task){
        console.log("task strigified "+JSON.stringify(task));
        console.log("task json "+task);
        //create json



        var JSON_filter = {
            "filter": task
        };

        API.postSelectedRoom(JSON_filter)
            .then((data) => {
                if (data.message === "Success") {
                    //console.log("Response: " + JSON.stringify(data));
                    this.setState({
                        result: data
                    });
                    // this.props.history.push("/searchItem");
                    this.props.history.push({
                        pathname: '/makeBooking',
                        state: {result: data}
                    });
                } else {
                    this.setState({
                        message: "Hotel Search: Bad Query"
                    });
                }
            });

    }

    componentDidMount() {
        API.getSelectedHotelToBook()
            .then((data) => {
                console.log("data.data " + data.data.hotel_name);
                this.setState({
                    searchResults: {
                        hotel_name: data.data.hotel_name,
                        description: data.data.hotel_description,
                        hotel_ratings: data.data.hotel_ratings,
                        hotel_address: data.data.hotel_address,
                        hotel_stars: data.data.hotel_stars,
                        hotel_image: data.data.hotel_image,
                        to_date: data.data.to_date,
                        from_date: data.data.from_date,
                        rooms: data.data.rooms

                    }
                });
            });
    };

    ToggleAcc(i) {
        console.log("Inside acc" + i);
        var acc = document.getElementsByClassName("accordion")[i];
        var panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        /*this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }*/
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function () {
                console.log("Inside acc")
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        }


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
                                            {this.state.searchResults.hotel_name}
                                        </h1>
                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                </div>
                                <div className="row" style={{padding: "10"}}>
                                    <div className="col-md-4 ">
                                        <h4>
                                            {this.state.searchResults.description}
                                        </h4>
                                    </div>
                                    <div className="col-md-4 ">
                                        <h4>
                                            {this.state.searchResults.hotel_address}
                                        </h4>
                                    </div>
                                    <div className="col-md-4 ">
                                        <h4>
                                            Ratings : {this.state.searchResults.hotel_ratings}
                                        </h4>
                                        <h4>
                                            Stars: {this.state.searchResults.hotel_stars}
                                        </h4>
                                    </div>
                                </div>
                            </div>


                            {/*images*/}
                            <section className="customSlider" style={{alignContent: "center"}}>
                                <Slider {...settings}>
                                    <div><img className="mySlides" src={room1}
                                              style={{width: "575", height: "350"}}/></div>
                                    <div><img className="mySlides" src={room2}
                                              style={{width: "575", height: "350"}}/></div>
                                    <div><img className="mySlides" src={room3}
                                              style={{width: "575", height: "350"}}/></div>
                                </Slider>
                            </section>

                            {/*accordian*/}
                            <div className="container card-header">
                                <h2>Rooms as per your Convenience</h2>
                                <p>Explore our wide range of Room Types which suits your comfort and take advantage of
                                    our High Class Service and serene view of nature</p>
                                {console.log("this.state.searchResults.rooms[0] " + JSON.stringify(this.state.searchResults.rooms[1]))}
                                {this.state.searchResults.rooms.map((task, i) =>

                                    <div >
                                        <button className="accordion" onClick={() => this.ToggleAcc(i)}>
                                            <h3>{task.room_type}</h3>
                                        </button>
                                        < div className="panel" >
                                            <h6>
                                                Room Description: {task.room_description}
                                            </h6>
                                            <h6>
                                                Price: {task.price}
                                            </h6>
                                            <button className="btn btn-primary" onClick={() => this.bookItem(task)} >Book Room</button>
                                            <br />
                                        </div>
                                    </div>
                                )}

                            </div>
                            <br/><br/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BookingPage);