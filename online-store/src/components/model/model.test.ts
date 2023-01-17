import { describe } from '@jest/globals';
import CreateFilterData from './_ModelCreateFilterData';
import { products } from '../DATA/_products'

describe('check connect ModelDataProduct with Server', () => {
  const Model = new CreateFilterData()
  it('is count product of startServerData === count product of SERVERData', () => {
    expect(Model.startServerData.length).toEqual(products.length)
  })
})

describe('is setViewOfFILTER update  Model._FILTER', () => {
  const Model = new CreateFilterData()
  it('is setViewOfFILTER update  Model._FILTER1', () => {
    Model.setViewOfFILTER('Small')

    expect(Model.viewOfFILTER).toEqual(['Small'])
  })
  it('is setViewOfFILTER update  Model._FILTER2', () => {
    Model.setViewOfFILTER('Big')
    expect(Model.viewOfFILTER).toEqual(['Big'])
  })
  it('is setViewOfFILTER update  Model._FILTER3', () => {
    Model.setViewOfFILTER('')
    expect(Model.viewOfFILTER).toEqual(['Big'])
  })
  it('is setViewOfFILTER update  Model._FILTER4', () => {
    Model.setViewOfFILTER('ss3v523vv5s3')
    expect(Model.viewOfFILTER).toEqual(['Big'])
  })
})

describe('is setFILTERBrand update Model.Filter', () => {
  const Model = new CreateFilterData()
  it('is setFILTERBrand update Model.Filter1', () => {
    Model.setFILTERBrand('Apple')
    expect(Model.FILTER.brand).toEqual(['Apple'])
  })
  it('is setFILTERBrand update Model.Filter2', () => {
    Model.setFILTERBrand('Oppo')
    expect(Model.FILTER.brand).toEqual(['Apple', 'Oppo'])
  })
  it('is setFILTERBrand update Model.Filter3', () => {
    Model.setFILTERBrand('Huawei')
    expect(Model.FILTER.brand).toEqual(['Apple', 'Oppo', 'Huawei'])
  })
  it('is setFILTERBrand update Model.Filter4', () => {
    Model.setFILTERBrand('Oppo')
    expect(Model.FILTER.brand).toEqual(['Apple', 'Huawei'])
  })

})

describe('is setFILTERCategory update Model.Filter', () => {
  const Model = new CreateFilterData()
  it('is setFILTERCategory update Model.Filter1', () => {
    Model.setFILTERCategory('smartphones')
    expect(Model.FILTER.category).toEqual(['smartphones'])
  })
  it('is setFILTERCategory update Model.Filter2', () => {
    Model.setFILTERCategory('laptops')
    expect(Model.FILTER.category).toEqual(['smartphones', 'laptops'])
  })
  it('is setFILTERCategory update Model.Filter3', () => {
    Model.setFILTERCategory('fragrances')
    expect(Model.FILTER.category).toEqual(['smartphones', 'laptops', 'fragrances'])
  })
  it('is setFILTERCategory update Model.Filter4', () => {
    Model.setFILTERCategory('laptops')
    expect(Model.FILTER.category).toEqual(['smartphones', 'fragrances'])
  })

})

describe('is filtredData arrayContaining of startServerData', () => {
  const Model = new CreateFilterData()
  it('is filtredData arrayContaining of startServerData1', () => {
    Model.setFILTERCategory('smartphones')
    Model.setFILTERBrand('Apple')
    Model.updateFiltredData()
    expect(Model.startServerData).toEqual(expect.arrayContaining(Model.filtredData))
  })

  it('is filtredData arrayContaining of startServerData2', () => {
    Model.setFILTERCategory('skincare')
    Model.setFILTERBrand('Apple')
    Model.updateFiltredData()
    expect(Model.startServerData).toEqual(expect.arrayContaining(Model.filtredData))
  })

  it('is filtredData arrayContaining of startServerData2', () => {
    Model.clearFILTER()
    Model.updateFiltredData()
    expect(Model.startServerData).toEqual(expect.arrayContaining(Model.filtredData))
  })
})