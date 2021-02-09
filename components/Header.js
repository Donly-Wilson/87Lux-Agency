import Link from "next/link";
import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
    return (
      <div>
        <header className={style.navbar}>
          <Container className={style.navbar__container}>
              <div className={style.navbar__logo}>
                  <a href="#" className={style.navbar__logo__name}>87Lux</a>
              </div>
              <nav className={style.navbar__menu}>
                  <ul className={style.navbar__menu__links}>
                      <li className={style.navbar__menu__links__option}>
                        <Link href="#">
                        <a>theme</a> 
                        </Link>
                      </li>
                      <li className={style.navbar__menu__links__option}>
                        <Link href="#">
                        <a href="#">Apps</a>
                        </Link>
                      </li>
                      <li className={style.navbar__menu__links__option}>
                        <Link href="#">
                        <a href="#">Assets</a>
                        </Link>
                      </li>
                      <li className={style.navbar__menu__links__option}>
                        <Link href="#">
                        <a href="#">Contact us</a>
                        </Link>
                      </li>
                  </ul>
              </nav>
          </Container>
        </header>
      </div>
    );
  };
  
  export default Header;