import React from 'react';
import './index.scss';

class Header extends React.Component {
  render() {
    const { history, docTitle } = this.props;
    return <header><span onClick={history.goBack}></span>{ docTitle }</header>;
  }
}

export default Header;
