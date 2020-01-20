import React, { Component } from 'react';
import Background from '../images/home_1.png'

class carroussel extends Component {
   
    render() {

        const bgStyle = { background: `url(${Background})` };

        return (
            <div className='carroussel' style={bgStyle}>
                    <div className='slogan'>A energia do sol na sua família</div>
                    
            </div>
        );
    }
}

export default carroussel;