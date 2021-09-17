import classes from "./PageHeader.module.css";


const PageHeader = (props) => {
  return (
    <section className={classes.header}>
      <h1>{props.title}</h1>
      <p>{props.caption}</p>
    </section>
  );
};

export default PageHeader;
