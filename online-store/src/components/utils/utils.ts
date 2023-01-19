
import { IBascetLocalStorage } from '../typingTS/_interfaces';

// Функция получения HTML элемента из строки
const createElement = (template: string): HTMLElement => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild as HTMLElement
};

const getLocalStorageValue = (name: string): IBascetLocalStorage[] => {
  const readlocalStorage = localStorage.getItem(name)
  if (readlocalStorage) {
    return JSON.parse(readlocalStorage);
  } else {
    return [];
  }
}

export { createElement, getLocalStorageValue }
