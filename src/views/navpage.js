import React from 'react';
import '@/assets/style/App.scss';
import {
  NavLink
} from 'react-router-dom'
import Header from '@/components/common/header';

function hocNavbar(WrappedComponent,routerList) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        routerList: routerList
      };
    }

    render() {
      const { routerList } = this.state;
      const navList = routerList.map((item)=>{
        return (
          <WrappedComponent key={item.to} data={item} />
        )
      })
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return navList;
    }
  }
}

function subNavbar(props){
  const { data } = props;
  return (
    <div className="home-wrap">
      <NavLink className="home-item" style={data.style} to={data.to}>{data.name}</NavLink>
    </div>
  )
}

const HocNavbar = hocNavbar(subNavbar,[
  {to: "/home", name: '首页'},
  {to: "/lifeCycle", name: '生命周期'},
  {to: "/hoc", name: '高阶组件',style: {color: 'red'}},
  {to: "/list", name: '列表'},
  {to: "/demo", name: '测试页'},
  {to: "/formDemo", name: '表单demo页'},
  {to: "/boilingVerdict", name: '温度状态提升demo页'},
  {to: "/price", name: '价格测试'},
  {to: "/todolist", name: 'todolist测试'},
  {to: "/context", name: 'context 全局props'},
  {to: "/fragments", name: 'fragments 标签容器'},
  {to: "/optimizing", name: 'Optimizing 性能优化'},
  {to: "/refs", name: 'refs & DOM'},
  {to: "/renderProps", name: 'render props'}
]);

class Home extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="demoApp">
        <Header history={history} docTitle="首页" />
        <section>
          <HocNavbar/>
        </section>
      </div>
    )
  }
}

export default Home;
