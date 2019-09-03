import React from 'react';
import Header from '@/components/common/header';

class UserGreeting extends React.Component {
  render() {
    return <h1>Welcome back!</h1>;
  }
}

class GuestGreeting extends React.Component {
  render() {
    return <h1>Please sign up.</h1>;
  }
}

class Greeting extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
}

class LoginButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}
class LogoutButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Logout
      </button>
    );
  }
}


class NumberList extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number,index) =>
      <li key={index}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <React.Fragment>
        <Header history={this.props.history} docTitle="测试页" />
        <NumberList />
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </React.Fragment>
    );
  }
}

export default LoginControl;
