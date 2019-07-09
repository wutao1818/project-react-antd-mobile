import React, { Component, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// import { connect } from 'react-redux'

import Loading from '@/components/common/loading/loading';
import Details from './products/details';
import List from './products/list';
import Home from './home';
import Demo from './demo';

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

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
                <Route path="/home" component={Home} history={history} />
                <Route path="/demo" component={Demo} history={history} />
                <Redirect to="/home" />
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