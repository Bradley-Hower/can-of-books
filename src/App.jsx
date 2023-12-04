import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';
import AddBook from './AddBook';

import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const BACKEND_SEVER = import.meta.env.VITE_SERVER

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      books: [],
    }
  }

  componentDidMount(){
    axios.get(`${BACKEND_SEVER}/books`)
      .then(res => this.setState({books: res.data}))
  }

  postBook = (newBook) => {
    const url = `${BACKEND_SEVER}/books`
    axios.post(url, newBook)
    .then(res => this.setState({ dogs: [...this.state.dogs, res.data]}))
  }



  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks books={this.state.books}/>}
            >              
            </Route>
            <Route 
              exact path="/about"
              element={<About />}
            >              
            </Route>
            <Route 
              exact path="/books"
              element={<BestBooks deleteBook={this.deleteBook} books={this.state.books} />}
            >
            </Route>  

          </Routes>
                <div class="submitbutton">
                <Button onClick={this.toggleForm}>Add Book</Button>
                <AddBook showForm={this.state.showForm} toggleForm={this.toggleForm} postBook={this.postBook} />

                </div>
                <br />
          <Footer />
        </Router>


      </>
    )
  }
}

export default App;
