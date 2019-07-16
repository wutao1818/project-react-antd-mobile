import React from 'react';
import Header from '@/components/common/header';
import '@/assets/style/App.scss';

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

  addTodo(){
    const { text, arr } = this.state;
    if(text){
      arr.push({text});
    }
    this.setState({
      arr,
      text: ''
    });
  }

  // 单个删除
  onDeleteEach(index){
    const { arr } = this.state;
    arr.splice(index,1);
    this.setState({arr});
  }

  // 删除最后一项
  deleteTodo(){
    const { arr } = this.state;
    arr.splice(arr.length-1,1);
    this.setState({arr});
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
        <div className="demoApp">
          <Header history={history} docTitle="价格测试demo页" />
          <section>
            <h1>请输入内容以创建你的todolist</h1>
            <Todowrap />
          </section>
        </div>
      )
  }
}

export default Todolist;