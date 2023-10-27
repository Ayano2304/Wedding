import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Wanita from "../../assets/img/Yosi.jpg";
import Laki from '../../assets/img/Martha.jpg'
function Home() {
  return (
    <>
      {/* <Navbar expand="md" sticky="top" className="my-nav bg-transparent mb-3">
        <Container fluid>
          <Navbar.Brand className="logo" href="#home">
            A-2
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas style={{ height: "100vh" }} id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="logo" id={`offcanvasNavbarLabel-expand-md`}>
                A-2
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 text-uppercase text-center font-semibold fw-semibold">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#info">Info</Nav.Link>
                <Nav.Link href="#story">Story</Nav.Link>
                <Nav.Link href="#galery">Gallery</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}

      <section id="home" className="home">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div data-aos='fade-up' data-aos-duration='1000' className="col-md-8">
              <h2>Acara Pernikahan</h2>
              <h3>Diselenggarakan Pada ... ... ... Di ..., Jawa Barat</h3>
              <p>Oleh Karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu,
                Saudara/i , Untuk Hadir Pada Acara Tersebut.
              </p>
            </div>
          </div>

          <div className="row couple">
            <div className="col-lg-6" data-aos='fade-left' data-aos-duration='1000'>
              <div className="row">
                <div className="col-8 text-end ">
                  <h3>Yosi Rahmatin Barokah</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque aperiam corrupti, necessitatibus amet atque.</p>
                  <p>Putra Dari Bpk .... dan Ibu ....</p>
                </div>
                <div className="col-4">
                  <img src={Wanita} alt="Yosi" className="img-responsive rounded-circle" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 " data-aos='fade-right' data-aos-duration='1000'>
              <div className="row">
                <div className="col-4">
                  <img src={Laki} alt="Martha" className="img-responsive rounded-circle" />
                </div>
                <div className="col-8 ">
                  <h3>Martha Wijaya</h3>
                  <p>Lahir Dan Besar Dikarawang Merupakan Anak Pertama Yang Mempunyai Cita Cita
                    Memiliki Kekuatan Time Travel Karena Ingin Mengubah Masa Lalu
                  </p>
                  <p>Putra Dari Bapak ... Dan Ibu ....</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
