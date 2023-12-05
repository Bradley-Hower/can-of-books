import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks/>}
            >              
            </Route>
            <Route 
              exact path="/about"
              element={<About />}
            >              
            </Route>
            <Route 
              exact path="/books"
              element={<BestBooks/>}
            >
            </Route>  

          </Routes>

                <br />
          <Footer />
        </Router>


      </>
    )}
}

export default App;
