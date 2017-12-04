import React, {Component} from 'react';

import {Route, withRouter} from 'react-router-dom';

import MyAccount2 from '../images/MyAccount2.png';

import Signup from './Signup';

import UpdateAccount from './UpdateAccount'

import Payment from './Payment';

import * as API from '../api/API';



class BookingDetails extends Component {

    state = {

        userId: 'U1090',

        userName: 'Xyz',

        hotel_Name: '',

        price: '',

        roomType: '',

        roomNo: '',

        roomDesc: '',

        checkInDate: '',

        checkOutDate: '',

        bookingType: ''

    }



    componentDidMount() {

        API.getBookingDetails()

            .then((data) => {

                console.log(data.data[0]);

                this.setState({

                    userId: data.data.userId ,

                    userName: data.data.userName,

                    hotel_Name: data.data.hotel_Name,

                    price: data.data.price,

                    roomType: data.data.roomType,

                    roomNo: data.data.roomNo,

                    roomDesc: data.data.roomDesc,

                    checkInDate: data.data.checkInDate,

                    checkOutDate: data.data.checkOutDate,

                    bookingType: data.data.bookingType



                });

            });

    };





    render() {

        return (

            <div>

                <Route exact path="/bookingDetails" render={() => (

                    <div>

                        <div className='col-md-12'>

                            <h1>Booking Details

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

                                <label className='col-md-5' style={{fontSize: 15}}>User Name : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.userName}</text>

                                <br/><br/>

                                <label className='col-md-5' style={{fontSize: 15}}>Hotel Name : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.hotel_Name}</text>

                                <br/><br/>

                                <label className='col-md-5' style={{fontSize: 15}}>Price : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.price}</text>

                                <br/><br/>

                                <label className='col-md-5' style={{fontSize: 15}}>Room Type : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.roomType}</text>

                                <br/><br/>

                                <label className='col-md-5' style={{fontSize: 15}}>Room Number : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.roomNo}</text>

                                <br/><br/>

                                <label className='col-md-5' style={{fontSize: 15}}>Room Description : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.roomDesc}</text>

                                <br/><br/>

                                <label className='col-md-5' style={{fontSize: 15}}>Check In Date : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.checkInDate}</text>

                                <br/><br/>

                                <label className='col-md-5' style={{fontSize: 15}}>Check Out Date : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.checkOutDate}</text>

                                <br/><br/>

                                <label className='col-md-5' style={{fontSize: 15}}>Booking Type : </label>

                                <text className='col-md-7' style={{fontSize: 15}}>{this.state.bookingType}</text>

                                <br/><br/>



                            </div>

                        </div>



                    </div>

                )}/>

                <Route exact path="/Signup" render={() => (

                    <Signup/>

                )}/>

                <Route exact path="/UpdateAccount" render={() => (

                    <UpdateAccount/>

                )}/>

                <Route exact path="/Payment" render={() => (

                    <Payment/>

                )}/>

            </div>

        );

    }

}



export default withRouter(BookingDetails);