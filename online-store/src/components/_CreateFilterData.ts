import { IitemDATA, IFilter } from './typingTS/_interfaces'

import CreateBaseDate from "./_CreateBaseData"

class CreateFilterData {
  public baseDate: CreateBaseDate;
  public _FILTER: IFilter;
  public _FILTERDATA: IitemDATA[];

  constructor() {
    this.baseDate = new CreateBaseDate();
    this._FILTER = {
      "category": this.baseDate.createCategory(),
      "brand": this.baseDate.createBrand(),
      "price": [10000, 174900],
      "stock": [2000, 150000]
      // "price": [10, 1749],
      // "stock": [2, 150]
    };
    this._FILTERDATA = this.baseDate.data
  }

  public get FILTER() {
    return this._FILTER
  }

  generateFilterData(obj = this._FILTER): IitemDATA[] {
    let filterData: IitemDATA[] = []

    filterData = this.baseDate.data.filter((item) => {
      let keyObj: keyof typeof this.FILTER
      for (keyObj in obj) {
        if (keyObj === "category") {
          let keyObjCategory: keyof typeof this.FILTER.category
          for (keyObjCategory in this.FILTER.category) {
            if (this.FILTER.category[keyObjCategory] && item.category === keyObjCategory) return true
          }
        }
        if (keyObj === "brand") {
          let keyObjBrand: keyof typeof this.FILTER.brand
          for (keyObjBrand in this.FILTER.brand) {
            if (this.FILTER.brand[keyObjBrand] && item.brand === keyObjBrand) return true
          }
        }
        if (keyObj === "price") {
          this.FILTER.price.sort((a, b) => a - b)
          if (this.FILTER.price[0] <= item.price && item.price <= this.FILTER.price[1]) return true
        }
        if (keyObj === "stock") {
          this.FILTER.stock.sort((a, b) => a - b)
          if (this.FILTER.stock[0] <= item.stock && item.stock <= this.FILTER.stock[1]) return true
        }
      }
      return false
    })
    this._FILTERDATA = filterData
    return filterData
  }

}

const App = new CreateFilterData()

// App.baseDate.createCategory().automotive = true

console.log("App.FILTER",App.FILTER)
console.log("App.createFilterData()",App._FILTERDATA)

App.generateFilterData()

console.log("App.createFilterData()ИЗМЕНИЛ",App._FILTERDATA)

App.baseDate.createCategory().automotive = true
App.generateFilterData()

console.log("App.createFilterData()ИЗМЕНИЛ 2222",App._FILTERDATA)


export default CreateFilterData