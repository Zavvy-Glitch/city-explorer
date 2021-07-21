import axios from 'axios';
import cors from 'cors';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css';
// import Weather from 'Weather.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {},
      map: '',
      weather: []

    }
  }

  getLocation = async (e) => {
    e.preventDefault();
      try {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log('Location IQ Data:', response);
    this.setState({ location: response.data[0]})
    } catch {
      window.alert("ERROR: Unable  to Compute!")
    }

    const map = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=18`
    const respond = await axios.get(map);
    console.log(respond);
    this.setState({ map: respond.config.url})
   
    const weather = `http://localhost:3333/weather?key=${this.state.searchQuery}`
    const response = await axios.get(weather);
    this.setState({weather: response.data})
  }



  render() {
    return (
      <>
      <Form id="form">
        <Form.Control size="lg" placeholder="Type City to Search Here...." onChange={(e) => this.setState({searchQuery: e.target.value})}  type="text"/>
        <Button id="button" onClick={this.getLocation}>Explore!</Button>
        <Form.Text id="letters"><br />
        Location: {this.state.location.display_name}<br />
        Longitude: {this.state.location.lon}<br />
        Latitude: {this.state.location.lat}<br />
        </Form.Text>
      </Form>  

      <Card  style={{ width: '20rem' }}>
        <Card.Img id="card" variant="top" src={this.state.map} />
      </Card>
      </>
    )
  }

}



export default App;
