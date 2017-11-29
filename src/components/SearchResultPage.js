import React from 'react'
import img1 from '.././images/AccountIcon.png'

class SearchResultPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="container" >
                    <div className="page-header">Page Header</div>
                    <div className="row">
                        <div className="col-4">
                            SIDE bar
                        </div>
                        <div className="col-6">
                            <h1>Search Results</h1>
                            <div className="well well-lg" style={{padding:"10"}}>
                                <div className="row">
                                    <div className="col-md-4"><img src={img1} style={{width:"50%"}}/></div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12" ><h4 className="list-group-item-heading">Name</h4></div>
                                        </div>
                                        <div className="row" style={{padding:"20"}}>
                                            <div className="col-md-6"><p className="list-group-item-text">Location</p></div>
                                            <div className="col-md-6"><p className="list-group-item-text">Description and Rating</p></div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                Contact Number
                                            </div>
                                        </div>
                                        <div className="row" style={{padding:"40"}}>
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
            </div>
        )
    }
}

export default SearchResultPage;