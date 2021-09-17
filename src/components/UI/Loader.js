import classes from "./Loader.module.css"
import catRunning from "../../assets/cat-running.gif"

const Loader = () => {
   return <div className={classes.loader}>
      <img src={catRunning} alt="A gif of a cat running"/>
   </div>
}

export default Loader