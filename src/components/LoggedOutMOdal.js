import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

class LoggedOutModal extends React.Component {
    render() {
        if (this.props.isOpen === false)
            return null

        let modalStyle = {
            position: 'absolute',
            top: '20%',
            left: '90%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: '#fff',
            marginTop: '24',
            paddingRight: '0',
            marginLeft: '-65'
        }

        if (this.props.width && this.props.height) {
            modalStyle.width = this.props.width + 'px'
            modalStyle.height = this.props.height + 'px'
            modalStyle.marginLeft = '-' + (this.props.width / 2) + 'px',
                modalStyle.marginTop = '-' + (this.props.height / 2) + 'px',
                modalStyle.transform = null
        }


        if (this.props.style) {
            for (let key in this.props.style) {
                modalStyle[key] = this.props.style[key]
            }
        }

        let backdropStyle = {
            position: 'absolute',
            width: '0%',
            height: '0%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
        }

        if (this.props.backdropStyle) {
            for (let key in this.props.backdropStyle) {
                backdropStyle[key] = this.props.backdropStyle[key]
            }
        }

        return (
            <div className={this.props.containerClassName}>
                <div className={this.props.className} style={modalStyle}>
                    {this.props.children}
                </div>
                {!this.props.noBackdrop &&
                <div className={this.props.backdropClassName} style={backdropStyle}
                     onClick={e => this.close(e)}/>}
            </div>
        )
    }

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}

export default withRouter(LoggedOutModal);