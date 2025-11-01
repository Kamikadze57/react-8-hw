import { Component } from "react";

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className="notification__text">{message}</p>;
  }
}

export default Notification;