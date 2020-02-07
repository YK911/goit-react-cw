import axios from "axios";

export const fetchNews = async (param = "all", page = 1) => {
  try {
    const data = await axios.get(
      `https://newsapi.org/v2/everything?q=${param}&from=2020-01-07&${page}&sortBy=publishedAt&apiKey=3f29c3ee10be4440aecbede6c0cbb392`
    );

    return data.data.articles;
  } catch (error) {
    throw new Error(error);
  }
};
