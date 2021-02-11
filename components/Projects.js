import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Project = () => {
    
    return (
    //   <div>
        <section className={`${style.project} container-fluid p-0 vh-100`}>
            <div className={`${style.project__view} overflow-hidden position-relative d-flex flex-column-reverse`}>
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

                <Container className="w-100 justify-content-center text-center mb-4 mb-md-5">
                    <button className='button__purple--inverse mr-3 mb-2 mb-md-0'>View theme</button>
                    <button className='button__purple--inverse mr-3'>View Apps</button>
                </Container>
            </div>
        </section>
    //   </div>
    );
  };
  
  export default Project;