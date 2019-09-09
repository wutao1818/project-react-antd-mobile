import React from 'react';
import {
  Facebook,
  Code,
  List,
  BulletList
} from 'react-content-loader';

class Skeleton extends React.Component {
  render() {
    return (
      <React.Fragment>
          <h1>玩命加载中...</h1>
          <section>
            <Facebook animate={false} />
            <Code />
            <List />
            <BulletList />
          </section>
        </React.Fragment>
    )
  }
}

export default Skeleton;