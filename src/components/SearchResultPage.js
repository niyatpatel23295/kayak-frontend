import React from 'react'
import img1 from '.././images/AccountIcon.png'
import kayak from '.././images/KAYAK.png'

class SearchResultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/"><h1>Kayak</h1></a>
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

                <div className="row">
                    <div className="col-md-2" style={{paddingTop: 15}}>
                        <div className="nav-side-menu col-md-2" style={{textAlign: 'Center'}}>
                            <a className="navbar-brand" href="/"><img src={kayak} width={140} style={{paddingTop: 15}}/></a>
                            <br/><br/><br/><br/>
                            <br/><br/>
                            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">
                                <h3>Select Stars</h3>
                            </button>
                            <br/><br/>
                            <div id="demo" className="collapse">
                                <ul className="list-group">
                                    <li className="">5 Stars</li>
                                    <li className="">4 Stars</li>
                                    <li className="">3 Stars</li>
                                    <li className="">2 Stars</li>
                                    <li className="">1 Stars</li>
                                </ul>
                            </div>
                            <br/><br/>
                            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo1">
                                <h3>Select Ratings</h3>
                            </button>
                            <br/><br/>
                            <div id="demo1" className="collapse">
                                <ul className="list-group">
                                    <li className="">Ratings 10</li>
                                    <li className="">Ratings 7+</li>
                                    <li className="">Ratings 5+</li>
                                    <li className="">Ratings 3+</li>
                                    <li className="">Ratings 1+</li>
                                </ul>
                            </div>
                            <br/><br/>
                            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo2">
                                <h3>Select Stars</h3>
                            </button>
                            <br/><br/>
                            <div id="demo2" className="collapse">
                                <ul className="list-group">
                                    <li className="">5 Stars</li>
                                    <li className="">4 Stars</li>
                                    <li className="">3 Stars</li>
                                    <li className="">2 Stars</li>
                                    <li className="">1 Stars</li>
                                </ul>
                            </div>
                            <br/><br/>
                            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo3">
                                <h3>Select Stars</h3>
                            </button>
                            <br/><br/>
                            <div id="demo3" className="collapse">
                                <ul className="list-group">
                                    <li className="">5 Stars</li>
                                    <li className="">4 Stars</li>
                                    <li className="">3 Stars</li>
                                    <li className="">2 Stars</li>
                                    <li className="">1 Stars</li>
                                </ul>
                            </div>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <h1>Search Results</h1>
                        <div className="well well-lg" style={{padding: "10"}}>
                            <div className="row">
                                <div className="col-md-4"><img src={img1} style={{width: "50%"}}/></div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12"><h4 className="list-group-item-heading">Name</h4>
                                        </div>
                                    </div>
                                    <div className="row" style={{padding: "20"}}>
                                        <div className="col-md-6"><p className="list-group-item-text">Location</p>
                                        </div>
                                        <div className="col-md-6"><p className="list-group-item-text">Description
                                            and Rating</p></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                            Contact Number
                                        </div>
                                    </div>
                                    <div className="row" style={{padding: "40"}}>
                                        <div className="col-md-12">
                                            <button>Book Now</button>
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

export default SearchResultPage;
