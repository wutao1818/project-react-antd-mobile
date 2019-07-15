import React, { Component, Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
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
const Details = lazy(() => import('@/views/details'));
const List = lazy(() => import('@/views/list'));
const Navpage = lazy(() => import('@/views/navpage'));
const Demo = lazy(() => import('@/views/demos/demo'));
const FormDemo = lazy(() => import('@/views/demos/formDemo'));
const BoilingVerdict = lazy(() => import('@/views/demos/boilingVerdict'));
const Price = lazy(() => import('@/views/demos/price'));

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
              <Switch>
                <Route path="/details" component={Details} history={history} />
                <Route path="/list" component={List} history={history} />
                <Route path="/navpage" component={Navpage} history={history} />
                <Route path="/demo" component={Demo} history={history} />
                <Route path="/formDemo" component={FormDemo} history={history} />
                <Route path="/boilingVerdict" component={BoilingVerdict} history={history} />
                <Route path="/boilingVerdict" component={BoilingVerdict} history={history} />
                <Route path="/price" component={Price} history={history} />
                <Redirect to="/navpage" />
              </Switch>
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