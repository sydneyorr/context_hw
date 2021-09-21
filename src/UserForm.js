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
  }
  
  render() {
    const { firstName, lastName, email, avatar } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="New Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="New Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

export default UserForm;


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
        />
      )}
    </UserConsumer>
  )
}


export default ConnectedUserForm;