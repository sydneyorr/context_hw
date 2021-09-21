import React from "react"
import { Card } from "semantic-ui-react"
import { UserConsumer } from "./UserProvider";

const User = () => (
  <UserConsumer>
    { value => (
 
      <Card>
        <Card.Content>{value.avatar}</Card.Content>
        <Card.Content>
          <Card.Header>{value.firstName} {value.lastName}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            {value.email}
          </Card.Description>
        </Card.Content>
      </Card>

    )}
  </UserConsumer>
  )



export default User;