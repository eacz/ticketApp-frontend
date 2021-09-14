const getUserStorage = () => {
  return {
    agent: localStorage.getItem('agent'),
    desk: localStorage.getItem('desk'),
  }
}

export const clearUserStorage = () => {
  localStorage.removeItem('agent')
  localStorage.removeItem('desk')
}

export default getUserStorage
