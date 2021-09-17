import { useSelector } from "react-redux";

import classes from "./Explore.module.css";

import ExploreGrid from "../UI/Explore/ExploreGrid";
import PageHeader from "../Layout/PageHeader";

const Explore = () => {
  const articles = useSelector((state) => state.exploreSlice.articles);
  const isLoaded = useSelector((state) => state.exploreSlice.isLoaded);

  return (
    <section className={classes.explore}>
      <PageHeader title={"Explore"} caption={'Check out our features on upcoming and noteworty books!'} />
      {isLoaded && <ExploreGrid articles={articles}/>}

      <h1>Remember to add a carousel here!</h1>
    </section>

  );
};

export default Explore;
