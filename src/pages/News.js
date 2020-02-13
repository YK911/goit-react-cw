import React, { Component, lazy, Suspense } from "react";
import axios from "axios";
import { fetchNews } from "../fetcher";
import { Spinner } from "../components/Spinner";
import Btn from "../ui/Button";
import styles from "./news.module.css";
import Drawer from "../ui/Drawer";
import { NewsContext } from "../context/NewsContext";
import { ControllerContext } from "../context/ControllerContext";

const ShowMenu = lazy(() =>
  import("../ui/CustomizedMenu" /* webpackChunkName: 'DropMenu' */)
);

class News extends Component {
  state = {
    news: [],
    query: "",
    isOpen: false
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
    if (prevState.query !== this.state.query) {
      try {
        const data = await axios.get(
          `https://newsapi.org/v2/everything?q=${this.state.query}&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f`
        );
        console.log(data);

        this.setState({
          news: data.data.articles
        });
      } catch (er) {
        console.log(er);
      }
    }
  }

  onHandleSubmit = evt => {
    evt.preventDefault();
    const [input] = evt.target.elements;
    console.log(input.value);
    this.setState({
      query: input.value
    });
  };

  onHandleMenuOpen = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen
    }));
  };

  render() {
    const { news = [], query, isOpen } = this.state;
    console.log("news !!!");
    return (
      <ControllerContext.Consumer>
        {value => {
          console.log("context theme :", value);
          return (
            <NewsContext.Provider
              value={{
                news,
                query,
                isOpen,
                onHandleSubmit: this.onHandleSubmit,
                onHandleMenuOpen: this.onHandleMenuOpen,
                buttonName: isOpen ? "CLose" : "Open"
              }}
            >
              <Drawer />
              <div className={styles.navMenu}>
                <Btn />
              </div>
              <Suspense fallback={<Spinner />}>
                {isOpen && <ShowMenu />}
              </Suspense>
            </NewsContext.Provider>
          );
        }}
      </ControllerContext.Consumer>
    );
  }
}

export default News;
