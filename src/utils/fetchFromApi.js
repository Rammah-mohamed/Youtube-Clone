const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  url: BASE_URL,
  params: {maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': 'db22c86adamshe004de27ce874f7p17e8d6jsnfe2550df29fc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}