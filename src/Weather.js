import React from 'react';
import Card from 'react-bootstrap/Card'

class Weather extends React.Component{
render() {
  return(
      <>
      {this.props.weather.map((value, idx) =>
        <Card  key={idx} style={{ width: '20rem' }}>
          <Card.Body>
          <Card.Text>{value.date}</Card.Text>
          <Card.Text>{value.description}</Card.Text>
          <Card.Text>{value.temprature}</Card.Text>
          <Card.Text>{value.uv}</Card.Text>
          </Card.Body>
        </Card>
        )}
      </>
    );
  }
}




export default Weather;