import CustomElement from '../utils/_createCustomElement';
import ControllerMain from '../controller/_ControllerMain';
import { stringArrayObject } from '../typingTS/_type';
import { IitemDATA } from '../typingTS/_interfaces';
import { createElement } from '../utils/utils';


class ViewBasketPage {
  customElement: CustomElement;
  _controller: ControllerMain;

  pagesButtonPrev: HTMLElement;
  pagesButtonNext: HTMLElement;
  pagesCurrent: HTMLElement;
  productList: HTMLElement;
  productItemsInputView: HTMLElement;
  startServerData: IitemDATA[];

  constructor() {
    this._controller = new ControllerMain();
    this.customElement = new CustomElement();

    this.productList = this.customElement.createElement('div', { className: 'product__list' }); // Лист карточек
    this.productItemsInputView = this.customElement.createElement('input', { className: 'product__items-inputView', type:'text', value:'4' }); // Количество отображаемых на странице карточек товара
    this.pagesButtonPrev = this.customElement.createElement('button', { className: 'product__pages-btnPrev product__pages-btn', textContent: '-' }); // Кнопка странички ПРЕДЫДУЩАЯ
    this.pagesButtonNext = this.customElement.createElement('button', { className: 'product__pages-btnNext product__pages-btn', textContent: '+' }); // Кнопка странички СЛЕДУЮЩАЯ
    this.pagesCurrent = this.customElement.createElement('p', { className: 'product__pages-current', textContent: '2'  }); // Лист карточек
    this.startServerData = this._controller.startServerData;

    this.create();
  }

  create() {
    // Отрисовка контейнера (для попапа и секции)
    const pageMainBasket = this.customElement.createElement('section', { className: 'page-main-itemCard _main-container' });
    const popupWrapper = this.customElement.createElement('div', { className: 'popup-wrapper' });
    const mainBasket = this.customElement.createElement('div', { className: 'page-main-itemCard _main-container' });
    this.customElement.addChildren(pageMainBasket, [popupWrapper, mainBasket]);

    // Отрисовка mainBasket
    const mainBasketProduct = this.customElement.createElement('div', { className: 'main-basket__product product' });
    this.customElement.addChildren(mainBasket, [mainBasketProduct]);

    // Отрисовка mainBasketProduct
    const productTitle = this.customElement.createElement('div', { className: 'product__title' });
    this.customElement.addChildren(mainBasketProduct, [productTitle, this.productList]);

    // Отрисовка productTitle
    const productName = this.customElement.createElement('h3', { className: 'product__name', textContent: 'Product in Cart'});
    const productItemsView = this.customElement.createElement('div', { className: 'product__itemsView'});
    const productPages = this.customElement.createElement('div', { className: 'product__pages'});
    this.customElement.addChildren(productTitle, [productName, productItemsView, productPages]);

    // Отрисовка productItemsView
    const productItemsName = this.customElement.createElement('p', { className: 'product__items-name', textContent: 'Items:'});
    this.customElement.addChildren(productItemsView, [productItemsName, this.productItemsInputView]);

    // Отрисовка productPages
    const productItemsPages = this.customElement.createElement('p', { className: 'product__items-pages', textContent: 'Pages:'});
    this.customElement.addChildren(productPages, [productItemsPages, this.pagesButtonPrev, this.pagesCurrent, this.pagesButtonNext]);

    // Отрисовка Листа товаров корзины
    this.customElement.addChildren(this.productList,[...this.renderProductCard()]);

    // this.customElement.addChildren(MAIN,[pageMainBasket]);
  }

  // Создание ItemCard корзины
  renderProductCard(dataServerItem:IitemDATA[] = this.startServerData) {
    const itemContainer: HTMLElement[] = [];
    const test:IitemDATA[] = dataServerItem.slice(0, 3)

    for (const item of test) {
      const itemBasket = this.customElement.createElement('div', { className: 'product__itemBasket itemBasket'});

      itemContainer.push(itemBasket)
    }

    return itemContainer
  }

}

export default ViewBasketPage