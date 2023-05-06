import { Link, NavLink, Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function HomeLayout(){
    return (
    <div>
        <div>          
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Report Managment System Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="unconfirmed">unconfirmed list</Nav.Link>
                <Nav.Link href="admin">active account list</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
        <div><Outlet/></div>
    </div>
    )
}