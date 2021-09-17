import classes from './ExploreGrid.module.css'

import ExploreCard from './ExploreCard';
import ExploreThumb from './ExploreThumb';


const ExploreGrid = (props) => {

  const articles = props.articles

  return (
    <div className={classes.grid}>
      <div className={classes.block1}>
      <ExploreCard articleData={articles[0]} articleImg={articles[0].multimedia[0].url} />
      </div>
      <div className={classes.block2}>
      <ExploreCard articleData={articles[1]} articleImg={articles[1].multimedia[70].url} />
      </div>
      <div className={classes.block3}>
      <ExploreThumb articleData={articles[2]} articleImg={articles[2].multimedia[19].url} />
      </div>
      <div className={classes.block4}>
      <ExploreThumb articleData={articles[3]} articleImg={articles[3].multimedia[19].url} />
      </div>
    </div>
  );
};

export default ExploreGrid