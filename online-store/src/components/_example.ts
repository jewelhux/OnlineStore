import { IitemDATA } from './typingTS/_interfaces'


import { products } from './DATA/_products'



console.log(products)


function logProductsWithKey(key: keyof IitemDATA = 'id', value: string | number = 1): IitemDATA[] {
const result:IitemDATA[] = []
let i = 0
  products.forEach((itemObj) => {
    let keyItem: keyof IitemDATA
    for (keyItem in itemObj) {
      i++
      if (itemObj[keyItem] === value) {
        result.push(itemObj)
        console.log(itemObj[key],value)
        console.log("i=",i,itemObj)
      }
    }
  })
  return result
}

const array = logProductsWithKey("category", "smartphones")
const array1 = logProductsWithKey("title", "iPhone 9")

console.log(array)

console.log(array1)


// type itemProduct = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// }

// type keyofItemProduct = keyof itemProduct

// function logProductsWithKey(key = 'id', value = 1) {
// let i = 0
//   products.forEach((itemObj) => {
//     for (let keyItem in itemObj) {
//       i++
//       if (itemObj[keyItem] === value) {

//         console.log(itemObj[keyItem],value)
//         console.log("i=",i,itemObj)
//       }
//     }
//   })
// }

// logProductsWithKey("category", "smartphones")



