import React from 'react';

function hocNavbar(WrappedComponent,routerList) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        routerList: routerList
      };
    }

    render() {
			const { history } = this.props;
      const { routerList } = this.state;
      const navList = routerList.map((item)=>{
        return (
          <WrappedComponent key={item.to} data={item} history={history} />
        )
      })
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return navList;
    }
  }
}

export default hocNavbar;