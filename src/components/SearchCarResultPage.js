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

class SearchCarResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
    }

    componentDidMount() {
        API.getCarSearchResults()

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

                                <h3>Select car type</h3>

                            </button>

                            <br/><br/>

                            <div id="demo" className="collapse">

                                <ul className="list-group">

                                    <li className="">SUV</li>

                                    <li className="">Large</li>

                                    <li className="">Medium</li>

                                    <li className="">Small</li>

                                    <li className="">Luxury</li>

                                </ul>

                            </div>

                            <br/><br/>

                            <button type="button" className="btn btn-info carfilterbuttons" data-toggle="collapse" data-target="#demo1">

                                <h3>Select passengers</h3>

                            </button>

                            <br/><br/>

                            <div id="demo1" className="collapse">

                                <ul className="list-group">

                                    <li className="">1 to 2 passengers</li>

                                    <li className="">3 to 5 passengers</li>

                                    <li className="">6 or more</li>

                                </ul>

                            </div>

                            <br/><br/>

                        </div>

                    </div>

                    <div className="col-md-6 SearchListMainContainer">

                        {this.state.searchResults.map((task, i) =>

                            <div className="SearchListItemMainContainer">

                                <span className="SearchListItemCarMainContent">

                                    <div className="SearchListItemTitle">{task.car_model}</div>

                                    <div className="SearchListItemAdd">{task.car_class}</div>

                                    <div className="SearchListItemStars">

                                        {



                                        }</div>

                                    <div className="SearchListItemPass">

                                        <img className="passengerIcon" src={"http://localhost:3000/images/passengerIcon.png"} alt={'car'}/>

                                        {task.no_passangers}

                                    </div>

                                    <div className="SearchListItemBag">

                                        <img className="largeBagIcon" src={"http://localhost:3000/images/largeBagIcon.png"} alt={'car'}/>

                                        {task.no_largebags}</div>

                                    <div className="SearchListItemDoor">

                                        <img className="doorIcon" src={"http://localhost:3000/images/doorIcon.png"} alt={'car'}/>

                                        {task.no_door}</div>



                                </span>

                                <span className="SearchListItemCarImage">

                                     {

                                         i % 10 == 1 ?(

                                             <img className="carImage" src={"http://localhost:3000/images/car1.png"} alt={'car'}/>

                                         ) :(

                                             i % 10 == 2 ?(

                                                 <img className="carImage" src={"http://localhost:3000/images/car2.png"} alt={'car'}/>

                                             ) :(

                                                 i % 10 == 3 ?(

                                                     <img className="carImage" src={"http://localhost:3000/images/car3.png"} alt={'car'}/>

                                                 ) :(

                                                     i % 10 == 4 ?(

                                                         <img className="carImage" src={"http://localhost:3000/images/car4.png"} alt={'car'}/>

                                                     ) :(

                                                         i % 10 == 5 ?(

                                                             <img className="carImage" src={"http://localhost:3000/images/car5.png"} alt={'car'}/>

                                                         ) :(

                                                             i % 10 == 6 ?(

                                                                 <img className="carImage" src={"http://localhost:3000/images/car6.png"} alt={'car'}/>

                                                             ) :(

                                                                 i % 10 == 7 ?(

                                                                     <img className="carImage" src={"http://localhost:3000/images/car7.png"} alt={'car'}/>

                                                                 ) :(

                                                                     i % 10 == 8 ?(

                                                                         <img className="carImage" src={"http://localhost:3000/images/car8.png"} alt={'car'}/>

                                                                     ) :(

                                                                         i % 10 == 9 ?(

                                                                             <img className="carImage" src={"http://localhost:3000/images/car9.png"} alt={'car'}/>

                                                                         ) :(

                                                                             <img className="carImage" src={"http://localhost:3000/images/car0.png"} alt={'car'}/>

                                                                         )

                                                                     )

                                                                 )

                                                             )

                                                         )

                                                     )

                                                 )

                                             )

                                         )



                                     }



                                </span>

                                <span className="SearchListItemPriceContent">

                                    <div className="SearchListItemPrice">$ {task.price}</div>

                                    <button type="button" className="btn btn-info Viewdeal" >View Deal</button>

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

export default SearchCarResultPage;
