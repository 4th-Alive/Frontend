import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullPageScroll from './FullPageScroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    /*상단바 생각 중*/
    <div id="App">
      {/* <Navbar bg="dark" data-bs-theme="dark" className="nav">
        <Container className="Container-nav">
          <Navbar.Brand href="#home" className="left-menu">
          <img src={process.env.PUBLIC_URL + '/AppLogo.png'} className="MainLogo"></img>
            함께해요 : with
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" className="right-first_menu">서비스 소개</Nav.Link>
            <Nav.Link href="#pricing" className="right-second_menu">게스트 로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <FullPageScroll />
    </div>
  );
}

export default App;
