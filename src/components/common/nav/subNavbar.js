import React from 'react';
import { NavLink } from 'react-router-dom';

function subNavbar(props){
  const { data } = props;
  return (
    <div className="home-wrap">
      <NavLink className="home-item" style={data.style} to={data.to}>{data.name}</NavLink>
    </div>
  )
}

export default subNavbar;