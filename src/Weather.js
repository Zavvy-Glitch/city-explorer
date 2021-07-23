import React from 'react';
import Card from 'react-bootstrap/Card'

class Weather extends React.Component{
render() {
  return(
      <>
      <h1 id="weatherHeader">Weather Report</h1>
      <div id="weather">
      {this.props.weather.map((value, idx) =>
        <Card  key={idx} style={{ width: '8rem' }}>
          <Card.Body>
          <Card.Text>{value.date}</Card.Text>
          <Card.Text>{value.description}</Card.Text>
          <Card.Text>{value.temprature}</Card.Text>
          <Card.Text>{value.uv}</Card.Text>
          </Card.Body>
        </Card>
        )}
      </div>
    </>
    );
  }
}




export default Weather;