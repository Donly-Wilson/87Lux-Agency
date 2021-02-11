import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Platform from "../components/Platform";

const Jumbotron = () => {
    return (
        <section className= {`${style.jumbo} h-100 overflow-hidden`}>
            <Container>
                <div className= {style.jumbo__content}>
                    <div className= {style.jumbo__content__info}>
                        <h1>We give your business an Edge</h1>
                        <h1>Over Your Competitor!</h1>
                        <p>Every thing you need for your business: Themes, Apps, Assets and More..</p>
                        <input type="email" name="" id="" placeholder="Enter your email address"/>
                        <button className= "button__purple">Get Started</button>
                    </div>
                    <div className= {style.jumbo__shapes}>
                        <div className= {style['jumbo__shapes__circle--green']}></div>
                        <div className= {style['jumbo__shapes__circle--blue']}></div>
                        <div className= {style['jumbo__shapes__triangle--purple']}></div>
                        <div className= {style['jumbo__shapes__rectangle--orange']}>
                            <div className= {style.overlay}>
                                <a href="#" className= {style.play__btn}>
                                    <img src="./img/Play.png" alt="" srcset=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Platform/>
        </section>
    );
  };
  
  export default Jumbotron;