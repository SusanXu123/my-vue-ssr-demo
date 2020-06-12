const users = [{
  id: 1,
  name: 'lucy',
  age: 12,
  gender: 'female'
},{
  id: 2,
  name: 'lily',
  age: 14,
  gender: 'female'
}, {
  id: 3,
  name: 'tom',
  age: 16,
  gender: 'male'
}]

const Apis = {
  fetchUsers: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(users)
      }, 300)
    })
  },
  fetchUserInfo: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        id = Number(id)
        const idx = users.findIndex(user => user.id === id)
        if (idx < 0) { return resolve({}) }
        resolve(users[idx])
      }, 200)
    })
  },
}

export default Apis