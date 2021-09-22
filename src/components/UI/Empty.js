import classes from './Empty.module.css'

const Empty = (props) => {
   return (
      <div className={classes.notLogin}>
               <h1>{props.header}</h1>
               <p>{props.message}</p>
      </div>
   )
}

export default Empty