import React from 'react';

import hocNavbar from '@/components/common/nav/hocNavbar';
import { NavLink } from 'react-router-dom';

import './index.scss';

function footerItems(props){
  const { data } = props;
	return (
		<div className="home-wrap">
			<NavLink className="home-item" style={data.style} to={data.to}>
				{data.name}
			</NavLink>
		</div>	
	)
}

const HocNavbar = hocNavbar(footerItems,[
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
