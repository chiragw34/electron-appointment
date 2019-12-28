import React, { Component } from 'react'
import { Menu } from "semantic-ui-react";

class SideBar extends Component {
  state = { activeItem: "Today" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.onViewChange(name);
  };

  render() {
     const { activeItem } = this.state;
    return (
      <Menu pointing vertical>
        <Menu.Item
          name="Today"
          active={activeItem === "Today"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Create"
          active={activeItem === "Create"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="List"
          active={activeItem === "List"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default SideBar
