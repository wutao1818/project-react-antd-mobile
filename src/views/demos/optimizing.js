import React from 'react';
import Header from '@/components/common/header';
import '@/assets/style/App.scss';
import '@/assets/style/demo.scss';

class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.color !== nextProps.color) {
  //     return true;
  //   }
  //   if (this.state.count !== nextState.count) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        测试 shouldComponentUpdate 比较生命周期Count: {this.state.count}
      </button>
    );
  }
}

// 引用类型和基本类型
// 1、引用类型：
// var a = { aa: 11 };
// var b = a;
// b.aa = 22;
// a => {aa: 22};
// 原理：a的内存地址指向了b
// （react中可以使用immutable.js避免这个问题）

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    /*// 这部分代码很糟，而且还有 bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
    */


    this.setState(state => {
      return {
        words: state.words.concat(['marklar'])
      }
    })
    // this.setState(state => ({
    //   words: state.words.concat(['marklar'])
    // }));
  // 或者
  //   this.setState(state => ({
  //     words: [...state.words, 'marklar'],
  //   }));

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} >确定</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

class Optimizing extends React.Component {
  render (){
    const { history } = this.props;
    return (
      <React.Fragment>
        <Header history={history} docTitle="react性能优化" />
        <CounterButton />
        <WordAdder/>
      </React.Fragment>
    )
  }
}

export default Optimizing;