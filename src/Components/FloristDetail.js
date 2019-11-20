import React from 'react';
import { Button } from 'react-bootstrap';

export default class FloristDetail extends React.Component {
    
    handleHomeClick = () => {
        this.props.history.push('/')
    }
    
    render() {
        let floristDetail = JSON.parse(localStorage.clickedFlorist)
        let displayAddress = floristDetail.location.display_address.join(", ");
        return(
            <div className="florist-detail">
                <h1>{floristDetail.name}</h1>
                <img src={floristDetail.image_url}/>
                <h1>{displayAddress}</h1>
                <h1>{floristDetail.display_phone}</h1>
                <h1>Price: {floristDetail.price}</h1>
                <h1>Rating (1-5): {floristDetail.rating}</h1>
                <Button onClick={ this.handleHomeClick} size="lg"> Return Home</Button>
            </div>
        )
    }
}