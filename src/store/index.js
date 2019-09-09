import { createStore } from 'redux';

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
 const rootReducer = (state, action) => {
 	const newState = {
		name: 'wutao',
		age: 30,
		state1: '11',
		state2: '22',
		number: action.number || 0
 	}

 	return newState
 	// switch (action.type) {
  //   case 'INCREMENT':
  //     return {
		// 		name: 'wutao',
		// 		age: 30,
		// 		state1: '11',
		// 		state2: '22',
		// 		number: state.number
		//  	}
  //   default:
  //     return newState
  // }
 }

const store = createStore(rootReducer);
// 可以手动订阅更新，也可以事件绑定到视图层。
// 1、先订阅store更新状态
store.subscribe(() => {
  console.log('全局store更新了！！！',store.getState());
});

export default store;