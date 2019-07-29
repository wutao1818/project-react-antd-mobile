import React, { Component, Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import { connect } from 'react-redux'

// 引入页面过渡的loading组件
import Loading from '@/components/common/loading/loading';

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

// 引入懒加载路由
const List = lazy(() => import('@/views/list'));
const Navpage = lazy(() => import('@/views/navpage'));
const Demo = lazy(() => import('@/views/demos/demo'));
const FormDemo = lazy(() => import('@/views/demos/formDemo'));
const BoilingVerdict = lazy(() => import('@/views/demos/boilingVerdict'));
const Price = lazy(() => import('@/views/demos/price'));
const Todolist = lazy(() => import('@/views/demos/todolist'));
const Context = lazy(() => import('@/views/demos/context'));
const Fragments = lazy(() => import('@/views/demos/fragments'));
const Optimizing = lazy(() => import('@/views/demos/optimizing'));
const Refs = lazy(() => import('@/views/demos/refs'));
const RenderProps = lazy(() => import('@/views/demos/renderProps'));
const LifeCycle = lazy(() => import('@/views/demos/lifeCycle'));
const Hoc = lazy(() => import('@/views/demos/hoc'));


function routerHoc(WrappedComponent,routerList) {
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
          <WrappedComponent key={item.to} path={item.to} component={item.component} />
        )
      })
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return navList;
    }
  }
}

function routerItem(props){
  return (
    <Route path={props.path} component={props.component} history={history} />
  )
}

const RouterHoc = routerHoc(routerItem,[
  {to: "/home", component: Navpage},
  {to: "/lifeCycle", component: LifeCycle},
  {to: "/hoc", component: Hoc},
  {to: "/list", component: List},
  {to: "/demo", component: Demo},
  {to: "/formDemo", component: FormDemo},
  {to: "/boilingVerdict", component: BoilingVerdict},
  {to: "/price", component: Price},
  {to: "/todolist", component: Todolist},
  {to: "/context", component: Context},
  {to: "/fragments", component: Fragments},
  {to: "/optimizing", component: Optimizing},
  {to: "/refs", component: Refs},
  {to: "/renderProps", component: RenderProps}
]);


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawer: false
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Suspense fallback={<Loading />}>
              {/*这里设置项目上下文,即根路径名称*/}
              <BrowserRouter basename="/test">
                <Switch>
                  <RouterHoc/>
                  <Redirect to="/home" />
                </Switch>
              </BrowserRouter>
            </Suspense>
          </main>
        </div>
      </Router>
    )
  }
}

// //映射Redux全局的state到组件的props上
// const mapStateToProps = state => ({
//   showPlayer: state.showPlayer
// })
//
// export default connect(mapStateToProps)(App)
export default App;