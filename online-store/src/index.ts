import './_global.scss';
import '../index.html';
// import './components/view/_ViewBlocks' // Отрисовка основных блоков, выше всех должно быть
import './components/_add_favicon';
// import './components/_CreateBaseData';
// import './components/_ModelCreateFilterData'
// import './components/_add_rangeSlider';

// import ViewFooter from './components/view/_ViewFooter';
// import ViewHeader from './components/view/_ViewHeader'; // ВРЕМЕННО ДЛЯ ТЕСТА
// import ViewMain from './components/view/_ViewMainPage'; // ВРЕМЕННО ДЛЯ ТЕСТА
// import ViewItemCardPage from './components/view/_ViewItemCardPage';

// Отрисовка
// const viewHeader = new ViewHeader();
// const viewMain = new ViewMain(); // Запустит отрисовку основной секции main\
// const viewItemCardPage = new ViewItemCardPage(); // Запустит отрисовку страницы карточки товара
// const viewFooter = new ViewFooter();




import ControllerMain from './components/controller/_ControllerMain'
// import CreateFilterData from './components/model/_ModelCreateFilterData'
// import ViewHeader from './components/model/_ModelCreateFilterData'


const APP = new ControllerMain()
APP.init()

// APP.start()
