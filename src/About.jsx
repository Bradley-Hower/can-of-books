import { Component } from "react";

class About extends Component {

  render() {
    return (
    <>
      <p>
        <h3>Can of Books</h3>

      **Author**: Bradley Hower
      **Version**: 1.0.0 

      Books are great. Enjoy them.
      
      <h3>Project Overview</h3>

      The purpose of this application is to act as a back-end server for the City Explorer project. <a href="https://github.com/Bradley-Hower/can-of-books-frontend">https://github.com/Bradley-Hower/can-of-books-frontend</a> 
      
      This project will fully utilize a front-end, back-end, and database server.
      
      This project demonstrates the use of a NoSQL database using MongoDB as the database program and Mongoose as the schema. 
      
      Additionally, it will be a CRUD app, thus allowing for reading, creating, update and deleting of resources.
      
      To start it off, the database will be populated with seed data.</p>
    </>
    )
  }
}

export default About;
