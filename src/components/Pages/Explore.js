import { useSelector } from "react-redux";

import classes from "./Explore.module.css";

import ExploreGrid from "../UI/Explore/ExploreGrid";
import PageHeader from "../Layout/PageHeader";
import Loader from "../UI/Loader";

const Explore = () => {
  const articles = useSelector((state) => state.exploreSlice.articles);
  const isLoaded = useSelector((state) => state.exploreSlice.isLoaded);

  return (
    <section className={classes.explore}>
      <PageHeader title={"Explore"} caption={'Check out our features on upcoming and noteworty books!'} />
      {isLoaded && <ExploreGrid articles={articles}/>}
      {!isLoaded && <Loader/>}
    </section>

  );
};

export default Explore;
