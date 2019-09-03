import React from 'react';
import Header from '@/components/common/header';
import '@/assets/style/demo.scss';

class FormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      txtValue: '请撰写一篇关于你喜欢的 DOM 元素的文章.',
      selectValue: 'coconut'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTxtareaChange = this.handleTxtareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const value = event.target.value.toUpperCase();
    this.setState({value: value});
    console.log('输入框的内容=》',value);
  }

  handleSelectChange(event) {
    const value = event.target.value.toUpperCase();
    this.setState({selectValue: value});
  }

  handleTxtareaChange(event){
    const value = event.target.value;
    this.setState({txtValue: value});
    console.log('文本输入框的内容=》',value);
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { txtValue } = this.state;
    return (
      <React.Fragment>
        <Header history={this.props.history} docTitle="表单demo页" />
				<section>
					<form onSubmit={this.handleSubmit}>
						<label>
							名字:
							<input type="text" value={this.state.value} onChange={this.handleChange} />
						</label>
					
						<label>
							备注:
							<textarea value={txtValue} onChange={this.handleTxtareaChange}></textarea>
						</label>
					
						<label>
							选择你喜欢的风味:
							<select value={this.state.selectValue} onChange={this.handleSelectChange}>
								<option value="grapefruit">葡萄柚</option>
								<option value="lime">酸橙</option>
								<option value="coconut">椰子</option>
								<option value="mango">芒果</option>
							</select>
							<h1>{this.state.selectValue}</h1>
						</label>
					
						<label>
							上传文件：
							<input type="file" />
						</label>
						<button type="submit">提交</button>
					</form>
				</section>
      </React.Fragment>
    );
  }
}

export default FormControl;
