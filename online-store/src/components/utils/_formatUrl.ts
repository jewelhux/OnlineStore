import { IFilter } from "../typingTS/_interfaces"
import { stringObject } from "../typingTS/_type"

class FormatURL {


  createURLSearchParams(obj: IFilter) {
    const result: stringObject = {}
    let prop: keyof typeof obj
    for (prop in obj) {
      // if (obj[prop].length !== 0) {
      result[prop] = obj[prop].join("|")
      // }
    }
    return new URLSearchParams(result)
  }

//   createObjectFromURLSearchParams(params: URLSearchParams) {
//     const result: { [x: string]: string[] } = {}
//     for (const [key, value] of params.entries()) {
//         result[key] = value.split("|")
//       }
//       // console.log("100=", key, value)
//     }
//     const result1: IFilter ={}

//         return result
//   }



}

export default FormatURL

// function returnObjForURLSearch(obj: IFilter) {
//   const result: stringObject = {}
//   let prop: keyof typeof obj
//   for (prop in obj) {
//     result[prop] = obj[prop].join("|")
//   }
//   return result
// }



// for (const [key, value] of params.entries()) {
//   // console.log("100=", key, value)
//   ABC[key] = value.split("|")
// }