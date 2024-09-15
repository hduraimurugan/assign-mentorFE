import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Topbar() {
  return (
    <Navbar expand="lg" className="bg-body-teritary">
      <Container>
        <Navbar.Brand href="/" className='logo'>Student Mentor Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Student" id="basic-nav-dropdown">
              <NavDropdown.Item href="/create-student">Create Student</NavDropdown.Item>
              <NavDropdown.Item href="/view-students">
                View All Students
              </NavDropdown.Item>
              <NavDropdown.Item href="/previous-mentor">View Previous Mentor</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Mentor" id="basic-nav-dropdown">
              <NavDropdown.Item href="/create-mentor">Create Mentor</NavDropdown.Item>
              <NavDropdown.Item href="/view-mentors">
                View All Mentors
              </NavDropdown.Item>
              <NavDropdown.Item href="/assign-student">Assign Student</NavDropdown.Item>
              <NavDropdown.Item href="/assign-students">Assign Multiple Students</NavDropdown.Item>
              <NavDropdown.Item href="/assigned-students">View Assigned Students</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;