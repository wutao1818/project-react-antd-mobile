import React from 'react';
import Header from '@/components/common/header';
import '@/assets/style/App.scss';
import '@/assets/style/demo.scss';


class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: 'lifyCycle'
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    this.setState({
      testData: 'hahahahaha'
    },()=>{
      console.log(`我是setState之后callback函数，state值为${this.state.testData}`)
    })
  }

  // 组件挂载前
  componentDidMount(){
    console.log('组件即将被挂载！')
  }

  // 组件更新前
  componentDidUpdate(){
    // 这里可以获取 state 被修改的之后的值！！！
    console.log(this.state.testData)
    console.log('组件即将被更新！')
  }

  // 组件销毁前
  componentWillUnmount(){
    console.log('组件即将被销毁！')
  }

  render() {
    const { history, color } = this.props;
    return (
      <div className="demoApp">
        <Header history={history} docTitle="组件的生命周期" />
        <h1 style={{color: color}}>React组件常用生命周期</h1>
        <button onClick={this.updateState}>点击触发更新</button>
      </div>
    )
  }
}

LifeCycle.defaultProps = {
  color: 'orange'
};

export default LifeCycle;