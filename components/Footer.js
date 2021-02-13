// import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Footer = () => {
    return (
    // <div>
        <footer className={'footer'}>
            <div className={'footer__top'}>
                <Container className={'footer__top__container'}>
                    <h1 className="text-center mb-5">Need a custom solution?</h1>
                    <div className={'solution'}>
                        <ol className={'solution__list'}>
                            <li className={`query active`}>
                                <a href="#">
                                    Install Theme
                                </a>
                            </li>
                            <li className={'query'}><a href="#">Landing page</a></li>
                            <li className={'query'}><a href="#">Build online store</a></li>
                            <li className={'query'}><a href="#">Custom theme</a></li>
                            <li className={'query'}><a href="#">Custom web site</a>
                            </li>
                            <li className={'query'}><a href="#">Custom app</a></li>
                            <li className={'query'}><a href="#">Marketing assets</a></li>
                        </ol>
                        <div className={'solution__answer'}>
                            <div className={`solution__answer__header d-flex`}>
                                <p className="py-2 m-0 text-center text-capitalize">Install theme</p>
                            </div>
                            <div className={`solution__answer__content col-12 p-0 d-flex`}>
                                <div className={`solution__answer__content__text col-12 col-md-4`}>
                                    <p>
                                        Having trouble with installing any of our themes? Well we can help you by installing the
                                        theme for you!
                                    </p>
                                </div>
                                <div className={`solution__answer__content__theme col-4 p-0 d-none d-md-block`}>
                                    <img src="./img/solution__store.png" alt=""/>
                                </div>
                                <div className={`solution__answer__content__theme col-12 col-md-4 p-0`}>
                                    <img src="./img/solution__laptopWork.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={'footer__bottom'}>
                <Container className={'footer__bottom__container'}>
                    <p>We work with any budget!</p>
                    <button className="button__purple">lets Get started</button>
                </Container>
            </div>
        </footer>
    //   </div>
    );
  };
  
  export default Footer;