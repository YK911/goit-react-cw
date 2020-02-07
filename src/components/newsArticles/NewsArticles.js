import React from "react";
// import NewsItem from "../newsItem/NewsItem";
import shortid from "shortid";
import MediaCard from "../../ui/mediaCard/MediaCard";

const NewsArticles = ({ data, handleNextPage }) => {
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
            <>
              <MediaCard key={transformArticles.id} {...transformArticles} />
            </>
          );
        })}
        <button
          onClick={() => handleNextPage}
          style={{
            width: 300,
            height: 30,
            cursor: "pointer",
            margin: "0 auto",
            marginTop: "40px"
          }}
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default NewsArticles;
