import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";
import { ControllerContext } from "../context/ControllerContext";

class NewsArticle extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    console.log("search :", queryString.parse(this.props.location.search));
    const { category } = queryString.parse(this.props.location.search);
    try {
      const data = await axios.get(
        `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f`
      );

      const getArticle = (data, id) => {
        console.log(id);
        return data.find(article => article.source.name === id);
      };
      this.setState({
        article: getArticle(data.data.articles, this.props.match.params.article)
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
      <ControllerContext.Consumer>
        {({ showName }) => {
          return (
            article && (
              <>
                <h2>{article.description}</h2>
                <img src={article.urlToImage} alt="img" />
                <button onClick={this.handleBack}>GoBack</button>
                <button onClick={showName}>SHOW NAME</button>
              </>
            )
          );
        }}
      </ControllerContext.Consumer>
    );
  }
}

export default NewsArticle;
