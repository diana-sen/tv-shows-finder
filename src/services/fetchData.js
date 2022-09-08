import axios from 'axios'
const fetchData = async () => {
  const req = await window.fetch('https://api.tvmaze.com/shows')
  const res = req.json()
  return res
}

const axiosData = async () => {
  const { data } = await axios.get('https://api.tvmaze.com/shows')
  return data
}

export { fetchData, axiosData }
// minuto 42 del video del 17
