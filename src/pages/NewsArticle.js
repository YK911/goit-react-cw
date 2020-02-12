import React, { Component } from "react";
// import axios from "axios";
import queryString from "query-string";
import { fetchNews } from "../fetcher";

const getArticle = (data, id) => {
  return data.find(article => article.publishedAt === id);
};

class NewsArticle extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    const { category } = queryString.parse(this.props.location.search);
    try {
      const data = await fetchNews(category);

      console.log("data", data);

      this.setState({
        article: getArticle(data, this.props.location.state.id)
      });
    } catch (er) {
      console.log(er);
    }
  }

  handleBack = () => {
    this.props.history.push("/news");
  };
  render() {
    const { article } = this.state;
    return (
      article && (
        <>
          <h2>{article.description}</h2>
          <img src={article.urlToImage} alt="img" />
          <button onClick={this.handleBack}>GoBack</button>{" "}
        </>
      )
    );
  }
}

export default NewsArticle;
