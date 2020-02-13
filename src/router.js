import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
// import Home from "./pages/Home";
// import Auth from "./pages/Auth";
// import News from "./pages/News";
// import NewsArticle from "./pages/NewsArticle";

const LoadbleHome = Loadable({
  loader: () => import("./pages/Home" /* webpackChunkName: "home-page" */),
  loading() {
    return <p>loading...</p>;
  }
});

const LoadbleNews = Loadable({
  loader: () => import("./pages/News" /* webpackChunkName: "news-page" */),
  loading() {
    return <p>loading...</p>;
  }
});

const LoadbleArticle = Loadable({
  loader: () =>
    import("./pages/NewsArticle" /* webpackChunkName: "article-page" */),
  loading() {
    return <p>loading...</p>;
  }
});

const LazyAuth = lazy(() =>
  import("./pages/Auth" /* webpackChunkName: "auth-page" */)
);

export const useRouter = isAutorization => {
  if (isAutorization) {
    return (
      <Switch>
        <Route exact path="/" component={LoadbleHome} />
        <Route path="/news/:article" component={LoadbleArticle} />
        <Route path="/news" component={LoadbleNews} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Suspense>
      <Switch>
        <Route path="/" component={LazyAuth} />
        <Redirect to="register" />
      </Switch>
    </Suspense>
  );
};
