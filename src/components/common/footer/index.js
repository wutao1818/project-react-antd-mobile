import React from 'react';
import './index.scss';

import hocNavbar from '@/components/common/nav/hocNavbar';
import subNavbar from '@/components/common/nav/subNavbar';

const HocNavbar = hocNavbar(subNavbar,[
  {to: "/home", name: '首页'},
  {to: "/hoc", name: '高阶组件'},
  {to: "/price", name: '价格测试'},
  {to: "/todolist", name: 'todolist测试'},
]);

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <HocNavbar/>
      </footer>
    )
  }
}

export default Footer;
