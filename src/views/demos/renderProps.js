import React  from 'react';
import Header from '@/components/common/header';
import catImg from '@/assets/img/cat.png';


class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={catImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="cat" />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 ,touching:false,trace: []};
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{position: 'relative', width: '414px', height: '736px' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

class RenderProps extends React.Component {
  render (){
    const { history } = this.props;
    return (
      <React.Fragment>
        <Header history={history} docTitle="render-props" />
        <h1>非手机模式可以查看</h1>
        <section>
          <MouseTracker/>
        </section>
      </React.Fragment>
    )
  }
}

export default RenderProps;