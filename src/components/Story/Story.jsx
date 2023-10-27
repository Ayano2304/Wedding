import React from "react";
import "./Story.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image_1 from "../../assets/img/BG.jpg"
import Image_2 from "../../assets/img/Image_1.jpg"
import Image_3 from "../../assets/img/Lulus.jpg"
import Bg from "../../assets/img/295.png"
function Story() {
  return (
    <div>
      <section className="story" id="story">
        <Container>
          <Row data-aos="fade-up" data-aos-duration="1000" className="justify-content-center mb-5">
            <Col md={8} xs={10} className="text-center">
              <h2>Cerita Kami</h2>
              <span>Bagaimana Cinta Kami Bersemi</span>
            </Col>
          </Row>

          <Row data-aos="zoom-in" data-aos-duration="1000" className="justify-content-center row-story mb-5">
            <Col md={8} className="data-1">
              <div className="story-tell ">
                <h3>Pertama Bertemu</h3>
                <span>24 Juli 2016</span>
                <p>
                  Pertemuan kami di SMA adalah awal dari segalanya. Saat kami pertama kali
                  bertemu di lorong-lorong sekolah, kami tidak tahu bahwa kami akan menjadi pasangan seumur hidup. Kami menjadi teman terbaik, belajar bersama, dan tumbuh bersama. Kami memiliki kenangan yang indah dari hari-hari sekolah
                  kami, dan kami berharap Anda dapat bergabung dengan kami untuk merayakan kisah cinta yang dimulai di bangku sekolah.
                </p>
              </div>
            </Col>
            <Col className="text-center data-2">
              <img src={Image_1} className="picture" />
            </Col>
          </Row>

          <Row data-aos="zoom-in" data-aos-duration="1000" className="justify-content-center row-story mb-5">
            <Col className="text-center data-2">
              <img src={Image_2} className="picture" />
            </Col>
            <Col md={8} className="data-1">
              <div className="story-tell ">
                <h3>Mulai Menjalin Hubungan</h3>
                <span>02 April 2017</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae repellendus soluta vel? Ullam atque est excepturi in porro! Illum pariatur labore quae architecto nisi non distinctio temporibus itaque minima totam facere
                  quasi, harum, quas amet soluta cum sit quidem deserunt enim explicabo optio eius! Aut qui corporis sint rerum!
                </p>
              </div>
            </Col>
          </Row>

          <Row data-aos="zoom-in" data-aos-duration="1000" className="justify-content-center row-story mb-5">
            <Col md={8} className="data-1">
              <div className="story-tell ">
                <h3>Kisah Yang Terus Berlanjut</h3>
                <span>20 April 2019</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae repellendus soluta vel? Ullam atque est excepturi in porro! Illum pariatur labore quae architecto nisi non distinctio temporibus itaque minima totam facere
                  quasi, harum, quas amet soluta cum sit quidem deserunt enim explicabo optio eius! Aut qui corporis sint rerum!
                </p>
              </div>
            </Col>
            <Col className="text-center data-2">
              <img src={Image_3} className="picture" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Story;
