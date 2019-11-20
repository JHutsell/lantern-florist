import React from 'react';
import Routes from '../Routes/routes';
import FloristsContainer from './FloristsContainer';
import {Form, FormControl, Button} from 'react-bootstrap';


export default class Home extends React.Component {
    state = {
        searchLocation: '',
        searchResults: [],
        searched: false
    }

    handleSearchInput = (e) => {
        this.setState({
            searchLocation: e.target.value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        fetch(Routes.cors + Routes.yelpSearch + "&location=" + this.state.searchLocation, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json",
                "Authorization" : process.env.REACT_APP_YELP_API_KEY
            }
        }).then(resp => resp.json())
        .then(data => {
            this.setState({
                searched: true,
                searchResults: []
            })

            if(data.businesses) 
            this.setState({
                searchResults : data.businesses,
            })
        })
    }

    handleGeoLocation = (e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {
            localStorage.lat = position.coords.latitude
            localStorage.long = position.coords.longitude
        })
        fetch(Routes.cors + Routes.yelpSearch + `&latitude=${localStorage.lat}&longitude=${localStorage.long}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json",
                "Authorization" : process.env.REACT_APP_YELP_API_KEY
            }
        }).then(resp => resp.json())
        .then(data => {
            this.setState({
                searched: true,
                searchResults: []
            })

            if(data.businesses) 
            this.setState({
                searchResults : data.businesses,
            })
        })
    }

    render() {

        return(
            <div>
                <h1>Let us Help you find your Floral Arrangement</h1>
                <Form onSubmit={this.handleSearchSubmit} inline>
                    <br />
                    <FormControl type="text" onChange={ this.handleSearchInput } value={ this.state.searchLocation }  placeholder="Search" className="mr-sm-2" />
                    <br />
                    <Button type="submit">Locate Florists</Button>
                    <br />
                    <Button type="submit" onClick={this.handleGeoLocation}>Use Current Location</Button>
                </Form>
                <br />
                    {!this.state.searched ? 
                        <div className="home-no-search">
                            <img src={require('../Images/funeral-flower.jpeg')} />
                        </div> 
                            : 
                        null
                    }
                
                    {this.state.searched && this.state.searchResults.length === 0
                    ?
                    <div className="home-no-search">
                    <h3>Sorry, No results Found</h3>
                    </div>
                    :
                    <FloristsContainer searchResults={ this.state.searchResults } history={this.props.history} />
                    } 
            </div>
            
        )
    }
}