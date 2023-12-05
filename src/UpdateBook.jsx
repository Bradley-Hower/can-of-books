import React from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';

class UpdateBook extends React.Component {

  submitHandler = (e) => {
    e.preventDefault();

    const formData = e.target;
    const bookToUpdate = this.props.bookToUpdate;

    const updatedBook = {
      title: formData.title.value || bookToUpdate.title,
      description: formData.description.value  || bookToUpdate.description,
      status: formData.status.value || bookToUpdate.status,
      _id: bookToUpdate._id
    };

    this.props.updateBook(updatedBook);
    // this.props.bookToUpdate(updatedBook);
    this.props.hideUpdateForm();
  }

  render() {
    return (
      
      <>
      <Modal show={this.props.showUpdateForm} onHide={this.props.hideUpdateForm}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <br />

        <Container>
          <Form onSubmit={this.submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" placeholder={this.props.bookToUpdate.title} />
            </Form.Group>
            <br />
            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" placeholder={this.props.bookToUpdate.description} />
            </Form.Group>
            <br />
            <Form.Group controlId="status">
              <Form.Label>Book Status (Available/Unavailable)</Form.Label>
              <Form.Control type="text" placeholder={this.props.bookToUpdate.status} />
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

export default UpdateBook;