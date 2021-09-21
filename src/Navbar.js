import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { UserConsumer } from "./UserProvider";

const Navbar = () => (
  <UserConsumer>
    { value => (
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/user">
          <Menu.Item>
            User
          </Menu.Item>
        </NavLink>
      </Menu> 
    )}
  </UserConsumer>
)

export default Navbar;
