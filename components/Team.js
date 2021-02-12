import style from "../styles/homepage.module.scss"
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Team = () => {
    return (
      // <div>
<<<<<<< HEAD
          <section className= {`container position-relative vh-100 p-0`}>
            <div className= {`${style.team__title} position-absolute top-0 left-0 justify-content-center align-items-center d-flex w-100 h-100`}>
=======
          <section className= {`${style.team} container`}>
            <div className= {style.team__title}>
>>>>>>> parent of d2bba41... remove grid for teams
                <h1>Meet the team</h1>
            </div>
            <div className= {style.team__member}>
                <div className= {style['team__member--blue']}>
                    <img src="./img/team2.jpg" alt="team member "/>
                </div>
                <div className= {style['team__member--yellow']}><img src="./img/team3.jpg" alt="team member"/></div>
                <div className= {style['team__member--red']}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9oGqW4-vdo2u-Udu-7ydEfxsRbNABLuU_Q&usqp=CAU"alt="team member"/>
                    </div>
                <div className= {style['team__member--purple']}><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpFXeJW-gtPtfKwpJVRGrmUIizwCLJpKJkA&usqp=CAU"
                        alt="team member"/></div>
                <div className= {style['team__member--orange']}><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdzcQ0LAua19fRkXgHRZ-D-6aJtgnYtJgxg&usqp=CAU"
                        alt="team member"/></div>
                <div className={style['team__member--green']}><img src="./img/team1.jpg" alt="team member"/></div>
                <div className= {style['team__member--pink']}><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BqK9zkMcc5rUn2TxyGAsyqjb83Ca7i6Yhg&usqp=CAU"
                        alt="team member"/></div>
            </div>
        </section>
      // </div>
    );
  };
  
  export default Team;