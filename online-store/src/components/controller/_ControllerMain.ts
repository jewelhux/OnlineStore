// Типы интерфейсы
import { stringArrayObject } from '../typingTS/_type'
import { IitemDATA, IFilter } from '../typingTS/_interfaces'

// Модель
import CreateFilterData from '../model/_ModelCreateFilterData'

// VIEWS

import ViewHeader from '../view/_ViewHeader';

import CustomElement from '../utils/_createCustomElement';

import FormatURL from '../utils/_formatUrl';
import state from '../utils/state';
// import Router from './router';

class ControllerMain {
  customElement: CustomElement

  MODEL: CreateFilterData;
  ViewHEADER: ViewHeader



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

  // router: Router;

  // a: URLSearchParams

  constructor() {
    this.customElement = new CustomElement();
    this.BODY = document.body
    this.HEADER = this.customElement.createElement('header', {className: "page-header _main-container"});
    this.MAIN = this.customElement.createElement('main');
    this.FOOTER = this.customElement.createElement('footer', {className: "page-footer _main-container"});
    this.customElement.addChildren(this.BODY, [this.HEADER,this.MAIN,this.FOOTER])



    this.MODEL = new CreateFilterData()
    this.ViewHEADER = new ViewHeader()

    this._formatURL = new FormatURL()

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

    // this.router = new Router()

    // this.router.startRouteListenner()

    // this._model.setSearchOfFILTER('ap')
    // console.log("this.FILTER 3000", this.FILTER)
    // console.log("state 3000", state)
    // this.a = this._formatURL.createURLSearchParams(this.FILTER)
    // console.log("200000", this._formatURL.createURLSearchParams(this.FILTER).toString())
    // console.log(this._formatURL.createObjectFromURLSearchParams(this.a))
  }


  init() {
    this.HEADER.prepend(this.ViewHEADER.createHeader())

    // для проверки прокидывания значения в корзину
    this.ViewHEADER.updateheaderBasketCount(7)
  }


}

export default ControllerMain