import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import Detail from "./routes/Detail.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">Home</Link><br></br>
      <Link to="detail">Detail</Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="*" element={<div>없는페이지요</div>} />
        <Route path="/about" element={<About/>}>
          //nested Routes
          <Route path="member" element={<About/>}/> 
          <Route path="location" element={<About/>}/>
        </Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
      </div>
  )
}


export default App;
