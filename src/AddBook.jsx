import React from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';

class AddBook extends React.Component {

  submitHandler = (e) => {
    e.preventDefault();

    const form = e.target;

    const newBook = {
      title: form.title.value,
      description: form.description.value,
      status: form.status.value
    };

    this.props.postBook(newBook);
  }


  render() {
    return (
      
      <>
      <Modal show={this.props.showForm} onHide={this.props.toggleForm}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <br />

        <Container>
          <Form onSubmit={this.submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" placeholder="Ex: The Cat in the Hat" />
            </Form.Group>
            <br />
            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" placeholder="Ex: The story of a humanoid cat-friend." />
            </Form.Group>
            <br />
            <Form.Group controlId="status">
              <Form.Label>Book Status (Available/Unavailable)</Form.Label>
              <Form.Control type="text" placeholder="Ex: Available/Unavailable" />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>

        <br />
        </Modal.Body>
      </Modal>
    </>
    )
  }
}

export default AddBook;
