import React, { Component } from "react";
// import axios from "axios";
import Spinner from "../../ui/spinner/Spinner";
import NewsArticles from "../newsArticles/NewsArticles";
import { fetchNews } from "../../fetcher";

class News extends Component {
  state = {
    articles: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const data = await fetchNews();

      this.setState({
        articles: data,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      try {
        const data = await fetchNews(this.props.inputValue);

        this.setState({
          articles: data,
          loading: false
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    const { articles, loading } = this.state;
    return (
      <>
        {loading && <Spinner />}
        <NewsArticles data={articles} />
      </>
    );
  }
}

export default News;
