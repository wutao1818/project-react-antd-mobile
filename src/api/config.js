// 网络请求地址
export const baseURL = 'http://api.mtnhao.com';

const host = {
  'dev':{
    'hostName':'https://test1-api.mtnhao.com',
  },
  'test':{
    'hostName':'https://test1-api.mtnhao.com',
  },
  'uat':{
    'hostName':'https://uat-api.mtnhao.com',
  },
  'prod':{
    'hostName':'https://api.mtnhao.com',
  }
};
const REACT_APP_ENV = process.env.REACT_APP_ENV;
console.log(`当前环境是 ${REACT_APP_ENV}`);
export const hostName = host[REACT_APP_ENV].hostName;

