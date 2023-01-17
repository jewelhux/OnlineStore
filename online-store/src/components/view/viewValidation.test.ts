import { describe } from '@jest/globals';
import ViewValidation from './_ViewValidation'

describe('ViewValidation input phone', () => {

  const Validation = new ViewValidation()

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
    Validation.inputAdress.value = 'strit pervomaidka seven'
    expect(Validation.isValidInputAdress()).toBeTruthy()
  })
  it('is adress valid', () => {
    Validation.inputAdress.value = 'Kazan cove15/58 corpus2'

    expect(Validation.isValidInputAdress()).toBeTruthy()
  })
  it('is adress valid', () => {
    Validation.inputAdress.value = 'qwe asd zxc'
    expect(Validation.isValidInputAdress()).not.toBeTruthy()
  })
  it('is adress valid', () => {
    Validation.inputAdress.value = '12 12'
    expect(Validation.isValidInputAdress()).not.toBeTruthy()
  })
})

describe('ViewValidation input email', () => {

  const Validation = new ViewValidation()

  it('is email valid', () => {
    Validation.inputMail.value = 'asdf@zxcv.com'
    expect(Validation.isValidInputInputMail()).toBeTruthy()
  })
  it('is email  valid', () => {
    Validation.inputMail.value = 'ASDFC/55/55@XXXX.YTREWQ'

    expect(Validation.isValidInputInputMail()).toBeTruthy()
  })
  it('is email  valid', () => {
    Validation.inputMail.value = 'caty@geniy'
    expect(Validation.isValidInputInputMail()).not.toBeTruthy()
  })
  it('is email  valid', () => {
    Validation.inputMail.value = 'sdfsgs fdsgdf@sdfgdfg.ru'
    expect(Validation.isValidInputInputMail()).not.toBeTruthy()
  })
})