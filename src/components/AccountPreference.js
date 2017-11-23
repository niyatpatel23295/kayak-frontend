import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import MyAccount2 from '../images/MyAccount2.png';
import Signup from './Signup';
import UpdateAccount from './UpdateAccount'
import Payment from './Payment';

class AccountPreference extends Component {
    state = {
        userId: 'U1090',
        firstName: 'Xyz',
        lastName: 'Abc',
        address: '101 San Fernando',
        city: 'San Jose',
        zipCode: 95112,
        phoneNo: '669-212-1567',
        email: 'abc@gmail.com'
    }

    render() {
        return (
            <div>
                <Route exact path="/AccountPreference" render={() => (
                    <div>
                        <div className='col-md-12'>
                            <h1>Account Preferences
                                <hr/>
                            </h1>
                        </div>
                        <div className='col-md-2' style={{backgroundColor: '#F7F9FA'}}>
                            <br/>
                            <a href='#'><h3>Your Personal Info</h3></a><br/><br/>
                            <a href='/Payment'><h3>Payments</h3></a><br/><br/>
                            <a href="/UpdateAccount"><h3>Update Info</h3></a>
                        </div>
                        <div className='col-md-10'>
                            <div className='col-md-8' style={{textAlign: 'Left', paddingTop: 25}}>
                                <label className='col-md-5' style={{fontSize: 15}}>User ID : </label>
                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.userId}</text>
                                <br/><br/>
                                <label className='col-md-5' style={{fontSize: 15}}>First Name : </label>
                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.firstName}</text>
                                <br/><br/>
                                <label className='col-md-5' style={{fontSize: 15}}>Last Name : </label>
                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.lastName}</text>
                                <br/><br/>
                                <label className='col-md-5' style={{fontSize: 15}}>Address : </label>
                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.address}</text>
                                <br/><br/>
                                <label className='col-md-5' style={{fontSize: 15}}>City : </label>
                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.city}</text>
                                <br/><br/>
                                <label className='col-md-5' style={{fontSize: 15}}>ZipCode : </label>
                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.zipCode}</text>
                                <br/><br/>
                                <label className='col-md-5' style={{fontSize: 15}}>Phone Number : </label>
                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.phoneNo}</text>
                                <br/><br/>
                                <label className='col-md-5' style={{fontSize: 15}}>Email : </label>
                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.email}</text>
                                <br/><br/>
                            </div>
                            <div className='col-md-4'>
                                <img src={MyAccount2} width={150}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 ">
                                <form className="form-horizontal">
                                    <fieldset>

                                        <legend>User profile form requirement</legend>

                                        <div className="form-group">
                                            <label className="col-md-4 control-label">Name (Full name)</label>
                                            <div className="col-md-4">
                                                <div className="input-group">
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-user">
                                                        </i>
                                                    </div>
                                                    <input id="Name (Full name)" name="Name (Full name)" type="text"
                                                           placeholder="Name (Full name)"
                                                           className="form-control input-md"/>
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
                                                           placeholder="Email Address"
                                                           className="form-control input-md"/>

                                                </div>

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
                            <div className="col-md-2 hidden-xs">
                                <img src="http://websamplenow.com/30/userprofile/images/avatar.jpg"
                                     className="img-responsive img-thumbnail "/>
                            </div>


                        </div>
                    </div>
                )}/>
                <Route exact path="/Signup" render={() => (
                    <Signup/>
                )}/>
                <Route exact path="/UpdateAccount" render={() => (
                    <UpdateAccount />
                )}/>
                <Route exact path="/Payment" render={() => (
                    <Payment/>
                )}/>

            </div>
        );
    }
}

export default withRouter(AccountPreference);