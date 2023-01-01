import { describe } from '@jest/globals';
// import { IFilter } from '../typingTS/_interfaces';

import ViewValidation from './_ViewValidation'

describe('ViewValidation input phone', () => {

  const Validation = new ViewValidation()
  // let startObject: { [x: string]: string[] };
  // beforeEach(() => {

  // })

  it('is numbner phone valid', () => {
    expect(Validation.isValidInputPhone('+1234567890')).toBeTruthy()
  })
  it('is numbner phone valid', () => {
    expect(Validation.isValidInputPhone('+111111111')).toBeTruthy()
  })
  it('is numbner phone valid', () => {
    expect(Validation.isValidInputPhone('+1234+6789')).not.toBeTruthy()
  })
  it('is numbner phone valid', () => {
    expect(Validation.isValidInputPhone('1234567890')).not.toBeTruthy()
  })


})

describe('ViewValidation input adress', () => {

  const Validation = new ViewValidation()

  it('is adress valid', () => {
    Validation.InputAdress.value = 'strit pervomaidka seven'
    expect(Validation.isValidInputAdress()).toBeTruthy()
  })
  it('is adress valid', () => {
    Validation.InputAdress.value = 'Kazan cove15/58 corpus2'
    
    expect(Validation.isValidInputAdress()).toBeTruthy()
  })
  it('is adress valid', () => {
    Validation.InputAdress.value = 'qwe asd zxc'
    expect(Validation.isValidInputAdress()).not.toBeTruthy()
  })
  it('is adress valid', () => {
    Validation.InputAdress.value = '12 12'
    expect(Validation.isValidInputAdress()).not.toBeTruthy()
  })
})

describe('ViewValidation input email', () => {

  const Validation = new ViewValidation()

  it('is email valid', () => {
    Validation.InputMail.value = 'asdf@zxcv.com'
    expect(Validation.isValidInputInputMail()).toBeTruthy()
  })
  it('is email  valid', () => {
    Validation.InputMail.value = 'ASDFC/55/55@XXXX.YTREWQ'
    
    expect(Validation.isValidInputInputMail()).toBeTruthy()
  })
  it('is email  valid', () => {
    Validation.InputMail.value = 'caty@geniy'
    expect(Validation.isValidInputInputMail()).not.toBeTruthy()
  })
  it('is email  valid', () => {
    Validation.InputMail.value = 'sdfsgs fdsgdf@sdfgdfg.ru'
    expect(Validation.isValidInputInputMail()).not.toBeTruthy()
  })
})