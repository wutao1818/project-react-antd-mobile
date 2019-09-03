import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/style/App.scss';
import App from '@/router/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// 从 DOM 中卸载组件，会将其事件处理器（event handlers）和 state 一并清除
// setTimeout(()=>{
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// },2000)


serviceWorker.unregister();
