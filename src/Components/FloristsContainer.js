import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class FloristsContainer extends React.Component {
    render() {
        
        let allFloristsCards = this.props.searchResults.map((florist) => {
            return(
                <MDBCol >
                    <MDBCard style={{ width: "22rem", background:"white", border:"solid" }}>
                        <MDBCardImage className="img-fluid" src={florist.image_url ? florist.image_url : null} style={{ width: "22rem" }} waves />
                        <MDBCardBody>
                            <MDBCardTitle>{florist.name}</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                
            )
        })

        return <div className="florists-container">{allFloristsCards}</div>
    }
}