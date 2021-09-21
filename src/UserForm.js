import React from "react";
import { Form, } from "semantic-ui-react";
import { UserConsumer } from "./UserProvider";

class UserForm extends React.Component {
  state = { 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email, 
    avatar: this.props.avatar
  };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...this.state, };
    this.props.updateUser(user);
  }
  
  render() {
    const { firstName, lastName, email, avatar } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
         <Form.Select
          label="Avatar"
          name="avatar"
          value={avatar}
          onChange={this.handleChange}
          options={avatarOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const avatarOptions = [
  { text: "Spot Cat", value: <img src="https://robohash.org/sing.png?set=set4" alt="Spot Cat" />, },
  { key: "s", text: "Investigator Cat", value: <img src="https://robohash.org/dog.png?set=set4" alt="Investigator Cat" />, },
  { key: "g", text: "Jamming Cat", value: <img src="https://robohash.org/purple.png?set=set4" alt="Jamming Cat" />, },
  { key: "p", text: "Scribe Cat", value: <img src="https://robohash.org/grass.png?set=set4" alt="Scribe Cat" />, },
];

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
          { ...props }
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
          avatar={value.avatar}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}


export default ConnectedUserForm;