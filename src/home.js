import React from 'react';
import Routes from './routes/routes';
import {Form, FormControl, Button} from 'react-bootstrap';


export default class Home extends React.Component {
    state = {
        searchLocation: '',
        searchResults: []
    }

    handleSearchInput = (e) => {
        this.setState({
            searchLocation: e.target.value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        fetch(Routes.cors + Routes.yelpSearch + this.state.searchLocation, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json",
                "Authorization" : process.env.REACT_APP_YELP_API_KEY
            }
        }).then(resp => resp.json())
        .then(data => {
            this.setState({
                searchResults : data.businesses
            })
        })
        
    }

    render() {

        let allFloristsList = this.state.searchResults.map((business) => {
            return <li>{business.name}</li>})

        return(
            <div>
                <Form onSubmit={this.handleSearchSubmit} inline>
                    <br />
                    <FormControl type="text" onChange={ this.handleSearchInput } value={ this.state.searchLocation }  placeholder="Search" className="mr-sm-2" />
                    <Button type="submit">Locate Florists</Button>
                </Form>
                
                    {this.state.searchResults.length === 0
                    ?
                    null
                    :
                    <ul>{allFloristsList}</ul>
                    } 

            </div>
            
        )
    }
}