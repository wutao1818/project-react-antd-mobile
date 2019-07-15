import React from 'react'
import '@/assets/style/App.scss';
import Header from '@/components/common/header';
import request from '@/api/request';

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
    request('https://dev-sc.yunqueyi.com/membership/duiba/orders').then(
      res => {
        this.setState({
          url: res.data.url,
          recordId: res.data.recordId
        })
        request(
          `https://dev-sc.yunqueyi.com/membership/duiba/goods?url=${res.data.url}`
        ).then(res => {
          this.setState({
            proDetailUrl: res.data.url,
            title: res.data.title
          })
        });

      }
    );
  }

  goExchange() {
    request(
      'https://dev-sc.yunqueyi.com/membership/duiba/autoLogin'
    ).then(res => {
      window.open(res.data.url,'_blank ');
    });
  }

  goUseProd(proDetailUrl) {
    request(
      `https://dev-sc.yunqueyi.com/membership/duiba/autoLogin?url=${proDetailUrl}`
    ).then(res => {
      window.open(res.data.url,'_blank ');
    });
  }

  goOrderDetail(url) {
    request(
      `https://dev-sc.yunqueyi.com/membership/duiba/autoLogin?url=${url}`
    ).then(res => {
      window.open(res.data.url,'_blank ');
    });
  }

  render() {
    const { title, recordId, url, proDetailUrl } = this.state;
    return (
      <div className="demoApp" id="demoApp">
        <Header history={this.props.history} docTitle="详情页" />
        <section>
          <h1>嵌套组件：</h1>
          <Component1 name="Sara" />
          <Component2 name="Cahal" />
          <div>
            <div className="block">
              <span onClick={ this.goExchange }>查看积分商城</span>
            </div>
            <div className="block">
              <h2>商品名称：{ title } </h2>
              <span onClick={ this.goUseProd.bind(this,proDetailUrl) }>查看商品</span>
            </div>
            <div className="block">
              <h2>订单编号：{ recordId }</h2>
              <span onClick={ this.goOrderDetail.bind(this,url) }>查看订单</span>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
