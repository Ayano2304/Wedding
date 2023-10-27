import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Picture_1 from "../../assets/img/Gallery/Travel_1.jpeg"
import Picture_2 from "../../assets/img/Gallery/Travel_2.jpg"
import Gunung from "../../assets/img/Gallery/Gunung.jpg"
import Bekasi from "../../assets/img/Gallery/Bekasi.jpg";
import Lembang from "../../assets/img/Gallery/Lembang.jpg";
import Potrait from "../../assets/img/Gallery/Potrait.jpg";
import MegaMall from "../../assets/img/Gallery/MegaMall.jpg";
// import Picture_1 from "../../assets/img/Gallery/Travel_1.jpeg"
import "./Galery.css"
function Galery() {
  return (
    <div>
      <section className="galery" id="galery">
        <Container>
          <Row data-aos="fade-up" data-aos-duration="1000" className="justify-content-center">
            <Col md={8} xs={10} className="text-center">
              <span>Memori Kisah Kami</span>
              <h2>Galery Foto</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt minima praesentium doloremque, ea nam quam?</p>
            </Col>
          </Row>

          <Row md={3} sm={2} xs={1} className="text-center justify-content-center">
            <Col className="mt-4" data-aos="zoom-in" data-aos-duration="1000">
              <a href="">
                <Image src={Picture_1} thumbnail className="list_foto" />
              </a>
            </Col>
            <Col className="mt-4" data-aos="zoom-in" data-aos-duration="1000">
              <a href="">
                <Image src={Gunung} thumbnail className="list_foto" />
              </a>
            </Col>
            <Col className="mt-4" data-aos="zoom-in" data-aos-duration="1000">
              <a href="">
                <Image src={Lembang} thumbnail className="list_foto" />
              </a>
            </Col>
            <Col className="mt-4" data-aos="zoom-in" data-aos-duration="1000">
              <a href="">
                <Image src={Potrait} thumbnail className="list_foto" />
              </a>
            </Col>
            <Col className="mt-4" data-aos="zoom-in" data-aos-duration="1000">
              <a href="">
                <Image src={MegaMall} thumbnail className="list_foto" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Galery;
