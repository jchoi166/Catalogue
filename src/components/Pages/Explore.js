import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Explore.module.css";

import ExploreCard from "../UI/ExploreCard";
import ExploreGrid from "../UI/ExploreGrid";

const Explore = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.exploreSlice.articles);
  const isLoaded = useSelector((state) => state.exploreSlice.isLoaded);

  return (
    <section className={classes.explore}>
      <h1 className="mainHeader">Explore</h1>
      <p>Check out the latests news on upcoming books!</p>
      {isLoaded && <ExploreGrid articles={articles}/>}
    </section>
  );
};

export default Explore;
