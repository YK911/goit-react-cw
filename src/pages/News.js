import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search/Search";
import { fetchNews } from "../fetcher";
import axios from "axios";

class News extends Component {
  state = {
    news: [],
    query: ""
  };

  async componentDidMount() {
    try {
      const data = await fetchNews();

      this.setState({
        news: data
      });
    } catch (er) {
      console.log(er);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState)
    if (prevState.query !== this.state.query) {
      try {
        // const data = await axios.get(
        //   `${process.env.REACT_APP_DEFAULT_URL}everything?q=${this.state.query}&from=2020-01-11&sortBy=publishedAt&apiKey=f937548ce92c4cccab3e47b760e40b34`
        // );

        const data = await axios.get(this.state.query);
        this.setState({
          news: data
        });
      } catch (er) {
        console.log(er);
      }
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const [input] = evt.target.elements;
    this.setState({
      query: input.value
    });
  };

  render() {
    const { news, query } = this.state;

console.log("===>>>", this.state)

    return (
      <>
        <Search onHandleSubmit={this.handleSubmit} />
        <ul>
          {news.map(article => {
            return (
              <li key={article.publishedAt}>
                <Link
                  to={{
                    pathname: `news/${article.publishedAt}`,
                    search: `?category=${query}`,
                    state: { isAuth: true, news, id: article.publishedAt }
                  }}
                >
                  {article.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default News;
