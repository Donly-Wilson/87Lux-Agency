import Link from "next/link";
import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
    return (
    <header className={`${style.header} fixed-top`}>
      <Navbar expand="lg">
       <Container>
         <div className={`${style.header__logo} navbar-brand`}>
            <a href="#" className={style.header__logo__name}>87Lux</a>
          </div>
         <Navbar.Toggle className={style['navbar-toggler']} aria-controls="basic-navbar-nav">
            <i class="fa fa-navicon"></i>
            </Navbar.Toggle>
         <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
           <Nav className="text-capitalize">
             <Nav.Link href="#">theme</Nav.Link>
             <Nav.Link href="#">Apps</Nav.Link>
             <Nav.Link href="#">Assets</Nav.Link>
             <Nav.Link href="#">Contact us</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    </header>
    );
  };
  
  export default Header;