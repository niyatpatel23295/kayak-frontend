import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import * as API from '../api/API';
class Signup extends Component{

    state = {
        userID: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNo: '',
        email: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            userID: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            phoneNo: '',
            email: '',
            password: ''
        });
    }

    handleSubmit = (userdata) => {
        API.doSignUp(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    render(){
        return(
            <div className="container">
                <h1 className="well">Sign Up</h1>
                <div className="col-lg-12 well">
                <div className="row">
                    <div className="col-md-8 ">
                        <form className="form-horizontal">
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">User ID</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-user">
                                                </i>
                                            </div>
                                            <input id="userID" type="text" placeholder="User ID" value={this.state.userID}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           userID: event.target.value
                                                       });
                                                   }} className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">First Name</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input id="firstName" type="text" placeholder=" First Name " value={this.state.firstName}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           firstName: event.target.value
                                                       });
                                                   }} className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">Last Name</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input id="lastName" type="text" placeholder="Last Name" value={this.state.lastName}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           lastName: event.target.value
                                                       });
                                                   }} className="form-control input-md"/>
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
                                        <input id="address" type="text" placeholder="Address" value={this.state.address}
                                               onChange={(event) => {
                                                   this.setState({
                                                       address: event.target.value
                                                   });
                                               }} className="form-control input-md "/>
                                    </div>

                                    <div className="col-md-2 col-xs-4">
                                        <input id="city" type="text" placeholder="City" value={this.state.city}
                                               onChange={(event) => {
                                                   this.setState({
                                                       city: event.target.value
                                                   });
                                               }} className="form-control input-md "/>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label"/>
                                    <div className="col-md-2  col-xs-4">
                                        <input id="state" type="text" placeholder="State" value={this.state.state}
                                               onChange={(event) => {
                                                   this.setState({
                                                       state: event.target.value
                                                   });
                                               }} className="form-control input-md "/>
                                    </div>

                                    <div className="col-md-2 col-xs-4">
                                        <input id="zipCode" type="text" placeholder="Zip Code" value={this.state.zipCode}
                                               onChange={(event) => {
                                                   this.setState({
                                                       zipCode: event.target.value
                                                   });
                                               }} className="form-control input-md "/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">Phone number </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <div className="input-group-addon">
                                                <i className="fa fa-phone"/>

                                            </div>
                                            <input id="Phone number " type="text" placeholder="Phone number " value={this.state.phoneNo}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           phoneNo: event.target.value
                                                       });
                                                   }} className="form-control input-md"/>
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
                                            <input id="Email Address" type="text" placeholder="Email Address" value={this.state.email}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           email: event.target.value
                                                       });
                                                   }} className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">Password</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input id="password" type="password" placeholder="Password" value={this.state.password}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           password: event.target.value
                                                       });
                                                   }} className="form-control input-md"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" />
                                    <div className="col-md-4">
                                        <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-thumbs-up"/> Submit</a>


                                    </div>
                                </div>

                            </fieldset>
                        </form>
                    </div>
                    <div className="col-md-4 hidden-xs">
                        <img src="http://websamplenow.com/30/userprofile/images/avatar.jpg" className="img-responsive img-thumbnail "/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);
