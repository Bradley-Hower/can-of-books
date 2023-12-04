import React from 'react';
import axios from 'axios';

import { Button, Carousel } from 'react-bootstrap';

const BACKEND_SEVER = import.meta.env.VITE_SERVER

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteBook = (id) => {
    const url = `${BACKEND_SEVER}/books/${id}`
    axios.delete(url)
    const updatedBooks = this.props.books.filter(book => book._id !== id);
    this.props.setState({books: updatedBooks});
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
            src="/main/images/image.png"
            alt="First slide" 
            />
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>{book.status}</p>
              <Button variant="danger" onClick={() => (this.deleteBook(book._id))}>Delete</Button>
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
