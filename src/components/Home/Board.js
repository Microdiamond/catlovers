import React from "react";
import "./Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";

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
            <Button className="btn-joinus"  size="lg">JOIN US</Button>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  );
};

export default Board;
