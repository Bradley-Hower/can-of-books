import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      
      <>
      {this.props.books.length === 0 ? (
        <h1>No Books Found. Try again later. </h1>
      ) : (
      <Carousel>
        {this.props.books.length > 0 && this.props.books.map((book) => ( 
          <Carousel.Item key={book._id}>
          <img
            className="d-block w-100"
            src="/images/image.png"
            alt="First slide" 
            />
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>{book.status}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}

      </Carousel>
      )}

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      </>
    )
  }
}

export default BestBooks;
