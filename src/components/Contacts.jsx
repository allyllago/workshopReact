import React, { Component } from 'react';
import './Contacts.css'

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [{
        name: "Ale",
        surname: "Llago",
        mail: "ale@ale.com"
      }, {
        name: "Lena",
        surname: "Barañao",
        mail: "lena@lena.com"
      }, {
        name: "Luz",
        surname: "Rodriguez",
        mail: "luz@luz.com"
      }],
      newContact: {
        name: "",
        surname: "",
        mail: ""
      }
    };
    this.handleChange = this.handleChange.bind(this)
    this.addContact = this.addContact.bind(this)
  }


  getContacts() {
    let results = this.state.contacts.map((contact, i) => {
      return (<div key={i} className="contactCard">
        <p>Nombre: {contact.name}</p>
        <p>Apellido: {contact.surname}</p>
        <p>Mail: {contact.mail}</p>
      </div>)
    })
    return results
  }
  handleChange(event) {
    
    let value = event.target.value
    if (event.target.name === "name") {
      this.setState({
        newContact: {
          name: value,
          surname: this.state.newContact.surname,
          mail: this.state.newContact.mail,
        }
      })
    }
    else if (event.target.name === "surname") {
      this.setState({
        newContact: {
          name: this.state.newContact.name,
          surname: value,
          mail: this.state.newContact.mail,
        }
      })
    }
    else {
      this.setState({
        newContact: {
          name: this.state.newContact.name,
          surname: this.state.newContact.surname,
          mail: value,
        }
      })
    }
  }

  addContact(e) {
    e.preventDefault()
    this.setState({
      contacts: [...this.state.contacts, this.state.newContact],
      newContact: {
        name: "",
        surname: "",
        mail: ""
      }
    })

  }

  render() {
    return (
      <React.Fragment>
        <div className="prueba">
        <h1>Mis Contactos</h1>
        <div className="container">
          {this.getContacts()}
        </div>
        <div>
          <h2>Agregar Contacto Nuevo</h2>
          <form className="form">
            <label>
              Nombre:
              <input type="text" name="name" value={this.state.newContact.name} onChange={this.handleChange} />
            </label>
            <label>
              Apellido:
              <input type="text" name="surname" value={this.state.newContact.surname} onChange={this.handleChange} />
            </label>
            <label>
              Mail:
              <input type="email" name="mail" value={this.state.newContact.mail} onChange={this.handleChange} />
            </label>
            <button  onClick={this.addContact}>Agregar</button>
          </form>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;