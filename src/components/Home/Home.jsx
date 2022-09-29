import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    let navigate = useNavigate();
    const [imgname, setImgname] = useState("");
    return (
        <div>
            <Container className="container-sizer">
                <Row>
                    <Col className="top-section">
                    <nav className="navbar">
                    <h1 className="main-header">Pixies</h1>
                    {
                    // <div className="nav-buttons">
                    //     <button className="nav-button">SIGN UP</button>
                    //     <button className="nav-button">LOG IN</button>
                    // </div>
                    }
                    </nav>
                    <div id="hero-section">
                        <div className="hero-header">
                        <h1 className="header-text">The best free stock photos, royalty free images shared by creators.</h1>
                        <input className="input-search" type="text"
                            placeholder="Search for free photos" onChange={(e)=>setImgname(e.target.value)} /><br/>
                        <button className="search-button" onClick={()=> imgname && navigate(`/search/${imgname}`)}>
                        Search
                        </button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;