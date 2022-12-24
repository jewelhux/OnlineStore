// Типы интерфейсы
import { stringArrayObject } from '../typingTS/_type'
import { IitemDATA, IFilter } from '../typingTS/_interfaces'

// Модель
import CreateFilterData from '../model/_ModelCreateFilterData'

// VIEWS

import ViewHeader from '../view/_ViewHeader';
import ViewMainPage from '../view/_ViewMainPage';
import ViewFooter from '../view/_ViewFooter';
import ViewItemCardPage from '../view/_ViewItemCardPage';

// Служебные программки
import CustomElement from '../utils/_createCustomElement';
import FormatURL from '../utils/_formatUrl';
// import state from '../utils/state';
// import Router from '../router';

class ControllerMain {

  routes: {
    [key: string]: {
      name: string;
      routesPage: (x: string) => void;
    }
  };

  customElement: CustomElement

  MODEL: CreateFilterData;
  ViewHEADER: ViewHeader;
  ViewMainPAGE: ViewMainPage;
  ViewFOOTER: ViewFooter;
  ViewItemCardPAGE: ViewItemCardPage;

  _formatURL: FormatURL;

  FILTER: IFilter;

  BODY: HTMLElement
  HEADER: HTMLElement
  MAIN: HTMLElement
  FOOTER: HTMLElement

  readonly startCategoryData: stringArrayObject;
  readonly startBrandData: stringArrayObject;
  readonly startServerData: IitemDATA[];

  readonly startPriceOfFILTER: number[];
  readonly startStockOfFILTER: number[];
  readonly startSearchOfFILTER: string[];

  readonly priceOfFILTER: number[];
  readonly stockOfFILTER: number[];
  readonly searchOfFILTER: string[];

  constructor() {

    this.customElement = new CustomElement();
    this._formatURL = new FormatURL();


    this.BODY = document.body
    this.HEADER = this.customElement.createElement('header', { className: "page-header _main-container" });
    this.MAIN = this.customElement.createElement('main');
    this.FOOTER = this.customElement.createElement('footer', { className: "page-footer _main-container" });
    this.customElement.addChildren(this.BODY, [this.HEADER, this.MAIN, this.FOOTER])

    this.MODEL = new CreateFilterData();
    this.ViewHEADER = new ViewHeader();
    this.ViewFOOTER = new ViewFooter();
    
    
    this.FILTER = this.MODEL.FILTER
    this.startCategoryData = this.MODEL.startCategoryData
    this.startBrandData = this.MODEL.startBrandData
    this.startServerData = this.MODEL.startServerData
    // Значиния для установки минимальных и максимальных значений инпута и строки поиска
    this.startPriceOfFILTER = this.MODEL.startPriceOfFILTER
    this.startStockOfFILTER = this.MODEL.startStockOfFILTER
    this.startSearchOfFILTER = this.MODEL.startSearchOfFILTER
    // Будущие значения для установки велью инпутов и строки поиска
    this.priceOfFILTER = this.MODEL.priceOfFILTER
    this.stockOfFILTER = this.MODEL.stockOfFILTER
    this.searchOfFILTER = this.MODEL.searchOfFILTER
    
    this.ViewMainPAGE = new ViewMainPage(this.startServerData, this.startCategoryData, this.startBrandData, this.startPriceOfFILTER, this.startStockOfFILTER);
    console.log('КОНСТРУКТОР КОНТРОЛЛЕРА',this.startServerData[0])
    this.ViewItemCardPAGE = new ViewItemCardPage(this.startServerData[0]);


    // this.ROUTER = new Router()

    // this.router.startRouteListenner()

    // this._model.setSearchOfFILTER('ap')
    // console.log("this.FILTER 3000", this.FILTER)
    // console.log("state 3000", state)
    // this.a = this._formatURL.createURLSearchParams(this.FILTER)
    // console.log("200000", this._formatURL.createURLSearchParams(this.FILTER).toString())
    // console.log(this._formatURL.createObjectFromURLSearchParams(this.a))

    this.ListenersController()

    this.routes = {
      '/page404': {
        name: 'Page not found',
        routesPage: this.routesFuntion.bind(this)
      },
      '/product': {
        name: 'Product details',
        routesPage: this.routesFuntion.bind(this)
      },
      '/basket': {
        name: 'Backet',
        routesPage: this.routesFuntion.bind(this)
      },
      '/': {
        name: 'Home',
        routesPage: this.renderMainPageFromRouter.bind(this)
      },
    };


  }

  // Конец конструктора
  init() {
    // this.ROUTER.startRouteListenner()
    this.startRouteListenner();
    this.handleLocation();
    this.HEADER.append(this.ViewHEADER.create())
    this.MAIN.append(this.ViewMainPAGE.create())

    this.MAIN.append(this.ViewItemCardPAGE.create())

    // document.body.replaceChild(mainTwoInit, statePage);
    // this.MAIN.replaceChild(this.ViewMainPAGE.create())
    this.FOOTER.append(this.ViewFOOTER.create())

    // для проверки прокидывания значения в корзину
    this.ViewHEADER.updateheaderBasketCount(7)
  }


  renderMainPageFromRouter(name: string) {
    document.title = `Store - ${name}`;
    // console.log('2222===', this.FILTER)
    // this.returnStateFilter()
    // // this.MAIN.innerHTML = ''
    const search = new URLSearchParams(window.location.search);
    // console.log("query", query.toString().length)
    // if (query.toString().length) {
    const filter = this._formatURL.createObjectFromURLSearchParams(search)
    // console.log('8888=', this.FILTER)
    // console.log('9999=', filter)
    this.MODEL.setFILTER(filter)
    // console.log('AAAA=', this.FILTER)
    // console.log('A1A1A1A1=', this.MODEL.startServerFILTER)
    this.rerenderMainPageComponents()

  }

  rerenderMainPageComponents() {
    this.ViewMainPAGE.updateCardList(this.MODEL.filtredData)
    this.ViewMainPAGE.updateBrandBlock(this.MODEL.filtredBrandData)
    this.ViewMainPAGE.updateCategoryBlock(this.MODEL.filtredCategoryData)
    this.ViewMainPAGE.updateSearchValue(this.MODEL.searchOfFILTER[0])
  }

  routesFuntion(name: string) {
    document.title = `Store - ${name}`;

  }

  // Главыный слушаетль на кнопках АДРЕССНОЙ СТРОКИ
  startRouteListenner() {
    window.onpopstate = (event: PopStateEvent) => {
      event.preventDefault()
      this.handleLocation()
    };
    // console.log('Start startRouteListenner')
  }

  handleLocation() {
    // console.log('1111', this.FILTER)
    // console.log("this.routes===", this.routes)
    const path = window.location.pathname;
    // console.log("path 111===", path)
    const route = this.routes[path] || this.routes['/page404'];
    // console.log("route===", route)
    route.routesPage(route.name);

  }

  pushStateFilter(filter = this.MODEL.FILTER) {
    const params: URLSearchParams = this._formatURL.createURLSearchParams(filter)

    if (JSON.stringify(this.FILTER) === JSON.stringify(this.MODEL.startServerFILTER)) {
      window.history.replaceState({}, '', '/')
    } else {
      window.history.pushState({}, '', `?${params}`)
    }

    // window.location.assign(`${window.location.origin}${path}`)
  }




  ListenersController() {
    // проверка ловли евента со вью хедера
    this.BODY.addEventListener('clickOnBacket', (e) => {


      // console.log('START window.location.href===', window.location.href)
      // console.log('START FILTER===', this.MODEL.FILTER)
      this.MODEL.setFILTERCategory('smartphones')
      this.MODEL.setFILTERBrand('Apple')
      // console.log('AFTERCHANGE this.MODEL.FILTER===', this.MODEL.FILTER)
      // console.log("eventfromMain = ",e)
      this.ViewHEADER.updateheaderBasketCount(100)
      const b = this._formatURL.createURLSearchParams(this.MODEL.FILTER)
      const a = Math.ceil(Math.random() * 1000)
      window.history.pushState({}, '', `/main/?${b}#${a}`)

      // console.log('AFTER pushState window.location.href===', window.location.href)
      // console.log('window.location.pathname===', window.location.pathname)
      // console.log('window.location.search===', window.location.search)


      const query = new URLSearchParams(window.location.search);
      // console.log('query',query.toString())



      const Q = this._formatURL.createObjectFromURLSearchParams(query)
      console.log('QQQQQQQQQQQQQQQQQQ', Q)


      // this.handleLocation()
    })

    // Ловля клика по Инпутам категорий из Мейна

    this.MAIN.addEventListener('clickOnCategoryMain', (e) => {
      const target = e.target as HTMLElement;
      this.MODEL.setFILTERCategory(target.id)
      this.rerenderMainPageComponents()
      this.pushStateFilter()
    })

    this.MAIN.addEventListener('clickOnBrandMain', (e) => {
      const target = e.target as HTMLElement;
      this.MODEL.setFILTERBrand(target.id)
      this.rerenderMainPageComponents()
      this.pushStateFilter()
    })

    this.MAIN.addEventListener('changeOnSearchMain', (e) => {
      const target = e.target as HTMLInputElement;

      this.MODEL.setSearchOfFILTER(target.value)
      this.rerenderMainPageComponents()
      this.pushStateFilter()
    })


  }



  // rerenderMainPageComponentsStart() {
  //   this.ViewMainPAGE.updateCardList(this.MODEL.startServerData)
  //   this.ViewMainPAGE.updateBrandBlock(this.MODEL.startBrandData)
  //   this.ViewMainPAGE.updateCategoryBlock(this.MODEL.startCategoryData)
  // }





}

export default ControllerMain

// export function processOrder(time: number): Promise<void> {
//   return new Promise((res) => setTimeout(res, time));
// }