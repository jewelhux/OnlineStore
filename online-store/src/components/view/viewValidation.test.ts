import { describe } from '@jest/globals';
// import { IFilter } from '../typingTS/_interfaces';

import ViewValidation from './_ViewValidation'

describe('strToNumber', () => {

  const Validation = new ViewValidation()
  // let startObject: { [x: string]: string[] };
  beforeEach(() => {
    // startObject = {
    //   "category": ['smartthone'],
    //   "brand": ['Apple'],
    //   "price": ['10', '12'],
    //   "stock": ['2', '56'],
    //   "search": ['Apple'],
    //   "sort": ['sortABC'],
    //   "view": ['Big'],
    // };
  })

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

  // it('return Object Defined', () => {
  //   expect(Format.strToNumber(startObject)).toBeDefined()
  // })
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

