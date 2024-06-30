import React, { Component } from "react";
import { ContainerForm, Input, Button } from "./style";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const newContact = {
      id: Date.now(),
      name: name,
      number: number,
    };

    this.props.addNewContact(newContact);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <ContainerForm onSubmit={this.handleSubmit}>
          <label htmlFor="">Name:</label>
          <Input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            type="text"
          />
          <label htmlFor="">Number:</label>
          <Input
            onChange={this.handleChange}
            value={this.state.number}
            name="number"
            type="text"
          />
          <Button type="submit">Add</Button>
        </ContainerForm>
      </>
    );
  }
}

export default ContactForm;
