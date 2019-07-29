import React from 'react';
import '@/assets/style/App.scss';
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
            <NavLink className="home-item" to="/home">首页</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/lifeCycle">生命周期</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/list">列表页</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/demo">测试页</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/formDemo">表单demo</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/boilingVerdict">温度状态提升demo</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/price">价格测试 demo</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/todolist">todolist demo</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/context">context 全局props</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/fragments">fragments 标签容器</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/optimizing">Optimizing 性能优化</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/refs">refs & DOM</NavLink>
          </div>
          <div className="home-wrap">
            <NavLink className="home-item" to="/renderProps">render props</NavLink>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
