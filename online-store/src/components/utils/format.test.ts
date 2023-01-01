import { describe } from '@jest/globals';
// import { IFilter } from '../typingTS/_interfaces';
import FormatURL from './_formatUrl';

describe('strToNumber', () => {

  const Format = new FormatURL()
  let startObject: { [x: string]: string[] };
  beforeEach(() => {
    startObject = {
      "category": ['smartthone'],
      "brand": ['Apple'],
      "price": ['10', '12'],
      "stock": ['2', '56'],
      "search": ['Apple'],
      "sort": ['sortABC'],
      "view": ['Big'],
    };
  })

  it('revers strObject To NumberObject', () => {
    expect(Format.strToNumber(startObject)).toEqual({
      "category": ['smartthone'],
      "brand": ['Apple'],
      "price": [10, 12],
      "stock": [2, 56],
      "search": ['Apple'],
      "sort": ['sortABC'],
      "view": ['Big'],
    })
  })

  it('return Object Defined', () => {
    expect(Format.strToNumber(startObject)).toBeDefined()
  })
})


describe('createFromURLSearchParams', () => {
  const Format = new FormatURL()
  let basketObject: { [x: string]: string };
  let params: URLSearchParams;
  beforeEach(() => {
    basketObject = {
      "items": '3',
      "pages": '1',
    };
    params = new URLSearchParams(basketObject)
  })

  it('revers URLSearchParams To NumberObject', () => {
    expect(Format.createFromURLSearchParams<URLSearchParams>(params)).toEqual(
      {
        "items": 3,
        "pages": 1,
      }
    )
  })
})

