import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Footer = () => {
    return (
    // <div>
        <footer className={style.footer}>
            <div className={style.footer__top}>
                <Container className={style.footer__top__container}>
                    <h1>Need a custom solution?</h1>
                    <div className={style.solution}>
                        <ol className={style.solution__list}>
                            <li className={`${style.query} ${style.active}`}>
                                <a href="#">
                                    Install Theme
                                </a>
                            </li>
                            <li className={style.query}><a href="#">Landing page</a></li>
                            <li className={style.query}><a href="#">Build online store</a></li>
                            <li className={style.query}><a href="#">Custom theme</a></li>
                            <li className={style.query}><a href="#">Custom web site</a>
                            </li>
                            <li className={style.query}><a href="#">Custom app</a></li>
                            <li className={style.query}><a href="#">Marketing assets</a></li>
                        </ol>
                        <div className={style.solution__answer}>
                            <div className={`${style.solution__answer__header} d-flex`}>
                                <p className="py-2 m-0 text-center text-capitalize">Install theme</p>
                            </div>
                            <div className={`${style.solution__answer__content} col-12 p-0 d-flex`}>
                                <div className={`${style.solution__answer__content__text} col-12 col-md-4`}>
                                    <p>
                                        Having trouble with installing any of our themes? Well we can help you by installing the
                                        theme for you!
                                    </p>
                                </div>
                                <div className={`${style.solution__answer__content__theme} col-4 p-0 d-none d-md-block`}>
                                    <img src="./img/solution__store.png" alt=""/>
                                </div>
                                <div className={`${style.solution__answer__content__theme} col-12 col-md-4 p-0`}>
                                    <img src="./img/solution__laptopWork.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={style.footer__bottom}>
                <Container className={style.footer__bottom__container}>
                    <p>We work with any budget!</p>
                    <button className="button__purple">lets Get started</button>
                </Container>
            </div>
        </footer>
    //   </div>
    );
  };
  
  export default Footer;