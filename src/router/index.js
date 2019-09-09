import React, {Component, Suspense} from 'react';
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '@/store/storeMaps';

import Footer from '@/components/common/footer';
// 引入页面过渡的loading组件
// import Loading from '@/components/common/loading/loading';
import Skeleton from '@/components/common/loading/skeleton';
import routes from './routes';
import {createBrowserHistory} from "history";
const history = createBrowserHistory();

function routerHoc(WrappedComponent, routerList) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        routerList: routerList
      };
    }

    render() {
      const {routerList} = this.state;
      const navList = routerList.map((item) => {
        return (
          <WrappedComponent store={this.props} key={item.to} path={item.to} component={item.component}/>
        )
      })
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return navList
    }
  }
}

function routerItem(props) {
  return <Route store={props.store} path={props.path} component={props.component} history={history}/>
}

const RouterHoc = routerHoc(routerItem, routes);

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
            <Suspense fallback={<Skeleton />}>
              <BrowserRouter basename="/test">
                <Switch>
                  <React.Fragment>
                    <div className="demoApp">
                      <RouterHoc />
                    </div>
                    <Redirect to="/home"/>
                  </React.Fragment>
                </Switch>
                <Footer history={history} />
              </BrowserRouter>
            </Suspense>
          </main>
        </div>
      </Router>
    )
  }
}

//映射Redux全局的state到组件的props上
App = connect(mapStateToProps)(App);
export default App;