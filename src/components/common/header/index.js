import React from 'react';
import {NavBar, Icon} from 'antd-mobile';

class Header extends React.Component {
  render() {
    const {history, docTitle} = this.props;
    return (
      <React.Fragment>
        <NavBar
          style={{
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            zIndex: '100',
            height: '45px'
          }}
          mode="light"
          icon={<Icon type="left"/>}
          onLeftClick={history.goBack}
          rightContent={[
            <Icon key="0" onClick={()=>{console.log('搜索')}} type="search" style={{marginRight: '16px'}}/>,
            <Icon key="1" onClick={()=>{console.log('功能')}} type="ellipsis"/>,
          ]}
        >{docTitle}</NavBar>
      </React.Fragment>
    )
  }
}

export default Header;
