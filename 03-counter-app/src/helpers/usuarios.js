
export const getUser = () => {
  return {
    uid: 1,
    username: 'jose'
  }
}

const fake_users = [
  {id: 1, username: 'peter'},
  {id: 2, username: 'rogers'}
]

export const getUserActivo = (id) => {
  return fake_users.find( item => id === item.id);
}
