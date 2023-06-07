import axios from "axios";
const BASE_URL = "https://www.googleapis.com/books/v1";

const fetchData = async (query) => {
  const { data } = await axios
    .get(`${BASE_URL}/${query}`)
    .catch((error) => error.message);
  return data;
};

export default fetchData;
