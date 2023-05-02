import React from "react";
import "./Home.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import cat from './img/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg'

const Board = () => {
    return (
        <>
            <Container fluid className="conB2">
                <Row className="r1CTF">
                    <Col className="r1ctfC2">
                        <div className="d1">
                        </div>
                        <div className="d2">
                            <Image src={cat}></Image>
                        </div>
                    </Col>
                    <Col className="r2ctfC2">
                        <div>TIPS FOR NEW</div>
                        <div>CAT OWNERS</div>
                        <div>สำหรับใครที่กำลังจะเริ่มต้นเลี้ยงแมวตัวแรก หรือมีลูกแมวตัวใหม่เข้ามาเป็นส่วนหนึ่งของสมาชิกในครอบครัวแล้วล่ะก็ การเตรียมตัวและเตรียมอุปกรณ์ให้พร้อมสำหรับดูแลเค้า ก็จะช่วยให้คุณแม่มือใหม่ดูแลน้องแมวตัวน้อยให้ปรับตัวเข้ากับสภาพแวดล้อมใหม่ได้เร็วขึ้น ซึ่งนอกจากจะทำให้เค้ามีอารมณ์ที่สดใสแล้ว ยังช่วยให้ลูกแมวตัวน้อยของเรา กลายเป็นลูกแมว สุขภาพดี สามารถทานอาหาร พักผ่อน และขับถ่ายเป็นปกติ ให้คุณพ่อคุณแม่น้องเหมียวมือใหม่อุ่นใจได้นั่นเองค่ะ</div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Board;
