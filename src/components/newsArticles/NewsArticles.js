import React from "react";
// import NewsItem from "../newsItem/NewsItem";
import shortid from "shortid";
import MediaCard from "../../ui/mediaCard/MediaCard";

const NewsArticles = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0px auto",
          marginRight: 30,
          marginBottom: 40
        }}
      >
        {data.map(article => {
          const transformArticles = { ...article, id: shortid() };
          return (
            <MediaCard key={transformArticles.id} {...transformArticles} />
          );
        })}
      </div>
    </>
  );
};

export default NewsArticles;
