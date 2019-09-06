import React from 'react';
import Header from '@/components/common/header';
import { Facebook, Instagram, Code, List, BulletList } from 'react-content-loader';

class Skeleton extends React.Component {
 render() {
    const { history } = this.props;
    return (
        <React.Fragment>
          <Header history={history} docTitle="todolist页" />
          <section>
	          <Facebook animate={false} />
	          <Code />
	          <List />
	          <BulletList />
            <h1>123</h1>
          </section>
        </React.Fragment>
      )
  }
}

export default Skeleton;
