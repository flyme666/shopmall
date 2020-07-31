import {request} from "./request";

export function getSlideBarData() {
  return request({
    url: '/category'
  })
}

export function getMainTopData(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getMainMoreData(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  })
}
