import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/books')
      .then(res => this.setState({books: res.data}))
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >

              {/* <>
                {this.state.books.length > 0 && this.state.books.map((book) => ( 
                  <div key={book._id}>
                    {book.name} in {book.location}
                  </div>
                ))}
              </> */}
              
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
