import React, { Component, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// import { connect } from 'react-redux'

import Loading from '@/components/common/loading/loading';
import Details from '@/views/details';
import List from '@/views/list';
import Navpage from '@/views/navpage';
import Demo from '@/views/demos/demo';
import FormDemo from '@/views/demos/formDemo';
import BoilingVerdict from '@/views/demos/boilingVerdict';
import Price from '@/views/demos/price';

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