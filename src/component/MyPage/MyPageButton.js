import React, { Component } from 'react';
import './MyPageButton.css';

class MyPageButton extends Component {
    moveMyPage = ()=>{
        console.log('move my page');
    }

    render() {
        return (
             <div className='my-page-button' onClick={this.moveMyPage}>My Page</div>
        );
    }
}

export default MyPageButton;
