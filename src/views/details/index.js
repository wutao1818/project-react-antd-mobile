import React from 'react'
import '@/assets/App.scss';
import Header from '@/components/common/header';

class Component1 extends React.Component {
  render() {
    return <h1>组件1：Hello, {this.props.name}</h1>;
  }
}

class Component2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: ''
    }
  }
  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    },1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const { time } = this.state;
    return (
      <div className="clock">
        <h3>组件2：Hello, {this.props.name}</h3>
        <h2>time It is: {time}.</h2>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      recordId: '',
      title: '',
      proDetailUrl: ''
    }
  }

  componentDidMount() {
  }


  render() {
    return (
      <div className="demoApp" id="demoApp">
        <Header history={this.props.history} docTitle="详情页" />
        <section>
          <h1>嵌套组件：</h1>
          <Component1 name="Sara" />
          <Component2 name="Cahal" />
        </section>

      </div>
    )
  }
}

export default App;
