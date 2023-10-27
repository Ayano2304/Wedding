import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Wanita from "../../assets/img/Yosi.jpg";
import Laki from "../../assets/img/Martha.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div data-aos="fade-up" data-aos-duration="1000" className="col-md-8">
              <h2>Acara Pernikahan</h2>
              <h3>Diselenggarakan Pada ... ... ... Di ..., Jawa Barat</h3>
              <p>Oleh Karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu, Saudara/i , Untuk Hadir Pada Acara Tersebut.</p>
            </div>
          </div>

          <Row className="couple">
            <Col lg={6} data-aos="zoom-in" data-aos-duration="1000">
              <Row>
                <Col xs={8}>
                  <h3>Martha Wijaya</h3>
                  <p>Lahir Dan Besar Dikarawang Merupakan Anak Pertama Yang Mempunyai Cita Cita Memiliki Kekuatan Time Travel Karena Ingin Mengubah Masa Lalu</p>
                  <p>Putra Dari Bapak ... Dan Ibu ....</p>
                </Col>
                <Col xs={4}>
                  <img src={Laki} alt="Martha" className="img-responsive rounded-circle" />
                </Col>
              </Row>
            </Col>

            <Col lg={6} data-aos="zoom-in" data-aos-duration="1000">
              <Row>
                <Col xs={4}>
                  <img src={Wanita} alt="Yosi" className="img-responsive rounded-circle" />
                </Col>
                <Col xs={8}>
                  <h3>Yosi Rahmatin Barokah</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem deserunt sed vitae eos modi!</p>
                  <p>Putra Dari Bapak ... Dan Ibu ....</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Home;
