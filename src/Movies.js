import React from 'react';
import Card from 'react-bootstrap/Card'

class Movies extends React.Component{
render() {
  return(
      <>
      {this.props.movie.map((value, idx) =>
        <Card  key={idx} style={{ width: '20rem' }}>
          <Card.Body>
          <Card.Text>Movies</Card.Text>
          <Card.Text>{value.title}</Card.Text>
          <Card.Text>{value.popularity}</Card.Text>
          <Card.Text>{value.imageUrl}</Card.Text>
          <Card.Text>{value.overView}</Card.Text>
          <Card.Text>{value.averageVotes}</Card.Text>
          <Card.Text>{value.totalVotes}</Card.Text>
          <Card.Text>{value.releasedOn}</Card.Text>
          </Card.Body>
        </Card>
        )}
      </>
    );
  }
}




export default Movies;