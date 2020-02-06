import axios from "axios";

export const fetchNews = async (param = "all") => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/everything?q=${param}&from=2020-01-06&sortBy=publishedAt&apiKey=${process.env.REACT_APP_KEY}`
    );

    return data.data.articles;
  } catch (error) {
    throw new Error(error);
  }
};
