// show page for florist
import React from 'react';

export default class FloristDetail extends React.Component {
    
    
    render() {
        let floristDetail = JSON.parse(localStorage.clickedFlorist)
        console.log(floristDetail)
        let displayAddress = floristDetail.location.display_address.join(", ");
        return(
            <div>
                <h1>{floristDetail.name}</h1>
                <img src={floristDetail.image_url}/>
                <h1>{displayAddress}</h1>
                <h1>{floristDetail.display_phone}</h1>
                <h1>Price: {floristDetail.price}</h1>
                <h1>Rating (1-5): {floristDetail.rating}</h1>
            </div>
        )
    }
}