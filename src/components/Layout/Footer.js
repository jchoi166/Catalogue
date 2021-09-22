import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <hr className={classes.solid}></hr>
      <div className={classes.menuContainer}>
        <div className={classes.copyright}>
          <p>&copy; 2021 Catalogue by Jin Choi</p>
          <p className={classes.credit}>
            Website design inspired by 
            <a
              href="https://www.nytimes.com/section/books"
              target="_blank"
              rel="noopener noreferrer"
            >
               The New York Times.
            </a>
          </p>
          {/* <p></p> */}
        </div>
        <div className={classes.social}>
          <div className={classes.socialIcon}>
             <a href="https://github.com/jchoi166" target="_blank" rel="noopener noreferrer">
               <i class="fab fa-github"></i>
             </a>
          </div>
          <div className={classes.socialIcon}>
            <a href="https://www.instagram.com/therealjinchoi/?hl=en" target="_blank" rel="noopener noreferrer">
               <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div className={classes.socialIcon}>
            <a href="https://www.linkedin.com/in/jin-choi-ab1083167/" target="_blank" rel="noopener noreferrer">
               <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className={classes.copyright}></div>
      </div>
    </footer>
  );
};

export default Footer;
