import React from 'react';
import Header from '@/components/common/header';

const DataSource = {
  addChangeListener: ()=>{},
  removeChangeListener: ()=>{}
};

// 定义一个高阶组件，传入一个组件，并返回一个新组件
function withSubscription(WrappedComponent,selectData) {
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return WithSubscription
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function CommentList(props) {
  // console.log(props)
  return <div>我是子组件111</div>;
}

function BlogPost(props) {
  // console.log(props)
  return <div>我是子组件222</div>;
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => 1
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => 2
);

// const WithSubscriptionaa = withSubscription(CommentList);


class Hoc extends React.Component {

  render() {
    const { history } = this.props;
    return (
      <React.Fragment>
        <Header history={history} docTitle="高阶组件" />
        <h1>React 高阶组件</h1>
        <CommentListWithSubscription/>
        <BlogPostWithSubscription/>
      </React.Fragment>
    )
  }
}

export default Hoc;