import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
class UpdateAccount extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-10 ">
                        <form className="form-horizontal">
                            <fieldset>

                                <legend>Update Your Kayak Account Information</legend>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">Name (Full name)</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-user">
                                                </i>
                                            </div>
                                            <input id="Name (Full name)" name="Name (Full name)" type="text" placeholder="Name (Full name)" className="form-control input-md"/>
                                        </div>


                                    </div>


                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">Upload photo</label>
                                    <div className="col-md-4">
                                        <input id="Upload photo" name="Upload photo" className="input-file" type="file"/>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="col-md-4 control-label col-xs-12">Address</label>
                                    <div className="col-md-2  col-xs-4">
                                        <input id="Address" name="Address" type="text" placeholder="District" className="form-control input-md "/>
                                    </div>

                                    <div className="col-md-2 col-xs-4">

                                        <input id="Address" name="Address" type="text" placeholder="Area" className="form-control input-md "/>
                                    </div>


                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label"/>
                                    <div className="col-md-2  col-xs-4">
                                        <input id="Permanent Address" name="Permanent Address" type="text" placeholder="Street" className="form-control input-md "/>

                                    </div>




                                </div>



                                <div className="form-group">
                                    <label className="col-md-4 control-label">Phone number </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-phone"/>

                                            </div>
                                            <input id="Phone number " name="Phone number " type="text" placeholder="Primary Phone number " className="form-control input-md"/>

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
                                            <input id="Email Address" name="Email Address" type="text" placeholder="Email Address" className="form-control input-md"/>

                                        </div>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" />
                                    <div className="col-md-4">
                                        <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-thumbs-up"/> Submit</a>
                                        <a href="#" className="btn btn-danger" value=""><span className="glyphicon glyphicon-remove-sign"/> Clear</a>

                                    </div>
                                </div>

                            </fieldset>
                        </form>
                    </div>
                    <div className="col-md-2 hidden-xs">
                        <img src="http://websamplenow.com/30/userprofile/images/avatar.jpg" className="img-responsive img-thumbnail "/>
                    </div>


                </div>
            </div>
        )
    }
}

export default withRouter(UpdateAccount);