import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';
import Profile from './Profile';
import { withAuth0 } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends React.Component {

  render() {
    
    const {isAuthenticated} = this.props.auth0

    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={isAuthenticated ? <BestBooks/> : <p>Please login</p>}
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
            </Route>  .
            <Route 
              exact path="/profile"
              element={<Profile/>}
            >
            </Route>  

          </Routes>

                <br />
          <Footer />
        </Router>


      </>
    )}
}

export default withAuth0(App);
