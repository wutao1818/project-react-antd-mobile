import React from 'react';
import Header from '@/components/common/header';
import './index.scss';

import { WhiteSpace, Picker, DatePicker, InputItem, Modal, List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
// import { hostName } from '@/api/config';
// console.log(hostName);
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Editinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initTxt: '未绑定',
      modal1: false,
      modal2: false,
      sexList: [{
        label: '男',
        value: '1',
      },
      {
        label: '女',
        value: '2',
      }],
      sexValue: ['1'],
      date: now,
      nationList: [{
        label: '汉族',
        value: '1'
      },{
        label: '蒙古族',
        value: '2'
      },{
        label: '藏族',
        value: '3'
      },{
        label: '回族',
        value: '4'
      }],
      nationValue: ['2'],
    };
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  onChangeSex = (sexValue) => {
    this.setState({
      sexValue: sexValue,
    });
  }

  onChangeNation = (nationValue) => {
    this.setState({
      nationValue: nationValue,
    });
  }

  render() {
    const { history } = this.props;
    const { initTxt, sexList, nationList } = this.state;
    return (
        <React.Fragment>
          <Header history={history} docTitle="编辑个人信息" />
          <section className="edit-info-bg">
            <List renderHeader={() => '基本信息'} className="my-list">
              <InputItem
                type='text'
                placeholder="输入您的姓名"
                className="input-right"
                onChange={(v) => { console.log('onChange', v); }}
                onBlur={(v) => { console.log('onBlur', v); }}
              >姓名</InputItem>

              <InputItem
                type='phone'
                placeholder="输入您的手机号"
                className="input-right"
                maxLength="11"
                onChange={(v) => { console.log('onChange', v); }}
                onBlur={(v) => { console.log('onBlur', v); }}
              >手机号</InputItem>

              <InputItem
                type='text'
                placeholder="输入您的身份证"
                className="input-right"
                onChange={(v) => { console.log('onChange', v); }}
                onBlur={(v) => { console.log('onBlur', v); }}
              >身份证</InputItem>

              <DatePicker
                mode="date"
                title="选择出生日期"
                extra="Optional"
                value={this.state.date}
                onChange={date => this.setState({ date })}
              >
                <List.Item arrow="horizontal">出生日期</List.Item>
              </DatePicker>
              <Picker
                data={sexList}
                value={this.state.sexValue}
                cols={1}
                onChange={this.onChangeSex}
              >
                <List.Item arrow="horizontal">性别</List.Item>
              </Picker>
			      </List>
			      <List renderHeader={() => '其他信息'} className="my-list">
              <Picker
                data={nationList}
                value={this.state.nationValue}
                cols={1}
                onChange={this.onChangeNation}
              >
                <List.Item arrow="horizontal">民族</List.Item>
              </Picker>
              <Item arrow="horizontal" extra={initTxt}>地址</Item>
              <Item arrow="horizontal" extra={initTxt}>工作单位</Item>
			      </List>
          </section>

        </React.Fragment>
      )
  }
}

export default Editinfo;
