import classes from './ExploreGrid.module.css'

import ExploreCard from './ExploreCard';

const ExploreGrid = (props) => {

  const articles = props.articles

  return (
    <div className={classes.grid}>
      <div className={classes.block1}>
      <ExploreCard articleData={articles[0]} articleImg={articles[0].multimedia[0].url} />
      </div>
      <div className={classes.block2}>
      <ExploreCard articleData={articles[1]} articleImg={articles[1].multimedia[72].url} />
      </div>
      <div className={classes.block3}>
      {/* <ExploreCard articleData={articles[0]} articleImg={articles[0].multimedia[0].url} /> */}
      </div>
      <div className={classes.block4}>
      {/* <ExploreCard articleData={articles[0]} articleImg={articles[0].multimedia[0].url} /> */}
      </div>
    </div>
  );
};

export default ExploreGrid