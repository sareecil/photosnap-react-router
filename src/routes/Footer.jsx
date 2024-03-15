import footer1 from '../assets/img/Shape.svg'
import footer2 from '../assets/img/Shape1.svg'
import footer3 from '../assets/img/003-bullhorn.svg'
import fb from '../assets/img/fb.svg'
import yt from '../assets/img/yt.svg'
import pint from '../assets/img/pint.svg'
import ins from '../assets/img/ins.svg'
import tw from '../assets/img/tw.svg'
import logo from '../assets/img/logo.svg'

import { Link } from 'react-router-dom'


export default function Footer() {
    return(
        <>
            <div className="footer">
                <div className="footer-top">
                  <div className="footer-one mb50 w350">
                    <img src={footer1} alt="" />
                    <h4>100% Responsive</h4>
                    <p>Hangi cihazı kullanıyor olursanız olun sitemiz tamamen duyarlıdır ve hikayeler her ekranda güzel görünür.</p>
                  </div>
                  <div className="footer-two mb50 w350">
                    <img src={footer2} alt="" />
                    <h4>Fotoğraf Yükleme Limiti Yok</h4>
                    <p>Aracımızın yükleme veya bant genişliği konusunda herhangi bir sınırı yoktur. Ücretsiz olarak toplu olarak yükleyin ve tüm hikayelerinizi tek seferde paylaşın.</p>
                  </div>
                  <div className="footer-three mb50 w350">
                    <img src={footer3} alt="" />
                    <h4>Yerleştirilebilir</h4>
                    <p>Tweet'leri, Facebook gönderilerini, Instagram medyasını, Vimeo veya YouTube videolarını, Google Haritalar'ı ve daha fazlasını ekleyin.</p>
                  </div>
                </div>
                <div className="footer-down">
                  <div className="sc-1-title">
                    <div className="tittle-up">
                      <img src={logo} alt="" />
                      <h1 className='colorwht'>PHOTOSNAP</h1>
                    </div>
                    <div className="icons">
                      <img src={fb} alt="" />              
                      <img src={yt} alt="" />
                      <img src={tw} alt="" />
                      <img src={pint} alt="" />
                      <img src={ins} alt="" />
                    </div>
                  </div>
                  <div className="links">
                    <li><Link to={"/"}>ANASAYFA</Link></li>
                    <li><Link to={"/stories"}>HİKAYELER</Link></li>
                    <li><Link to={"/features"}>ÖZELLİKLER</Link></li>            
                    <li><Link to={"/pricing"}>FİYATLANDIRMA</Link></li>
                  </div>
                  <div className="footer-btn">
                    <Link to={"/"} className='underline'>DAVET AL</Link>
                  </div>
                </div>
            </div>
        </>
    )
}