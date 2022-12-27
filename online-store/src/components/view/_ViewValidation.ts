import CustomElement from '../utils/_createCustomElement';
// import { createElement } from '../utils/utils';.


class ViewValidation {
  customElement: CustomElement;
  confirmButton: HTMLElement;
  InputName: HTMLInputElement;

  EVENT: { [x: string]: Event }

  constructor() {
    this.customElement = new CustomElement();
    this.confirmButton = this.customElement.createElement('button', { className: '_btn confirm__button', textContent: 'Confirm' });



    // ИНПУТЫ
    this.InputName = this.customElement.createElement('input',
     { className: '_inp popup__dataInput-name', type: 'text', placeholder: 'Your Name' }) as  HTMLInputElement;





     console.log('this.InputName',this.InputName.value)

    this.EVENT = {
      clickOnConfirm: new Event('clickOnConfirm', { bubbles: true }),// Клик на кнопку confirm
    }

    this.listenersValidationPage();
  }

  listenersValidationPage() {

    this.confirmButton.addEventListener('click', (e) => {
      // this.confirmButton.dispatchEvent(this.EVENT.clickOnConfirm)

console.log('isValidInputName() = ', this.isValidInputName())


    });


    this.InputName.addEventListener('keyup', (e)=> {

      this.InputName.value = this.InputName.value.replace(/[^a-z^A-Z ^А-ЯЁ^а-яё]/g, "")

      // console.log(this.InputName.value)
      // console.log(this.InputName.value.split(' ').filter(item => item))
      // (e.target as HTMLInputElement).value).replace()
    })

  }


isValidInputName(){
  const array = this.InputName.value.split(' ').filter(item => item)
  console.log('array',array)
  if (array.length > 1 && array.every(item => item.length > 2) ) {
    return true
  }
  return false
}




  create() {
    const pageMainValidation = this.customElement.createElement('div', { className: 'page-main-itemCard _main-container' }); // Основная cекция

    // Создание pageMainValidation
    const popupWrapper = this.customElement.createElement('div', { className: 'popupWrapper' });
    this.customElement.addChildren(pageMainValidation, [popupWrapper]);
    
    // Создание popupWrapper
    const popup = this.customElement.createElement('div', { className: 'popup' });
    this.customElement.addChildren(popupWrapper, [popup]);

    // Создание popup 
    const popupBlock = this.customElement.createElement('div', { className: 'popup__block' });
    this.customElement.addChildren(popup, [popupBlock]);

    // Создание popupBlock
    const popupDataInput = this.customElement.createElement('div', { className: 'popup__dataInput' });
    const popupCreditInput = this.customElement.createElement('div', { className: 'popup__creditInput creditInput' });
    this.customElement.addChildren(popupBlock, [popupDataInput, popupCreditInput, this.confirmButton]);

    // Создание popupDataInput
    const popupPersona = this.customElement.createElement('h3', { className: 'popup__persona', textContent: 'Personal details' });
    // const popupDataInputName = this.customElement.createElement('input', { className: '_inp popup__dataInput-name', type: 'text', placeholder: 'Your Name' });
    const popupDataInputPhone = this.customElement.createElement('input', { className: '_inp popup__dataInput-phone', type: 'text', placeholder: 'Phone number' });
    const popupDataInputAdress = this.customElement.createElement('input', { className: '_inp popup__dataInput-adress', type: 'text', placeholder: 'Adress' });
    const popupDataInputMail = this.customElement.createElement('input', { className: '_inp popup__dataInput-mail', type: 'mail', placeholder: 'E-mail' });
    this.customElement.addChildren(popupDataInput, [popupPersona, this.InputName,popupDataInputPhone, popupDataInputAdress, popupDataInputMail]);


popupDataInputMail.classList.add('placeholder-red');
(popupDataInputMail as HTMLInputElement).placeholder = 'ВВЕДИ НОРМ ЗНАЧЕНИЕ КУКУШКА'
    // Создание popupCreditInput
    const creditInputTitle = this.customElement.createElement('h3', { className: 'creditInput__title', textContent: 'Card Details' });
    const creditInputCardNumber = this.customElement.createElement('div', { className: 'creditInput__cardNumber' });
    const creditInputCardSecret = this.customElement.createElement('div', { className: 'creditInput__cardSecret' });
    this.customElement.addChildren(popupCreditInput, [creditInputTitle, creditInputCardNumber, creditInputCardSecret]);

    // Создание creditInputCardNumber
    const creditInputImage = this.customElement.createElement('div', { className: 'creditInput__image' });
    const creditInputCardNumberNumber = this.customElement.createElement('input', { className: '_inp creditInput__cardNumber-number', type: 'text', placeholder: 'Card number' });
    this.customElement.addChildren(creditInputCardNumber, [creditInputImage, creditInputCardNumberNumber]);

    // Создание creditInputImage
    const creditInputImageImg = this.customElement.createElement('img', { src:'#' });
    this.customElement.addChildren(creditInputImage, [creditInputImageImg]);

    // Создание creditInputCardSecret
    const cardNumberDate = this.customElement.createElement('input', { className: '_inp creditInput__cardNumber-date', type: 'text', placeholder: 'Date' });
    const cardNumberCVV = this.customElement.createElement('input', { className: '_inp creditInput__cardNumber-cvv', type: 'text', placeholder: 'CVV' });
    this.customElement.addChildren(creditInputCardSecret, [cardNumberDate, cardNumberCVV]);

    return pageMainValidation
  }






}

export default ViewValidation