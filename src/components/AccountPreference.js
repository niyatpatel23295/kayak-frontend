import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import MyAccount2 from '../images/MyAccount2.png';
import Signup from './Signup';
import UpdateAccount from './UpdateAccount'
import Payment from './Payment';
import BookingDetails from './BookingDetails.js';

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
                            <a href="/UpdateAccount"><h3>Update Info</h3></a><br/>
                            <a href="/bookingDetails"><h3>Booking Details</h3></a>

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
                <Route exact path="/bookingDetails" render={() => (
                    <BookingDetails />
                )}/>

            </div>
        );
    }
}

export default withRouter(AccountPreference);
