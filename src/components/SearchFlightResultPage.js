import React from 'react'
import img1 from '.././images/AccountIcon.png'
import kayak from '.././images/KAYAK.png'
import stars5 from '.././images/5stars.png'
import stars4 from '.././images/4stars.png'
import stars3 from '.././images/3stars.png'
import stars2 from '.././images/2stars.png'
import rightpaneimage1 from '.././images/rightPaneImage1.png'
import rightpaneimage2 from '.././images/rightPaneImage2.png'
import hoteldesc from '.././images/hoteldesc.png'
import * as API from '../api/API';

class SearchFlightResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
    }

    componentDidMount() {
        API.getFlightSearchResults()
            .then((data) => {
                console.log(JSON.stringify(data.data[0]));
                this.setState({
                    searchResults: data.data
                });
            });
    };

    render() {
        return (
            <div className="container-fluid searchListPage" style={{backgroundColor:"#e4e5ea", paddingBottom:"25px"}}>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/"><img src={kayak} width={140} style={{paddingTop: 15}}/></a>
                        </div>
                        <ul className="nav">

                            <li className="active"><a href="/"><h2>Home</h2></a></li>
                            <li><a href="/"><h2>Hotels</h2></a></li>
                            <li><a href="/"><h2>Flights</h2></a></li>
                            <li><a href="/"><h2>Cars</h2></a></li>
                            <li><a href="/"><h2>Package</h2></a></li>
                        </ul>
                    </div>
                </nav>

                <div className="row" style={{paddingBottom:'50px'}}>
                    <div className="col-md-3" style={{paddingTop: 15}}>
                        <div className="nav-side-menu col-md-8" style={{textAlign: 'Center', top:'4px', backgroundColor:'white', marginLeft:'100px', height:'500px'}}>
                            <br/><br/>
                            <button type="button" className="btn btn-info carfilterbuttons" data-toggle="collapse" data-target="#demo">
                                <h3>Select class</h3>
                            </button>
                            <br/><br/>
                            <div id="demo" className="collapse">
                                <ul className="list-group">
                                    <li className="">Economy</li>
                                    <li className="">Business</li>
                                </ul>
                            </div>
                            <br/><br/>
                            <button type="button" className="btn btn-info carfilterbuttons" data-toggle="collapse" data-target="#demo1">
                                <h3>Select airlines</h3>
                            </button>
                            <br/><br/>
                            <div id="demo1" className="collapse">
                                <ul className="list-group">
                                    <li className="">Air India</li>
                                    <li className="">Emirates</li>
                                    <li className="">Southwest</li>
                                </ul>
                            </div>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-6 SearchListMainContainer">
                        {this.state.searchResults.map((task, i) =>
                            <div className="SearchListItemFlightMainContainer">
                                <span className="SearchListItemFlightMainContent">
                                    <span className="SearchListItemFlightImage">{
                                        <img className="recentImage" src={'http://localhost:3000/images/AI.png'} alt={'logo2'}/>
                                    }</span>
                                    <span className="SearchListItemFlightTitle">{task.flight_name}</span>
                                    <span className="SearchListItemFlightDeparture">{task.departure.substring(0,10)}</span>
                                    <span className="SearchListItemFlightDepartureTime">{task.departure.substring(16,11)}</span>
                                    <span className="SearchListItemFlightConnImage">
                                        <img className="recentImage" src={'http://localhost:3000/images/flightconnecting.png'} alt={'logo2'}/>
                                    </span>
                                    <span className="SearchListItemFlightArrival">{task.arrival.substring(0,10)}</span>
                                    <span className="SearchListItemFlightArrivalTime">{task.arrival.substring(16,11)}</span>
                                    <span className="SearchListItemFlightDuration">{task.duration} h</span>
                                    <span className="SearchListItemFlightClass">{task.class}</span>
                                </span>
                                <span className="SearchListItemPriceFlightContent">
                                    <div className="SearchListItemPrice">$ {task.fair}</div>
                                    <button type="button" className="btn btn-info FlightViewdeal" >View Deal</button>
                                </span>
                            </div>
                        )}


                    </div>
                    <div className="col-md-3">
                        <div className="SearchListPageRightContainer">
                            <div className="SearchListPageRightContainer1">
                                <img className="rightpaneimage1" src={rightpaneimage1} alt={'image1'}/>
                            </div>
                            <div className="SearchListPageRightContainer2">
                                <img className="rightpaneimage2" src={rightpaneimage2} alt={'image2'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default SearchFlightResultPage;
