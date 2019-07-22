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
                  <Route path="/list" component={List} history={history} />
                  <Route path="/home" component={Navpage} history={history} />
                  <Route path="/demo" component={Demo} history={history} />
                  <Route path="/formDemo" component={FormDemo} history={history} />
                  <Route path="/boilingVerdict" component={BoilingVerdict} history={history} />
                  <Route path="/boilingVerdict" component={BoilingVerdict} history={history} />
                  <Route path="/price" component={Price} history={history} />
                  <Route path="/todolist" component={Todolist} history={history} />
                  <Route path="/context" component={Context} history={history} />
                  <Route path="/fragments" component={Fragments} history={history} />
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