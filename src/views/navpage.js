import React from 'react';

import Header from '@/components/common/header';
import hocNavbar from '@/components/common/nav/hocNavbar';
import subNavbar from '@/components/common/nav/subNavbar';

import routes from '@/router/routes';
const HocNavbar = hocNavbar(subNavbar,routes);

class Home extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <React.Fragment>
        <Header history={history} docTitle="首页" />
        <section>
          <HocNavbar history={history} />
        </section>
      </React.Fragment>
    )
  }
}

export default Home;
