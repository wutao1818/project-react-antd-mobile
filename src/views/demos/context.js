import React from 'react';
import Header from '@/components/common/header';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');

class Context extends React.Component {
  render() {
    const {history} = this.props;
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <React.Fragment>
        <Header history={history} docTitle="context 页"/>
        <ThemeContext.Provider value="dark1234">
          <Toolbar/>
        </ThemeContext.Provider>
      </React.Fragment>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton/>
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;

  render() {
    return <Button theme={this.context}/>;
  }
}

// 深层次的组件也能获取到context值
function Button(props) {
  return (
    <React.Fragment>
      <button>context组件</button>
      <h1>context的值为{props.theme}</h1>
    </React.Fragment>
  )
}


export default Context;
