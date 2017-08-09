import React, { Component } from 'react';
import './index.css'
import image from './bubble.svg';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className="cardTop">
                    <img src={image} className="bubbleSVG" alt="bubble svg" />
                    {this.props.children}
                </div>
                <div className="cardBottom">{this.props.description}</div>
            </div>
        )
    }
}

export default Card