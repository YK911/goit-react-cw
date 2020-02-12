import axios from "axios";

export const fetchNews = async (param = "car") => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_DEFAULT_URL}everything?q=${param}&from=2020-01-11&sortBy=publishedAt&apiKey=${process.env.REACT_APP_KEY}`
    );
    return data.data.articles;
  } catch (er) {
    console.log(er);
  }
};
