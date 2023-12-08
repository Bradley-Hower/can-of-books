import React from 'react';
import axios from 'axios';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';
import { Button, Carousel } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

const BACKEND_SEVER = import.meta.env.VITE_SERVER

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostForm: false,
      showUpdateForm: false,
      bookToUpdate: {},
      books: [],
    }
  }

  async componentDidMount(){
    this.getBooks();
  }



  getToken = () => {
    return this.props.auth0.getIdTokenClaims()
      .then(res => res.__raw)
      .catch(err => console.error(err))
  }

  getBooks = async () => {
    try {
      const jwt = await this.getToken();
      const config = {
        headers: {'Authorization':`Bearer ${jwt}`}
      }
      const bookData = await axios(`${BACKEND_SEVER}/books`, config);
      this.setState({ books: bookData.data});
    }
    catch (err) { console.error(err)}
  }

  postBook = async (newBook) => {
    try {
      const jwt = await this.getToken();
      const config = {
        headers: {'Authorization': `Bearer ${jwt}`}
      }
      const url = `${BACKEND_SEVER}/books`
      let createdBook = await axios.post(url, newBook, config)
      this.setState({ books: [...this.state.books, createdBook.data]})
    }
    catch (err) { console.error(err)}
  }


  updateBook = (bookToUpdate) => {
    const url = `${BACKEND_SEVER}/books/${bookToUpdate._id}`
    axios.put(url, bookToUpdate)
    const updateBooks = this.state.books.map(oldBook => oldBook._id === bookToUpdate._id ? bookToUpdate : oldBook);
    this.setState({books: updateBooks});
  }

  deleteBook = (id) => {
    const url = `${BACKEND_SEVER}/books/${id}`
    axios.delete(url)
    const updatedBooks = this.state.books.filter(book => book._id !== id);
    this.setState({books: updatedBooks});
  }

  hidePostForm = () => {
    this.setState({ showPostForm: false})
  }

  hideUpdateForm = () => {
    this.setState({ showUpdateForm: false})
  }

  render() {

    return (
      
      <>
      {this.state.books.length === 0 ? (
        <h1>No Books Found. Try again later. </h1>
      ) : (
      <Carousel>
        {this.state.books.length > 0 && this.state.books.map((book) => ( 
          <Carousel.Item key={book._id}>
          <img width={600} height={400}
            className="d-block w-100"
            src="https://raw.githubusercontent.com/Bradley-Hower/can-of-books-frontend/main/images/image.png"
            alt="First slide" 
            />
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>{book.status}</p>
              <Button variant="secondary" onClick={() => this.setState({
                showUpdateForm: true,
                bookToUpdate: book
              })}>Update Book</Button>
              <Button variant="danger" onClick={() => this.deleteBook(book._id)}>Delete</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}

      </Carousel>
      )}
      <br />
      <div class="submitbutton">
      <Button onClick={() => this.setState({showPostForm: true})}>Add Book</Button>
      <AddBook showPostForm={this.state.showPostForm} hidePostForm={this.hidePostForm} postBook={this.postBook} />
      <UpdateBook showUpdateForm={this.state.showUpdateForm} hideUpdateForm={this.hideUpdateForm} bookToUpdate={this.state.bookToUpdate} updateBook={this.updateBook} />
      </div>
      <br />
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      </>
    )
  }
}

export default withAuth0(BestBooks);
