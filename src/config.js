//开发模式
export const IS_DEV = process.env.NODE_ENV !== 'production';
//正式、测试网络的api
export let API_URL = 'http://wx.inchain.org:802';
//请求最迟时间
export const API_TIME = IS_DEV ? '9000' : '8000';

