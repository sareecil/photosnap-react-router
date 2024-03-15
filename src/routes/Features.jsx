import Footer from "./Footer";
import Navbar from "./Navbar";
import hero from "../assets/img/features.png"
import f1 from '../assets/img/001.svg' 
import f2 from '../assets/img/002.svg' 
import f3 from '../assets/img/003.svg' 
import footerimg from '../assets/img/footer-hero.jpg'

export default function Features() {
    return (
        <>
            <div className="container">
                <Navbar/>
                <div className="f-hero">
                    <div className="f-left">
                        <h1>ÖZELLİKLER</h1>
                        <p>Tüm özelliklerimizin, hikayelerini paylaşmak isteyen her hevesli ve hatta profesyonel fotoğrafçının seveceği şekilde tasarlandığından emin oluyoruz.</p>
                    </div>
                    <div className="hero-img">
                        <img src={hero} alt="" />
                    </div>
                </div>
                <div className="footer-top">
                  <div className="footer-one mb50 w350">
                    <img src={f1} alt="" />
                    <h4>Özel alan</h4>
                    <p>Photosnap abonelikleriyle hikayelerinizi kendi alanınızda barındırabilirsiniz. Ayrıca markalamamızı da kaldırabilirsiniz!</p>
                  </div>
                  <div className="mb50 w350">
                    <img src={f2} alt="" />
                    <h4>Pozlamanızı Arttırın</h4>
                    <p>Hikayenizi veya galerinizi görüntüleyen kullanıcılar, yerleşik e-posta listemiz sayesinde yeni ve öne çıkan hikayelerden kolayca haberdar olabilir.</p>
                  </div>
                  <div className="footer-three mb50 w350">
                    <img src={f3} alt="" />
                    <h4>Resmi Sürükle ve Bırak</h4>
                    <p>Görüntünüzü kolayca sürükleyip bırakın ve her seferinde güzel çekimler yapın. Hikaye oluşturmaya sürtünme katacak üst düzey araçlara gerek yok.</p>
                  </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}