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
      <a href={article.web_url} target="_blank" rel="noopener noreferrer">
        <img src={imgPrefix + img} alt={article.headline.main}></img>
      </a>
      <a href={article.web_url} target="_blank" rel="noopener noreferrer">
        <h1>{article.headline.main}</h1>
      </a>
      <p>{article.abstract}</p>
      {/* time and author */}
      <p className={classes.abstract}>
        {newDate()} &middot; {article.byline.original}
      </p>
    </div>
  );
};

export default ExploreCard;
