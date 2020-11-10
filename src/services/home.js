import {request} from './request'

export function requestMenuList() {
  return request({
    url: '/system/menu'
  })
}

export function requestStaffInfo(currentPage, size) {
  return request({
    url: '/employee/basic/',
    params: {
      currentPage,
      size
    }
  })
}

export class menuList {
  constructor(menuList) {
    this.menuData = this.handelArrData(menuList)
  }
  
  handelArrData(arr) {
    let menuData = []
    arr.forEach(item => {
      let obj = {}
      obj.title = item.name
      let items = []
      item.children.forEach(child => {
        let itemsObj = {}
        itemsObj.title = child.name
        itemsObj.path = item.path + child.path
        items.push(itemsObj)
      })
      obj.items = items
      menuData.push(obj)
    })
    return menuData
  }
}

