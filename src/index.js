import Switch from './components/Switch'
function logA() {
    console.log('function logA called');
}

var index = logA();
export { Switch }
// export default index;
// 省略的写法
// export {default as Switch} from './components/Switch'