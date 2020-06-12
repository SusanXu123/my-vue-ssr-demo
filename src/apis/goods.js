const goods = [{
  id: 1,
  price: 66,
  name: '花生'
}, {
  id: 2,
  price: 50,
  name: '瓜子'
}, {
  id: 3,
  price: 100,
  name: '巧克力'
}]


export default {
  fetchGoods: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(goods)
      }, 300)
    })
  }
}