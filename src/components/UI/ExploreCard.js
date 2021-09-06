import classes from './ExploreCard.module.css'

const ExploreCard = (props) => {

   const article = props.articleData
   const img = props.articleImg
   const imgPrefix = 'https://static01.nyt.com/'

   return (
      <div className={classes.card}>
         <img src={imgPrefix + img}></img>
         <h3>{article.headline.main}</h3>
         <p>{article.abstract}</p>
         {/* time and author */}
         <p>{article.byline.original}</p>
      </div>
   )
}

export default ExploreCard 