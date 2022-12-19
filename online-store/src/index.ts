import './_global.scss';
import '../index.html';
import './components/_add_favicon';
// import './components/_CreateBaseData';
// import './components/_ModelCreateFilterData'
import './components/_add_rangeSlider';

import ViewMain from './components/_ViewMain'

console.log('Проверка')
console.log('Проверка от JiK')

const App = new ViewMain()

App.init()