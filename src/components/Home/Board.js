import React from "react";
import "./Home.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import cat from './img/andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'

const Board = () => {
  return (
    <>
      <Container fluid>
        <Row className="r1CTF">
          <Col className="r1ctfC2">
            <div>CARE OF YOUR</div>
            <div>
              LITTLE <span>CATS</span>
            </div>
            <Button className="btn-joinus" size="lg">JOIN US</Button>
          </Col>
          <Col>
            <div className="c2ImgCat">
              <Image src={cat}></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Board;
