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
  // let startObject: { [x: string]: string[] };
  // beforeEach(() => {

  // })

  it('is adress valid', () => {
    Validation.InputAdress.value = 'strit pervomaidka seven'
    expect(Validation.isValidInputAdress()).toBeTruthy()
  })
  it('is adress phone valid', () => {
    Validation.InputAdress.value = 'Kazan cove15/58 corpus2'
    
    expect(Validation.isValidInputAdress()).toBeTruthy()
  })
  it('is adress phone valid', () => {
    Validation.InputAdress.value = 'qwe asd zxc'
    expect(Validation.isValidInputAdress()).not.toBeTruthy()
  })
  it('is adress phone valid', () => {
    Validation.InputAdress.value = '12 12'
    expect(Validation.isValidInputAdress()).not.toBeTruthy()
  })
})























// describe('createFromURLSearchParams', () => {
//   const Format = new FormatURL()
//   let basketObject: { [x: string]: string };
//   let params: URLSearchParams;
//   beforeEach(() => {
//     basketObject = {
//       "items": '3',
//       "pages": '1',
//     };
//     params = new URLSearchParams(basketObject)
//   })

//   it('revers URLSearchParams To NumberObject', () => {
//     expect(Format.createFromURLSearchParams(params)).toEqual(
//       {
//         "items": 3,
//         "pages": 1,
//       }
//     )
//   })
// })

