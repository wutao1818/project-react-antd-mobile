import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'antd-mobile';

// Loading组件
const Loading = props => {
  return (
    <div style={{width: '375px', height: '667px', position: 'relative'}}>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          'WebkitTransform': 'translate(-50%,-50%)',
          'msTransform': 'translate(-50%,-50%)',
          'transform': 'translate(-50%,-50%)'
        }}
      >
        <ActivityIndicator
          size="large"
          color="white"
          text="Loading..."
        />
      </div>
    </div>
  )
}

Loading.defaultProps = {
  text: '努力加载中...',
  show: true
}

Loading.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string
}

export default Loading
