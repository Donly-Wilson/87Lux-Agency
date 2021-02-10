import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Project = () => {
    
    return (
    //   <div>
        <section className={`${style.project} container-fluid`}>
            <div className={style.project__view}>
                <ul className={style.project__view__list}>
                    <div className={style.project__view__list__title}>Latest projects</div>

                    <li className={style.projects}>
                        <a href="#">
                            <img src="https://speckyboy.com/wp-content/uploads/2019/03/restaurant-food-drink-website-inspiration-web-design-ui-04.jpg"
                                alt="project admin"/>
                        </a>
                    </li>
                    <li className={style.projects}>
                        <a href="#" className={style.project__1}>
                            <img src="https://agentestudio.com/uploads/ckeditor/pictures/1578/content_fashion_website_design_5.jpg"
                                alt="project store"/>
                        </a>
                    </li>
                    <li className={style.projects}>
                        <a href="#">
                            <img src="https://s3.amazonaws.com/noupe/2017/01/20-inspirational-dashboard-designs-ladder.jpg"
                                alt="project resaurant"/>
                        </a>
                    </li>
                </ul>

                <Container className={style.project__btns}>
                    <button className='button__purple--inverse'>View theme</button>
                    <button className='button__purple--inverse'>View Apps</button>
                </Container>
            </div>
        </section>
    //   </div>
    );
  };
  
  export default Project;