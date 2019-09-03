import React from 'react';

import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

function subNavbar(props){
  const { data, history } = props;
  return (
    <div className="home-wrap">
			<Button onClick={() => history.push(data.to)} type="primary" >{data.name}</Button>
    </div>
  )
}

export default subNavbar;