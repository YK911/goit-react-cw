import React, { Component } from "react";
// import axios from "axios";
import Spinner from "../../ui/spinner/Spinner";
import NewsArticles from "../newsArticles/NewsArticles";
import { fetchNews } from "../../fetcher";

class News extends Component {
  state = {
    articles: [],
    loading: true,
    page: 1
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

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
      try {
        const data = await fetchNews(this.props.inputValue);
        this.setState({
          articles: data,
          loading: false,
          page: 1
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (prevState.page !== this.state.page) {
      try {
        const data = await fetch(this.props.inputValue);
        this.setState({
          articles: data,
          loading: false,
          page: 1
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  handleNextPage = () => {
    this.setState(prev => ({
      page: prev.page + 1
    }));
  };

  render() {
    const { articles, loading } = this.state;
    return (
      <>
        {loading && <Spinner />}
        <NewsArticles data={articles} handleNextPage={this.handleNextPage} />
      </>
    );
  }
}

export default News;
