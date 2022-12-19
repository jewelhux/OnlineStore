import CustomElement from '../utils/_createCustomElement';
import basket from '../../assets/img/png/basket.png'

interface IitemDATA {
  id: number;
  min: number;
  max: number;
}


class ViewMain {
  mainCheckList: HTMLElement
  customElement: CustomElement

  constructor() {
    this.customElement = new CustomElement();
    this.mainCheckList = this.customElement.createElement('div', { className: 'filter__item-container category__container filter__item-container-scroll'});

    this.create();
  }


  create() {
    const filterCategory = this.customElement.createElement('div', { className: 'filter__item filter__category category filter__item-scroll'});

    const filterItemName = this.customElement.createElement('h3', { className: 'filter__item-name category__name', textContent: 'Category'});
    this.customElement.addChildren(filterCategory,[filterItemName, this.mainCheckList]);

    for (let i = 1; i < 4; i++) {
      const item = this.customElement.createElement('div');
      const input = this.customElement.createElement('input', { type: 'checkbox', name: String(i), id: String(i)});
      const label = this.customElement.createElement('label', { for: String(i), textContent: String(i)});
      this.customElement.addChildren(item,[input, label]);
      this.customElement.addChildren(this.mainCheckList,[item]);
    }

    document.body.append(filterCategory)
  }


  headerListeners() {
    this.mainCheckList.addEventListener('click', this.onheaderBasketClick);
  }

  private onheaderBasketClick = () => {
    console.log('123');
  }

}

export default ViewMain