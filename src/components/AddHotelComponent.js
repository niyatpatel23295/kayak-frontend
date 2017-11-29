import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class AddHotelComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 ">
                        <form className="form-horizontal">
                            <fieldset>
                                <legend>Add Hotels</legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Hotel Name </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-user">
                                                </i>
                                            </div>
                                            <input id="Hotel Name" name="hotelName" type="text"
                                                   placeholder="Hotel Name" className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Upload photo</label>
                                    <div className="col-md-4">
                                        <input id="Upload photo" name="Upload photo" className="input-file"
                                               type="file"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label col-xs-12">Address</label>
                                    <div className="col-md-2  col-xs-4">
                                        <input id="Address" name="Address" type="text" placeholder="District"
                                               className="form-control input-md "/>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <input id="Address" name="Address" type="text" placeholder="Area"
                                               className="form-control input-md "/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label"/>
                                    <div className="col-md-2  col-xs-4">
                                        <input id="Permanent Address" name="Permanent Address" type="text"
                                               placeholder="Street" className="form-control input-md "/>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <input id="Address" name="Address" type="text" placeholder="ZipCode"
                                               className="form-control input-md "/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Phone number </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-phone"/>
                                            </div>
                                            <input id="Phone number " name="Phone number " type="text"
                                                   placeholder="Primary Phone number "
                                                   className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Email Address</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-envelope-o"/>
                                            </div>
                                            <input id="Email Address" name="Email Address" type="text"
                                                   placeholder="Email Address" className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Hotel Stars</label>
                                    <div className="col-md-4" style={{textAlign: "left"}}>
                                        <Rater total={5} rating={2}/>
                                    </div>
                                </div>


                                <legend>Room Details</legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Room Type </label>
                                    <div className="col-md-2">
                                        <label className="col-form-label">Delux </label>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <input id="Room number" name="Room number" type="text"
                                                   placeholder="Number Of Rooms" className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label"/>
                                    <div className="col-md-2">
                                        <label className="col-form-label">Premium </label>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <input id="Room number" name="Room number" type="text"
                                                   placeholder="Number Of Rooms" className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label"/>
                                    <div className="col-md-2">
                                        <label className="col-form-label">Standard </label>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <input id="Room number" name="Room number" type="text"
                                                   placeholder="Number Of Rooms" className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Room photo</label>
                                    <div className="col-md-4">
                                        <input id="Upload photo" name="roomPhtoto" className="input-file"
                                               type="file"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Room number </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input id="Room number" name="Room number" type="text"
                                                   placeholder="Room number"
                                                   className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label"> Description </label>
                                    <div className="col-md-2  col-xs-4">
                                        <input id="description" name="description" type="text"
                                               placeholder="description" className="form-control input-md "/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label"/>
                                    <div className="col-md-4">
                                        <a href="#" className="btn btn-success"><span
                                            className="glyphicon glyphicon-thumbs-up"/> Submit</a>
                                        <a href="#" className="btn btn-danger" value=""><span
                                            className="glyphicon glyphicon-remove-sign"/> Clear</a>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddHotelComponent);