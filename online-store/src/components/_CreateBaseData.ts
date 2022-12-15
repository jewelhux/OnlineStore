import { IitemDATA } from './typingTS/_interfaces'
import { stringObject } from './typingTS/_type'; 

import { products } from './DATA/_products'

class CreateBaseDate {
//  _data: IitemDATA[];
//  _category: stringObject;
//  _brand: stringObject;
  protected _data: IitemDATA[];
  protected _category: stringObject;
  protected _brand: stringObject;

  constructor() {
    this._data = JSON.parse(JSON.stringify(products));
    this._category = {};
    this._brand = {};
  }

  public get data() {
    return this._data
  }
  public get category() {
    return this._category
  }
  public get brand() {
    return this._brand
  }

  createCategory() {
    const setCategory: Set<string> = new Set()
    this.data.forEach((itemObj) => {
      let keyItem: keyof IitemDATA
      for (keyItem in itemObj) {
        if (itemObj.category) setCategory.add(itemObj.category)
      }
    })
    Array.from(setCategory).forEach((i) => {
      this.category[i] = false
    })
    return this.category
  }

  createBrand() {
    const setBrand: Set<string> = new Set()
    this.data.forEach((itemObj) => {
      let keyItem: keyof IitemDATA
      for (keyItem in itemObj) {
        if (itemObj.brand) setBrand.add(itemObj.brand)
      }
    })
    Array.from(setBrand).forEach((i) => {
      this.brand[i] = false
    })
    return this.brand
  }
}

// const aaa = new CreateBaseDate()

// aaa.createCategory()

// console.log("aaa.category",aaa.category)

export default CreateBaseDate
                            // const a = new CreateBaseDate()
                            // a.createCategory()
                            // a.createBrand()
                            // console.log("a.data", a.data)
                            // console.log("a.brand", a.brand)
                            // console.log("a.category", a.category)


                            // const brand: {
                            //   [x: string]: boolean;
                            // } = {}

                            // const category: {
                            //   [x: string]: boolean;
                            // } = {}


                            // function logProductsWithKey(): void {


                            //   const setBrand: Set<string> = new Set()
                            //   const setCategory: Set<string> = new Set()

                            //   products.forEach((itemObj) => {
                            //     let keyItem: keyof IitemDATA
                            //     for (keyItem in itemObj) {
                            //       if (itemObj.brand) { setBrand.add(itemObj.brand) }
                            //       if (itemObj.category) { setCategory.add(itemObj.category) }
                            //     }



                            //   })

                            //   Array.from(setBrand).forEach((i) => {
                            //     brand[i] = false
                            //   })
                            //   Array.from(setCategory).forEach((i) => {
                            //     category[i] = false
                            //   })


                            // }

                            // console.log("brand", brand)

                            // const array1 = logProductsWithKey()

// function createBrand() {
//   Array.from(setBrand).forEach((i) => {
//     brand[i] = false
//   })
// }
// createBrand()

// function createCategory() {
//   Array.from(setCategory).forEach((i) => {
//     category[i] = false
//   })
// }
// createCategory()

            // const FILTER = {
            //   "category": category,
            //   "brand": brand,
            //   "price": [10, 1749],
            //   "stock": [2, 150]
            // }

            // function createFilterData(obj: typeof FILTER = FILTER): IitemDATA[] {
            //   let FilterData: IitemDATA[] = []

            //   FilterData = products.filter((item) => {
            //     let keyObj: keyof typeof FILTER
            //     for (keyObj in obj) {
            //       if (keyObj === "category") {
            //         let keyObjCategory: keyof typeof FILTER.category
            //         for (keyObjCategory in FILTER.category) {
            //           if (FILTER.category[keyObjCategory] && item.category === keyObjCategory) return true
            //         }
            //       }
            //       if (keyObj === "brand") {
            //         let keyObjBrand: keyof typeof FILTER.brand
            //         for (keyObjBrand in FILTER.brand) {
            //           if (FILTER.brand[keyObjBrand] && item.brand === keyObjBrand) return true
            //         }
            //       }
            //       if (keyObj === "price") {
            //         FILTER.price.sort((a, b) => a - b)
            //         if (FILTER.price[0] <= item.price && item.price <= FILTER.price[1]) return true
            //       }
            //       if (keyObj === "stock") {
            //         FILTER.stock.sort((a, b) => a - b)
            //         if (FILTER.stock[0] <= item.stock && item.stock <= FILTER.stock[1]) return true
            //       }
            //     }
            //     return false
            //   })
            //   return FilterData
            // }

            // console.log("FilterData", createFilterData())


// const FILTER = {
//   "category": {
//     "smartphones": false,
//     "laptops": false,
//     "fragrances": false,
//     "skincare": false,
//     "groceries": false,
//     "home-decoration": false,
//     "furniture": false,
//     "tops": false,
//     "womens-dresses": false,
//     "womens-shoes": false,
//     "mens-shirts": false,
//     "mens-shoes": false,
//     "mens-watches": false,
//     "womens-watches": false,
//     "womens-bags": false,
//     "womens-jewellery": false,
//     "sunglasses": false,
//     "automotive": false,
//     "motorcycle": false,
//     "lighting": false,
//   },
//   "brand": brand,
//   "price": [10, 1749],
//   "stock": [2, 150]
// }


