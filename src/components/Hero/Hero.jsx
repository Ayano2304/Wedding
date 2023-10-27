import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function Hero() {

  return (
    <div data-aos="fade-in">
      <section id="Hero" className="Hero justify-content-around text-center d-flex flex-column">
        <div data-aos="fade-up" data-aos-duration="1500" className="Header-1 text-white">
          <p>Undangan Pernikahan</p>
          <h2>Martha & Yosi </h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="Header-2 text-white align-items-end">
          <p>
            Kepada Yth, <br />
            Bapak/Ibu/Saudara/i
          </p>
          <h4>Tamu</h4>
          <p>Di Tempat</p>
          <a href="#home" class="hbtn hb-fill-right hpad2 hpill" onClick={enableScroll}>
            Open Invitation
          </a>
        </div>
      </section>
    </div>

  );
}