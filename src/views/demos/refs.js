import React,{ Component } from 'react';
import Header from '@/components/common/header';

function CustomTextInputFunction(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它
  let textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />

      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.onBlurHandle = this.onBlurHandle.bind(this);
    this.onFocusHandle = this.onFocusHandle.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.state = {
      isFocus: false
    }
  }

  onBlurHandle() {
    this.setState({
      isFocus: false
    })
  }

  onFocusHandle() {
    this.setState({
      isFocus: true
    })
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          onBlur={this.onBlurHandle}
          onFocus={this.onFocusHandle}
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class AutoFocusTextInput  extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

class Refs extends Component {
  render (){
    const { history } = this.props;
    return (
      <React.Fragment>
        <React.Fragment>
          <Header history={history} docTitle="refs & DOM" />
          <section>
            <h1>handleClick</h1>
            <CustomTextInputFunction/>
            <h1>AutoFocusTextInput</h1>
            <AutoFocusTextInput/>
          </section>
        </React.Fragment>
      </React.Fragment>
    )
  }
}

export default Refs;