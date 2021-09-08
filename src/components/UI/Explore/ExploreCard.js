import classes from "./ExploreCard.module.css";

const ExploreCard = (props) => {
  const article = props.articleData;
  const img = props.articleImg;
  const imgPrefix = "https://static01.nyt.com/";

  const newDate = () => {
    let date = new Date(article.pub_date);
    date = date.toLocaleString();
    return date;
  };

  return (
    <div className={classes.card}>
      <img src={imgPrefix + img}></img>
      <h1>{article.headline.main}</h1>
      <p>{article.abstract}</p>
      {/* time and author */}
      <p className={classes.abstract}>
        {newDate()} &middot; {article.byline.original}
      </p>
    </div>
  );
};

export default ExploreCard;