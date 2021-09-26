const getLastTickets = async () => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/last`)
  const data = await res.json()

  return data.lastTickets;
}

export default getLastTickets