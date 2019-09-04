import React, { Component, Fragment } from "react";
import Contactlist from "./ContactList";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John",
          email: "John@gmail.com",
          phonenumber: "333-333-3333"
        },
        {
          id: 2,
          name: "Charles",
          email: "charles@gmail.com",
          phonenumber: "777-777-777"
        },
        {
          id: 3,
          name: "Meranda",
          email: "meranda@gmail.com",
          phonenumber: "277-777-777"
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        {contacts.map(contact => (
          <Contactlist key={contact.id} contact={contact} />
        ))}
      </Fragment>
    );
  }
}

export default Contact;
