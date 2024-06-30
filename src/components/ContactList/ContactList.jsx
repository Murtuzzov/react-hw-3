import React from "react";
import {
  List,
  ListBtn,
  ListItem,
  NumberParagraph,
  NameParagraph,
} from "./style";

const ContactList = (props) => {
  return (
    <List>
      {props.contacts.map((contact) => {
        return (
          <ListItem key={contact.id}>
            <NameParagraph>{contact.name}</NameParagraph>
            <NumberParagraph> {contact.number}</NumberParagraph>
            <ListBtn onClick={() => props.deleteContact(contact)}>
              Delete
            </ListBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
