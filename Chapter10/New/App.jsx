import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import { Nav, Navbar, Container } from 'react-bootstrap'
import GitHub from './GitHub'
import GitHubUser from './GitHubUser'

function Home() {
  return <div>Home</div>
}

function NotFound() {
  return <div>Not Found</div>
}

function Header() {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/github">GitHub</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="/github/user/:login/:id" element={<GitHubUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App