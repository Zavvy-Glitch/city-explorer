import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {},
    

    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log('Location IQ Data:', response);
    this.setState({ location: response.data[0]})
  }

  render() {
    return (
      <>
      <input onChange={(e) => this.setState({searchQuery: e.target.value})} placeholder="Type City to Search Here...." type="text"/>
      <button onClick={this.getLocation}>Explore!</button>

      <p>Location: {this.state.location.display_name}</p>
      <p>Longitude: {this.state.location.lon}</p>
      <p>Latitude: {this.state.location.lat}</p>
      </>
    )
  }

}



export default App;
