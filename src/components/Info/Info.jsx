import "./Info.css";
import Map from "../../assets/img/maps.png";
function Info() {
  return (
    <div>
      <section className="info" id="info">
        <div className="container">
          <div data-aos="fade-down" data-aos-duration="2000" className="row justify-content-center">
            <div className="col-10 col-md-8 text-center">
              <h2>Informasi Acara</h2>
              <p>Lokasi : Padma Hotel Bandung</p>
              <p className="Alamat">Alamat : Jl. Rancabentang No.56-58, Ciumbuleuit, Kec. Cidadap, Kota Bandung</p>
            </div>
          </div>

          <div className="row mt-5 ">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center"
              data-aos="zoom-in" data-aos-duration="2000">
              <img className="map img-responsive" src={Map} alt="" />
              <div className="row">
                <a href="https://maps.app.goo.gl/tLaUnFLAdkmzALDk9" target="_blank" className="btn btn-danger mt-4 mb-5 btn-map">
                  View Location In Google Maps
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div data-aos='zoom-in' data-aos-duration='500'>
              <h3 className="text-center">Akad Nikah</h3>
              </div>
              <div className="akad">
                <div className="text-center" data-aos="fade-left" data-aos-duration="1000">
                  <i className="ri-time-fill icon-1"></i>
                  <h5>13.00 WIB - 15.00 WIB</h5>
                </div>
                <div className="text-center" data-aos="fade-right" data-aos-duration="1000">
                  <i class="ri-calendar-line icon-2"></i>
                  <h5>Day,DD-MM-YYYY</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
