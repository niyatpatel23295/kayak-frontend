import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import * as API from '../api/API';

class Payment extends Component{

    state = {
        cardNo: '',
        cardName: '',
        expiryDate: '',
        cvc: ''
    };

    componentWillMount(){
        this.setState({
            cardNo: '',
            cardName: '',
            expiryDate: '',
            cvc: ''
        });
    }

    handleSubmitPaymentDetails = (userdata) => {
        API.SubmitPaymentDetails(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        message: "Details submitted successfully..!!"
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        message: "Error.. Try again..!!"
                    });
                }
            });
    };

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4">
                            <br/><br/>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="row">
                                        <h3 className="text-center">Payment Details</h3>
                                        <img className="img-responsive cc-img" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png" style={{height:80}}/>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="form-group">
                                                    <label>CARD NUMBER</label>
                                                    <div className="input-group">
                                                        <input type="tel" className="form-control" placeholder="Valid Card Number"
                                                               value={this.state.cardNo}
                                                               onChange={(event) => {
                                                                   this.setState({
                                                                       cardNo: event.target.value
                                                                   });
                                                               }} />
                                                        <span className="input-group-addon"><span className="fa fa-credit-card" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-7 col-md-7">
                                                <div className="form-group">
                                                    <label><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                                                    <input type="tel" className="form-control" placeholder="MM / YY"  value={this.state.expiryDate}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   expiryDate: event.target.value
                                                               });
                                                           }} />
                                                </div>
                                            </div>
                                            <div className="col-xs-5 col-md-5 pull-right">
                                                <div className="form-group">
                                                    <label>CV CODE</label>
                                                    <input type="tel" className="form-control" placeholder="CVC" value={this.state.cvc}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   cvc: event.target.value
                                                               });
                                                           }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="form-group">
                                                    <label>CARD OWNER</label>
                                                    <input type="text" className="form-control" placeholder="Card Owner Names" value={this.state.cardName}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   cardName: event.target.value
                                                               });
                                                           }} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="panel-footer">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <button className="btn btn-warning btn-lg btn-block" onClick={() => this.handleSubmitPaymentDetails(this.state)}>Process payment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>)
    }
}

export default withRouter(Payment);
