import CustomElement from '../utils/_createCustomElement';
import ControllerMain from '../controller/_ControllerMain';
import { stringArrayObject } from '../typingTS/_type';
import { IitemDATA } from '../typingTS/_interfaces'
// import { itemFilterCheckbox } from '../utils/utils';
import { MAIN } from '../utils/const';

class ViewMainitemCard {
  customElement: CustomElement;
  _controller: ControllerMain;
  // root: HTMLBodyElement;

  PageMainItemCard: HTMLElement;

  // buttonReset: HTMLElement;
  // buttonCopy: HTMLElement;
  // itemPriceNumberFrom: HTMLElement;
  // itemPriceNumberTo: HTMLElement;
  // itemPriceInputOne: HTMLElement;
  // itemPriceInputTwo: HTMLElement;
  // itemStockNumberFrom: HTMLElement;
  // itemStockNumberTo: HTMLElement;
  // itemStockInputOne: HTMLElement;
  // itemStockInputTwo: HTMLElement;
  // filterCategoryMain: HTMLElement;
  // filterBrandMain: HTMLElement;
  // viewSort: HTMLElement;
  // viewSearch: HTMLElement;
  // findCount: HTMLElement;
  // viewBlock: HTMLElement;
  // viewList: HTMLElement;
  // startCategoryData: stringArrayObject;
  // startBrandData: stringArrayObject;
  // startPriceOfFILTER: number[];
  // startStockOfFILTER: number[];
  startServerData: IitemDATA[];

  constructor() {
    // this.root = document.getElementsByTag('body');
    this._controller = new ControllerMain();
    this.customElement = new CustomElement();

    this.PageMainItemCard = this.customElement.createElement('div', { className: 'page-main-itemCard _main-container' })

    // this.startCategoryData = this._controller.startCategoryData;
    // this.startBrandData = this._controller.startBrandData;
    // this.startPriceOfFILTER = this._controller.startPriceOfFILTER;
    // this.startStockOfFILTER = this._controller.startStockOfFILTER;
    this.startServerData = this._controller.startServerData;
    // this.create()

    // MAIN.prepend(this.PageMainItemCard)

    // this.root.append(this.PageMainItemCard)
    // this.buttonReset = this.customElement.createElement('button', { className: 'stock__reset _btn', textContent: 'Reset Filter'}); // button Reset
    // this.buttonCopy = this.customElement.createElement('button', { className: 'stock__copy _btn', textContent: 'Copy Link'}); // button Copy
    // this.filterCategoryMain = this.customElement.createElement('div', { className: 'filter__item-container category__container filter__item-container-scroll'}); // Category
    // this.filterBrandMain = this.customElement.createElement('div', { className: 'filter__item-container brand__container filter__item-container-scroll'}); // Brand
    // //------Price------//
    // this.itemPriceNumberFrom = this.customElement.createElement('div', { className: 'item-price__from'}); // Price Text Min
    // this.itemPriceNumberTo = this.customElement.createElement('div', { className: 'item-price__to'}); // Price Text Max
    // this.itemPriceInputOne = this.customElement.createElement('input', { type: 'range', step: '1', id:'slider1'}); // Price Input One
    // this.itemPriceInputTwo = this.customElement.createElement('input', { type: 'range', step: '1', id:'slider2'}); // Price Input Two
    // //------Stock------//
    // this.itemStockNumberFrom = this.customElement.createElement('div', { className: 'item-stock-slider__from'}); // Stock Text Min
    // this.itemStockNumberTo = this.customElement.createElement('div', { className: 'item-stock-slider__to'}); // Stock Text Max
    // this.itemStockInputOne = this.customElement.createElement('input', { type: 'range', step: '1', id:'slider3'}); // Stock Input One
    // this.itemStockInputTwo = this.customElement.createElement('input', { type: 'range', step: '1', id:'slider4'}); // Stock Input Two
    // //------Right Top------//
    // this.viewSort = this.customElement.createElement('input', { className: 'view__sort', name: 'sort', placeholder: 'Sorting'}); 
    // this.findCount = this.customElement.createElement('span', { className: 'view__find-count-span', textContent: '100' });
    // this.viewSearch = this.customElement.createElement('input', { className: 'view__search', type:'search', placeholder: 'Search product' });
    // this.viewBlock = this.customElement.createElement('div', { className: 'visible__item viewBlock'});
    // this.viewList = this.customElement.createElement('div', { className: 'visible__item viewList'});

    // this.create();
  }

  create(product: IitemDATA = this.startServerData[0]) {
    const mainItemCard = this.customElement.createElement('section', { className: 'main-itemCard _container itemCard' })
    this.customElement.addChildren(this.PageMainItemCard, [mainItemCard]);



    const itemCardCrumbs = this.customElement.createElement('div', { className: 'itemCard__crumbs crumbs' });

    const crumbsOne = this.customElement.createElement('p', { className: 'crumbs__one', textContent: 'Store' });
    const paragraf = this.customElement.createElement('p', { textContent: '>>' });
    const crumbsTwo = this.customElement.createElement('p', { className: 'crumbs__two', textContent: `${product.category}` });
    const crumbsThree = this.customElement.createElement('p', { className: 'crumbs__three', textContent: `${product.brand}` });
    const crumbsFour = this.customElement.createElement('p', { className: 'crumbs__four', textContent: `${product.title}` });

    this.customElement.addChildren(itemCardCrumbs, [crumbsOne, paragraf, crumbsTwo, paragraf, crumbsThree, paragraf, crumbsFour]);

    const itemCardMain = this.customElement.createElement('section', { className: 'itemCard__main' })

    const itemCardName = this.customElement.createElement('h3', { className: 'itemCard__name', textContent: 'iPhone 9' });
    const itemCardContainer = this.customElement.createElement('div', { className: 'itemCard__container' });

    const itemCardBlock1 = this.customElement.createElement('div', { className: 'itemCard__block1' });

    const itemCardGalery = this.customElement.createElement('div', { className: 'itemCard__galery' });


    for (let index = 0; index < product.images.length; index++) {
      const itemCardImageGalery = this.customElement.createElement('div', { className: 'itemCard__imageGalery' });
      const itemCardImageGaleryImg = this.customElement.createElement('img', {
        className: 'itemCard__imageGalery-img',
        src: product.images[index]
      });

      this.customElement.addChildren(itemCardImageGalery, [itemCardImageGaleryImg]);
      this.customElement.addChildren(itemCardGalery, [itemCardImageGalery]);
    }

    const itemCardMainPhoto = this.customElement.createElement('div', { className: 'itemCard__mainPhoto' });

    const itemCardImagePhoto = this.customElement.createElement('div', { className: 'itemCard__imagePhoto' });

    const itemCardImagePhotoImg = this.customElement.createElement('img', {
      className: 'itemCard__imagePhoto-img',
      src: product.images[0]
    });
    this.customElement.addChildren(itemCardMainPhoto, [itemCardImagePhotoImg]);
    this.customElement.addChildren(itemCardImagePhoto, [itemCardImagePhoto]);

    const itemCardBlock2 = this.customElement.createElement('div', { className: 'itemCard__block2' });

    const itemCardInformation = this.customElement.createElement('div', { className: 'itemCard__information' });

    const itemCardDataDescription = this.customElement.createElement('p', {
      className: 'itemCard-data__description',
      textContent: `Description: ${product.description}`
    });
    const itemCardDataDiscount = this.customElement.createElement('p', {
      className: 'itemCard-data__discount',
      textContent: `Discount: ${product.discountPercentage}`
    });
    const itemCardDataRating = this.customElement.createElement('p', {
      className: 'itemCard-data__rating',
      textContent: `Rating: ${product.rating}`
    });
    const itemCardDataStock = this.customElement.createElement('p', {
      className: 'itemCard-data__stock',
      textContent: `Stock: ${product.stock}`
    });
    const itemCardDataBrand = this.customElement.createElement('p', {
      className: 'itemCard-data__brand',
      textContent: `Description: ${product.brand}`
    });
    const itemCardDataCategory = this.customElement.createElement('p', {
      className: 'itemCard-data__category',
      textContent: `Category: ${product.category}`
    });


    this.customElement.addChildren(itemCardInformation, [itemCardDataDescription, itemCardDataDiscount,
      itemCardDataRating, itemCardDataStock, itemCardDataBrand, itemCardDataCategory
    ]);




    const itemCardSummary = this.customElement.createElement('div', { className: 'itemCard__summary' });

    const itemCardDataPrice = this.customElement.createElement('p', {
      className: 'itemCard-data__price',
      textContent: `Price: $ ${product.price}`
    });

    const cardBtnButton = this.customElement.createElement('button', { className: 'card__btn-button _btn',   textContent: 'Add to Cart' });

// ******************************************** ТУТ 2 ОДИНАКОВЫХ ЭЛЕМЕНТА ПОЧЕМУ?

    const cardBtnButton1234567890 = this.customElement.createElement('button', { className: 'card__btn-button _btn',   textContent: 'Buy now' });



    this.customElement.addChildren(itemCardSummary, [itemCardDataPrice, cardBtnButton, cardBtnButton1234567890]);


    this.customElement.addChildren(itemCardBlock2, [itemCardInformation, itemCardSummary]);

    this.customElement.addChildren(itemCardBlock1, [itemCardGalery, itemCardMainPhoto]);
    this.customElement.addChildren(itemCardContainer, [itemCardBlock1, itemCardBlock2]);
    this.customElement.addChildren(itemCardMain, [itemCardName, itemCardContainer]);
    this.customElement.addChildren(mainItemCard, [itemCardCrumbs, itemCardMain]);

  }

  // create() {
  //   // Создание основной секции
  //   const pageMain = this.customElement.createElement('div', { className: 'page-main-one _main-container'});
  //   const mainOne = this.customElement.createElement('section', { className: 'main-one _container'});
  //   this.customElement.addChildren(pageMain,[mainOne]);

  //   // Создание ЛЕВОЙ СЕКЦИИ!!!
  //   const mainLeft = this.customElement.createElement('div', { className: 'main-one__left filter'});
  //   this.customElement.addChildren(mainOne,[mainLeft]);

  //   // Создание кнопок
  //   const containerButtons = this.customElement.createElement('div', { className: 'filter__stock stock'});
  //   this.customElement.addChildren(mainLeft,[containerButtons]);
  //   this.customElement.addChildren(containerButtons,[this.buttonReset, this.buttonCopy]);

  //   //Добавление Category
  //   this.customElement.addChildren(mainLeft,[this.createCategoryBlock()]);

  //   // Добавление Brand 
  //   this.customElement.addChildren(mainLeft,[this.createBrandBlock()]);

  //   // Создание Price
  //   this.customElement.addChildren(mainLeft,[this.createPriceBlock()]);

  //   // Создание Stock
  //   this.customElement.addChildren(mainLeft,[this.createStockBlock()]);


  //   // Создание ПРАВОЙ СЕКЦИИ!!!
  //   const mainRight = this.customElement.createElement('div', { className: 'main-one__right right'});
  //   this.customElement.addChildren(mainOne,[mainRight]);

  //   // Создание верхней правой секции (поиск, сортировка, количество, вид карточек)
  //   const rightView = this.customElement.createElement('div', { className: 'right__view view'});
  //   this.customElement.addChildren(mainRight,[rightView]);

  //   // Сортировка
  //   this.viewSort.setAttribute('list','sorting');
  //   const dataListSort = this.customElement.createElement('datalist', { id: "sorting"});
  //   const optionSortABC = this.customElement.createElement('option', { value: "SortABC"});
  //   const optionSortPrice = this.customElement.createElement('option', { value: "SortPrice"});
  //   const optionSortRating = this.customElement.createElement('option', { value: "SortRating"});
  //   this.customElement.addChildren(dataListSort,[optionSortABC, optionSortPrice, optionSortRating]);

  //   //Число найденных товров
  //   const viewFindCount = this.customElement.createElement('p', { className: 'view__find-count', textContent: 'Found:'});
  //   this.customElement.addChildren(viewFindCount,[this.findCount]);

  //   //Вид карточек
  //   const viewVisible = this.customElement.createElement('div', { className: 'view__visible visible'});
  //   this.customElement.addChildren(viewVisible,[this.viewBlock, this.viewList]);

  //   // Добавление в правый вернхнюю правую секцию
  //   this.customElement.addChildren(rightView,[this.viewSort, viewFindCount, this.viewSearch, viewVisible]);

  //   // Добавление всего в основной main
  //   this.customElement.addChildren(MAIN,[pageMain]);
  // }

  // // Создание Category
  // createCategoryBlock(dataFilterCategory: stringArrayObject = this.startCategoryData) {
  //   const filterCategory = this.customElement.createElement('div', { className: 'filter__item filter__category category filter__item-scroll'});
  //   const filterCategoryItemName = this.customElement.createElement('h3', { className: 'filter__item-name category__name', textContent: 'Category'});
  //   this.customElement.addChildren(filterCategory,[filterCategoryItemName, this.filterCategoryMain]);
  //   for (const key in dataFilterCategory) {
  //     const itemCategory = itemFilterCheckbox(key, dataFilterCategory[key]); // Функция получение разметки определенного чекбокса
  //     this.customElement.addChildren(this.filterCategoryMain,[itemCategory]);
  //   }

  //   return filterCategory
  // }

  // // Создание Brand
  // createBrandBlock(dataFilterBrand: stringArrayObject = this.startBrandData) {
  //   const filterBrand = this.customElement.createElement('div', { className: 'filter__item filter__brand brand filter__item-scroll'});
  //   const filterBrandItemName = this.customElement.createElement('h3', { className: 'filter__item-name brand__name', textContent: 'Brand'});
  //   this.customElement.addChildren(filterBrand,[filterBrandItemName, this.filterBrandMain]);
  //   for (const key in dataFilterBrand) {
  //     const itemBrand = itemFilterCheckbox(key, dataFilterBrand[key]); // Функция получение разметки определенного чекбокса
  //     this.customElement.addChildren(this.filterBrandMain,[itemBrand]);
  //   }

  //   return filterBrand
  // }

  // // Создание Price
  // createPriceBlock(dataFilterPrice: number[] = this.startPriceOfFILTER) {
  //   const filterPrice = this.customElement.createElement('div', { className: 'filter__item filter__price price'});
  //   const filterPriceItemName = this.customElement.createElement('h3', { className: 'filter__item-name price__name', textContent: 'Price'});
  //   const filterPriceContainer = this.customElement.createElement('div', { className: 'filter__item-container price__container'});
  //   this.customElement.addChildren(filterPrice,[filterPriceItemName, filterPriceContainer]);

  //   const itemPriceNumberContainer = this.customElement.createElement('div', { className: 'filter__item-data item-price'});
  //   const itemPriceInputContainer = this.customElement.createElement('div', { className: 'range-slider'});
  //   this.customElement.addChildren(filterPriceContainer,[itemPriceNumberContainer, itemPriceInputContainer]);

  //   this.itemPriceNumberFrom.textContent = `${dataFilterPrice[0]}`;
  //   this.itemPriceNumberTo.textContent = `${dataFilterPrice[1]}`;
  //   const itemPriceNumberMid = this.customElement.createElement('div', { textContent: '⟷'});
  //   this.customElement.addChildren(itemPriceNumberContainer,[this.itemPriceNumberFrom, itemPriceNumberMid, this.itemPriceNumberTo]);

  //   this.itemPriceInputOne.setAttribute('min', `${dataFilterPrice[0]}`);
  //   this.itemPriceInputOne.setAttribute('max', `${dataFilterPrice[1]}`);
  //   this.itemPriceInputOne.setAttribute('value', `${dataFilterPrice[0]}`);

  //   this.itemPriceInputTwo.setAttribute('min', `${dataFilterPrice[0]}`);
  //   this.itemPriceInputTwo.setAttribute('max', `${dataFilterPrice[1]}`);
  //   this.itemPriceInputTwo.setAttribute('value', `${dataFilterPrice[1]}`);

  //   this.customElement.addChildren(itemPriceInputContainer,[this.itemPriceInputOne, this.itemPriceInputTwo]);

  //   return filterPrice
  // }

  // // Создание Stock
  // createStockBlock(dataFilterStock: number[] = this.startStockOfFILTER) {
  //   const filterStock = this.customElement.createElement('div', { className: 'filter__item filter__stock-slider stock-slider'});
  //   const filterStockItemName = this.customElement.createElement('h3', { className: 'filter__item-name stock-slider__name', textContent: 'Stock'});
  //   const filterStockContainer = this.customElement.createElement('div', { className: 'filter__item-container stock-slider__container'});
  //   this.customElement.addChildren(filterStock,[filterStockItemName, filterStockContainer]);

  //   const itemStockNumberContainer = this.customElement.createElement('div', { className: 'filter__item-data item-stock-slider'});
  //   const itemStockInputContainer = this.customElement.createElement('div', { className: 'range-slider'});
  //   this.customElement.addChildren(filterStockContainer,[itemStockNumberContainer, itemStockInputContainer]);

  //   this.itemStockNumberFrom.textContent = `${dataFilterStock[0]}`;
  //   this.itemStockNumberTo.textContent = `${dataFilterStock[1]}`;
  //   const itemStockNumberMid = this.customElement.createElement('div', { textContent: '⟷'});
  //   this.customElement.addChildren(itemStockNumberContainer,[this.itemStockNumberFrom, itemStockNumberMid, this.itemStockNumberTo]);

  //   this.itemStockInputOne.setAttribute('min', `${dataFilterStock[0]}`);
  //   this.itemStockInputOne.setAttribute('max', `${dataFilterStock[1]}`);
  //   this.itemStockInputOne.setAttribute('value', `${dataFilterStock[0]}`);

  //   this.itemStockInputTwo.setAttribute('min', `${dataFilterStock[0]}`);
  //   this.itemStockInputTwo.setAttribute('max', `${dataFilterStock[1]}`);
  //   this.itemStockInputTwo.setAttribute('value', `${dataFilterStock[1]}`);

  //   this.customElement.addChildren(itemStockInputContainer,[this.itemStockInputOne, this.itemStockInputTwo]);

  //   return filterStock
  // }

  // mainListeners() {
  //   this.filterCategoryMain.addEventListener('click', this.onMainFc);
  //   this.filterBrandMain.addEventListener('click', this.onMainFc);
  // }

  // private onMainFc = () => {
  //   console.log('123');
  // }

}




export default ViewMainitemCard