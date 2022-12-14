import { IitemDATA } from './typingTS/_interfaces'
import { products } from './DATA/_products'

class CreateBaseDate {
  _product: IitemDATA;

  constructor() {
    this._product = JSON.parse(JSON.stringify(products));
  }


}

console.log("products = ", products)


const setBrand: Set<string> = new Set()
const setCategory: Set<string> = new Set()
const brand: {
  [x: string]: boolean;
} = {}

const category: {
  [x: string]: boolean;
} = {}


function logProductsWithKey(key: keyof IitemDATA = 'id', value: string | number = 1): IitemDATA[] {
  const result: IitemDATA[] = []
  // let i = 0
  products.forEach((itemObj) => {
    let keyItem: keyof IitemDATA
    for (keyItem in itemObj) {
      if (itemObj.brand) { setBrand.add(itemObj.brand) }
      if (itemObj.category) { setCategory.add(itemObj.category) }
      // i++
      if (itemObj[keyItem] === value) {
        result.push(itemObj)
        // console.log(itemObj[key], value)
        // console.log("i=", i, itemObj)
      }
    }
  })
  return result
}

// const array = logProductsWithKey("category", "smartphones")
const array1 = logProductsWithKey("title", "iPhone 9")

// console.log(array)

console.log(array1)

// console.log(setBrand)




function createBrand() {
  Array.from(setBrand).forEach((i) => {
    brand[i] = false
  })
}
createBrand()

function createCategory() {
  Array.from(setCategory).forEach((i) => {
    category[i] = false
  })
}
createCategory()

// brand.Apple = true
// brand.Samsung = true
// brand.Huawei = true
// brand["HP Pavilion"] = true
console.log("brand", brand)





// category.tops = true
console.log("category", category)

const FILTER = {
  "category": category,
  "brand": brand,
  "price": [10, 1749],
  "stock": [2, 150]
}

console.log("FILTER", FILTER)

function createFilterData(obj: typeof FILTER = FILTER): IitemDATA[] {
  let FilterData: IitemDATA[] = []

  FilterData = products.filter((item) => {
    let keyObj: keyof typeof FILTER
    for (keyObj in obj) {
      if (keyObj === "category") {
        let keyObjCategory: keyof typeof FILTER.category
        for (keyObjCategory in FILTER.category) {
          if (FILTER.category[keyObjCategory] && item.category === keyObjCategory) return true
        }
      }
      if (keyObj === "brand") {
        let keyObjBrand: keyof typeof FILTER.brand
        for (keyObjBrand in FILTER.brand) {
          if (FILTER.brand[keyObjBrand] && item.brand === keyObjBrand) return true
        }
      }
      if (keyObj === "price") {
        FILTER.price.sort((a,b) => a-b)
        if (FILTER.price[0] <= item.price &&  item.price <= FILTER.price[1]) return true
      }
      if (keyObj === "stock") {
        FILTER.stock.sort((a,b) => a-b)
        if (FILTER.stock[0] <= item.stock &&  item.stock <= FILTER.stock[1]) return true
      }
    }
  })
  return FilterData
}


console.log("FilterData", createFilterData())


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


