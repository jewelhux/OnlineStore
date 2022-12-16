import { IitemDATA, IFilter } from './typingTS/_interfaces'
import { stringObject } from './typingTS/_type'; 

import CreateBaseDate from "./_CreateBaseData"

class CreateFilterData {
  public readonly baseData: CreateBaseDate;
  public readonly _serverData: IitemDATA[];
  public _filtredData: IitemDATA[];
  public _FILTER: IFilter;

  constructor() {
    this.baseData = new CreateBaseDate();
    this._serverData = this.baseData.data;
    this._filtredData = this.baseData.data;
    this._FILTER = {
      "category": this.baseData.createCategory(),
      "brand": this.baseData.createBrand(),
      "price": [10000, 174900],
      "stock": [2000, 150000]
      // "price": [10, 1749],
      // "stock": [2, 150]
    };
  }
  
  public get filtredData() {
    return this._filtredData
  }
  
  public get FILTER() {
    return this._FILTER
  }

  changeFiltredData(obj = this._FILTER): IitemDATA[] {
    let filterData: IitemDATA[] = []

    filterData = this._serverData.filter((item) => {
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
    this._filtredData = filterData
    return this._filtredData
  }

}

const App = new CreateFilterData()


// App.baseDate.createCategory().automotive = true

console.log("10 = App.FILTER =",App.FILTER)
console.log("20 = App._FILTERDATA =",App._filtredData)

App.changeFiltredData()

console.log("30 = getDataFiltred() App._filtredData=",App._filtredData)


App.FILTER.category.smartphones = true
App.FILTER.category.laptops = true
App.FILTER.brand.Apple = true
App.FILTER.brand.Samsung = true
App.changeFiltredData()

console.log(" 70 =App.changeFiltredData() App._filtredData =",App._filtredData)
// console.log(" 75 = App._serverData =",App._serverData)
console.log("80= App.FILTER = ",App.FILTER)

// const asd = App.FILTER.toString()

// console.log("params",params.toString())

// type ObjectKey<Obj> = keyof Obj;

// interface Ia {
//   brand: ObjectKey<stringObject>
//   category: ObjectKey<stringObject>
// }

const a = {
brand: ["Apple", "Samsung", "OPPO", "Huawei", "Microsoft"] ,
category: ["smartphones", "laptops", "fragrances", "skincare", "groceries"]
}


function returnObjForURLSearch(obj: {[x: string]: string[]}) {

  const result: {[x: string]: string} = {}
  let prop: keyof typeof obj
  
  for (prop in obj) {
    result[prop] = obj[prop].join("|")
  }


  return result
}

console.log("77",returnObjForURLSearch(a))

a.brand.push("lg")
console.log("80 = a = ЗАКНУЛ в строку",a)

const params = new URLSearchParams(returnObjForURLSearch(a))
// const params = new URLSearchParams({
//   brand: 'Apple|Samsung/ и другие ',
//   category:'smartphones|laptops / и другие потом будут',
// })



window.history.replaceState({},'',`?${params.toString()}`)
console.log("window.location.search=",window.location.search)


// const params = new URLSearchParams({ minPrice: '1000', maxPrice: '2000' })

// console.log("90 = params =",params.toString())

const ABC:{[x: string]: string[]} = {}

for (const [key, value] of params.entries()) {
  console.log("100=",key, value)
  ABC[key] = value.split("|")
}

console.log("ABC ВЕРНУЛ из строки= ",ABC)

// for (const value of params.values()) {
//   console.log("200",value)
// }

// function updateURL() {
//   if (history.pushState) {
//       const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
//       const newUrl = baseUrl + '?tyapk=awesome';
//       history.pushState(null, "", newUrl);
//   }
//   else {
//       console.warn('History API не поддерживается');
//   }
// }

// window.onpopstate = updateURL;

// window.history.pushState({},'',params.toString())


// console.log(window.location.search)
// console.log(window.location.origin)


// window.location.assign(
//   `${window.location.origin}${window.location.pathname}?${params.toString()}`
// )


// export default CreateFilterData



// const route = (event: Event) => {
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({}, "", params.toString());
//   handleLocation();
// };

// const routes = {
//   404: "/pages/404.html",
//   "/": "/pages/index.html",
//   "/about": "/pages/about.html",
//   "/lorem": "/pages/lorem.html",
// };

// const handleLocation = async () => {
//   const path = window.location.pathname;
//   const route = routes[path] || routes[404];
//   const html = await fetch(route).then((data) => data.text());
//   document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();