import React, { Component } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { Container, Header } from "./style";

class ContactBook extends Component {
  state = {
    contacts: [],
    page: 1,
  };

  icncrementPage() {
    if (this.state.page > 10) return;
    this.setState({
      page: this.state.page + 1,
    });
  }

  decrementPage() {
    if (this.state.page < 2) return;
    this.setState({
      page: this.state.page - 1,
    });
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = (newContact) => {
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  deleteContact = (deletedContact) => {
    this.setState({
      contacts: this.state.contacts.filter(
        (contact) => contact.id !== deletedContact.id
      ),
    });
  };

  render() {
    return (
      <>
        <Header>Contact Book</Header>
        <Container>
          <div>
            <ContactForm addNewContact={this.addNewContact} />
          </div>
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </Container>
      </>
    );
  }
}

export default ContactBook;
