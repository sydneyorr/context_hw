import React from "react"
import { Card, CardHeader } from "semantic-ui-react"
import { UserConsumer } from "./UserProvider";

const User = () => (
  <UserConsumer>
    { value => (
    <Card>
      <Card.Content>
        <CardHeader>{value.firstName} {value.lastName}</CardHeader>
      </Card.Content>
      <Card.Content>{value.avatar}</Card.Content>
      <Card.Content>{value.email}</Card.Content>
    </Card>
    )}
  </UserConsumer>
  )


export default User;