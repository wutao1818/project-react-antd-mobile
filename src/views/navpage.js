import React from 'react'
import '@/assets/App.scss';
import {
  NavLink
} from 'react-router-dom'
import Header from '@/components/common/header';

class Home extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="demoApp">
        <Header history={history} docTitle="首页" />
        <section>
          <div className="home-wrap">
            <NavLink className="home-item" to="/details">去详情页</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/list">去列表页</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/demo">去测试页</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/home">去首页</NavLink>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
