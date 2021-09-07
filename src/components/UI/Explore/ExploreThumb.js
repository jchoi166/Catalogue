import classes from './ExploreThumb.module.css'

const ExploreThumb = (props) => {

   const article = props.articleData
   const img = props.articleImg
   const imgPrefix = 'https://static01.nyt.com/'

   return (
      <div className={classes.thumb}>
         <h1>{article.headline.main}</h1>
         <img src={imgPrefix + img}></img>
         <p>{article.abstract}</p>
         {/* time and author */}
         <p>{article.byline.original}</p>
      </div>
   )
}

export default ExploreThumb 