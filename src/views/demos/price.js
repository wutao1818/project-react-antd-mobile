import React from 'react'
import '@/assets/style/App.scss';
import Header from '@/components/common/header';
import '@/assets/style/demo.scss';

// 数据源
const apiDataList = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

// 过滤输入字段
function filterText(str,name){
  if(str.length>0&&name.toUpperCase().indexOf(str.toUpperCase()) > -1){
    return true;
  }else{
    return false;
  }
}

// 过滤勾选框
function filterCheck(flag,stocked){
  if(flag && stocked){
    return true;
  }
  return false;
}

// 头部搜索组件
class SearchComp extends React.Component {
  render() {
    return <div>
      <div>
        <input type="text" placeholder="请输入进行搜索" onChange={this.props.onInTextChange} />
      </div>
      <div>
        <input type="checkbox" onChange={this.props.onInStockChange} />只显示有货的的商品
      </div>
    </div>
  }
}

// 价格列表
class PriceList extends React.Component {
  render() {
    const apiData = this.props.apiData;
    let categoryName = '';
    const prices = apiData.map((item)=>{
      if(categoryName!==item.category){
        categoryName = item.category;
        return (
          <div key={item.name}>
            <h2 className="label-title">{categoryName}</h2>
            <h4 className={item.stocked?null:'price-title-red'}>{item.name}  - {item.price}</h4>
          </div>
        )
      }else{
        return (
          <div key={item.name}>
            <h4 className={item.stocked?null:'price-title-red'}>{item.name}  - {item.price}</h4>
          </div>
        )
      }
    });
    return <div>
      {prices}
    </div>
  }
}

// 价格列表内容部
class PriceWrap extends React.Component {
  render() {
    let arrDom = [];
    let apiData = this.props.apiData;
    const searchText = this.props.searchText;
    const isChecked = this.props.isChecked;
    if( searchText==='' && !isChecked ){
      arrDom = apiData;
    }else{
      if( searchText && !isChecked ){
        apiData.forEach((item)=> {
          const hasText = filterText(searchText,item.name);
          if(hasText){
            arrDom.push(item)
          }
        });

      }else if( isChecked && !searchText ){
        apiData.forEach((item)=> {
          const hasChecked = filterCheck(isChecked,item.stocked);
          if(hasChecked){
            arrDom.push(item)
          }
        });
      }else{
        apiData.forEach((item)=> {
          const hasText = filterText(searchText,item.name);
          const hasChecked = filterCheck(isChecked,item.stocked);
          if( hasText && hasChecked ){
            arrDom.push(item)
          }
        });
      }

    }

    return <div>
      <h1 className="price-title" style={{fontSize: '24px', color: '#fff'}}>商品名称   -   商品价格</h1>
      <PriceList
        apiData={arrDom}
      />
    </div>;
  }
}

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isChecked: ''
    };
    this.handleInTextChange = this.handleInTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  handleInTextChange(event){
    const value = event.target.value;
    this.setState({searchText: value});
  }
  handleInStockChange(event){
    const value = event.target.checked;
    this.setState({isChecked: value});
  }
  render() {
    const { history } = this.props;
    return (
      <div className="demoApp">
        <Header history={history} docTitle="价格测试demo页" />
        <section>
          <SearchComp
            searchText={this.state.searchText}
            isChecked={this.state.isChecked}
            onInTextChange={this.handleInTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <PriceWrap
            searchText={this.state.searchText}
            isChecked={this.state.isChecked}
            apiData={apiDataList}
          />
        </section>
      </div>
    )
  }
}

export default Price;
