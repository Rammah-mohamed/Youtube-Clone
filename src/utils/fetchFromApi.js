import axios from "axios";
const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
	url: BASE_URL,
	headers: {
		"X-RapidAPI-Key": "bff455d4dfmsh196bf9b08bacb33p1efd8bjsn485fc9dac3a6",
		"X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
	},
};

export const fetchFromApi = async (query) => {
	const { data } = await axios.get(`${BASE_URL}/${query}`, options);
	return data;
};
