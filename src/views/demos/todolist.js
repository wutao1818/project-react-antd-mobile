import React from 'react';
import Header from '@/components/common/header';

import { hostName } from '@/api/config';
console.log(hostName);

class Todowrap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      arr: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleInputChange(event){
    const value = event.target.value;
    this.setState({text: value});
  }

  // 添加一个todo
  addTodo(){
    const { text } = this.state;
    if(text){
      this.setState(state => ({
        arr: [...this.state.arr, {text}],
        text: ''
      }));
    }
  }

  // 单个删除
  onDeleteEach(index){
    const newArr = this.state.arr;
    newArr.splice(index,1);
    this.setState({
      arr: newArr
    });
  }

  // 删除最后一项
  deleteTodo(){
    const { arr } = this.state;
    const newArr = arr.slice(0,arr.length-1);
    this.setState({
      arr: newArr
    });
  }

  render(){
    const { text, arr } = this.state;
    let list = arr.map((item, index)=>{
      return (
        <li key={index}>{item.text} <button onClick={ ()=>{ this.onDeleteEach(index) } }> - </button></li>
      )
    });
    return (
      <div>
        <input type="text" value={ text } onChange={ this.handleInputChange } onKeyDown={ (e)=>{ if(e.keyCode===13) {this.addTodo()} } } />
        <button onClick={ this.addTodo }> + </button>
        <button onClick={ this.deleteTodo }> - </button>
        <ul>{ list }</ul>
      </div>
    )
  }
}

class Todolist extends React.Component {
  render() {
    const { history } = this.props;
    return (
        <React.Fragment>
          <Header history={history} docTitle="todolist页" />
          <section>
            <h1>请输入内容以创建你的todolist</h1>
            <Todowrap />
          </section>
        </React.Fragment>
      )
  }
}

export default Todolist;