import './_global.scss';
import '../index.html';
import './components/_add_favicon';
import ControllerMain from './components/controller/_ControllerMain'
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const APP = new ControllerMain()
APP.init()


const fnSliderPrice = () => {
  const sliderPrice = document.getElementById('sliderPrice') as noUiSlider.target;

  if(sliderPrice) {
    noUiSlider.create(sliderPrice, {
      start: [1, 50],
      connect: true,
      step: 1,
      range: {
          'min': 1,
          'max': 50
      }
    });
  
    const inputPrice1 = document.querySelector('.item-price__from') as HTMLInputElement;
    const inputPrice2 = document.querySelector('.item-price__to') as HTMLInputElement;
    const inputs = [inputPrice1, inputPrice2];
  
    sliderPrice.noUiSlider?.on('update', function(values: (string | number)[], handle: number): void { 
      inputs[handle].textContent = String(Math.round(Number(values[handle])));
    });
  }
}

const fnSliderStock = () => {
  const sliderStock = document.getElementById('sliderStock') as noUiSlider.target;

  if(sliderStock) {
    noUiSlider.create(sliderStock, {
      start: [1, 999],
      connect: true,
      step: 1,
      range: {
          'min': 1,
          'max': 999
      }
    });
  
    const inputStock1 = document.querySelector('.item-stock__from') as HTMLInputElement;
    const inputStock2 = document.querySelector('.item-stock__to') as HTMLInputElement;
    const inputs = [inputStock1, inputStock2];
  
    sliderStock.noUiSlider?.on('update', function(values: (string | number)[], handle: number): void { 
      inputs[handle].textContent = String(Math.round(Number(values[handle])));
    });
  }
}


fnSliderPrice();
fnSliderStock();