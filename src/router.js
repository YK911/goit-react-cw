import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";

export const useRouter = isAutorization => {
  if (isAutorization) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news/:article" component={NewsArticle} />
        <Route path="/news" component={News} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" component={Auth} />
      <Redirect to="register" />
    </Switch>
  );
};
