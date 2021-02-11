import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Platform = () => {
    return (
        <Container className= {`${style.platform} mt-5`}>
                <p>platforms</p>
                <div className= "row justify-content-center align-items-center mx-0">
                    <a href="#"><img className= 'mr-2 mt-2 mt-md-0' src="./img/shopify.png" alt="shopify"/></a>
                    <a href="#"><img className= 'mr-2 mt-2 mt-md-0' src="./img/wordpress.png" alt="wordpress"/></a>
                    <a href="#"><img className= 'mr-2 mr-md-0 mt-2 mt-md-0' src="./img/wix.png" alt="wix"/></a>
                    <a href="#"><img className= 'mr-2 mt-2 mt-md-0' src="./img/bigcommerce.png" alt="bigcommerce"/></a>
                </div>
            </Container>
    )
}

export default Platform;