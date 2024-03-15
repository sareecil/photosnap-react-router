import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import logo from './assets/img/logo.svg'
import line from './assets/img/line.png'
import img1 from './assets/img/img1.png'
import img2 from './assets/img/img2.jpg'
import img3 from './assets/img/img3.png'
import story1 from './assets/img/one.png'
import story2 from './assets/img/two.png'
import story3 from './assets/img/three.png'
import story4 from './assets/img/four.png'
import footer1 from './assets/img/Shape.svg'
import footer2 from './assets/img/Shape1.svg'
import footer3 from './assets/img/003-bullhorn.svg'
import fb from './assets/img/fb.svg'
import yt from './assets/img/yt.svg'
import pint from './assets/img/pint.svg'
import ins from './assets/img/ins.svg'
import tw from './assets/img/tw.svg'


function App() {

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="h-logo">
            <img src={logo} alt="" />
            <h1>PHOTOSNAP</h1>
          </div>
          <div className="h-middle">
            <Link to={"/stories"} className='hover-grey'>HİKAYELER</Link>
            <Link to={"/features"} className='hover-grey'>ÖZELLİKLER</Link>
            <Link to={"/pricing"} className='hover-grey'>FİYATLANDIRMA</Link>
          </div>
          <div className="h-btn">
            <Link to={"/"}>DAVET AL</Link>
          </div>
        </div>
        <div className="content">
          <div className="part-one">
            <div className="left-section pt150">
              <img src={line} alt="" />
              <div className="title">
                <h1 className='pb20'>FOTOĞRAF HİKAYELERİNİZİ OLUŞTURUN VE PAYLAŞIN. </h1>
                <p className='pb35'>Photosnap, fotoğrafçılar ve görsel hikaye anlatıcıları için bir platformdur. Fotoğraf paylaşmayı, hikayeler anlatmayı ve başkalarıyla bağlantı kurmayı kolaylaştırıyoruz.</p>
                <Link to={"/"} className='underline'>DAVET AL</Link>
              </div>
            </div>
            <div className="right-section">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="part-two">
            <div className="t-left-section">
              <img src={img2} alt="" />
            </div>
            <div className="t-right-section pt150">
              <div className="t-title">
                <h1 className='pb20'>GÜZEL HİKAYELER HER ZAMAN</h1>
                <p className='pb35'>Hikayelerinizin harika görünmesini sağlamak için tasarım şablonları sağlıyoruz. Diğer ağlardan kolayca fotoğraf, metin ekleyin, harita ve medya ekleyin. Daha sonra hikayenizi herkesle paylaşın.</p>
                <Link to={"/stories"} className='underline'>HİKAYELERE GÖZ ATIN</Link>
              </div>
            </div>
          </div>
          <div className="part-three">
            <div className="th-left-section pt150">
              <div className="t-title">
                <h1 className='pb20'>HERKES İÇİN TASARLANDI</h1>
                <p className='pb35'>Photosnap, hedef kitlenizde yankı uyandıracak hikayeler oluşturmanıza yardımcı olabilir. Aracımız her seviyeden, markadan ve adını verdiğiniz işletmelerden fotoğrafçılar için tasarlanmıştır.</p>
                <Link to={"/stories"} className='underline'>HİKAYELERE GÖZ ATIN</Link>
              </div>
            </div>
            <div className="th-right-section">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="story-img">
            <div className="one-story linkhover p-relative">
              <img src={story1} alt="" />
              <h4 className='p-absolute pt400'>Dağlar</h4>
              <hr className='p-absolute pt440' />
              <Link to={"/stories"} className='p-absolute pt460'>HİKAYEYİ OKU</Link>
            </div>
            <div className="twp-story linkhover p-relative ">
              <img src={story3} alt="" />
              <h4 className='p-absolute pt400'>Gün Batımı Şehir Manzaraları</h4>
              <hr className='p-absolute pt440' />
              <Link to={"/stories"} className='p-absolute pt460'>HİKAYEYİ OKU</Link>
            </div>
            <div className="three-story linkhover p-relative ">
              <img src={story2} alt="" />
              <h4 className='p-absolute pt400'>18 Gün Yolculuk</h4>
              <hr className='p-absolute pt440' />
              <Link to={"/stories"} className='p-absolute pt460'>HİKAYEYİ OKU</Link>
            </div>
            <div className="four-story linkhover p-relative ">
              <img src={story4} alt="" />
              <h4 className='p-absolute pt400'>Mimariler</h4>
              <hr className='p-absolute pt440' />
              <Link to={"/stories"} className='p-absolute pt460'>HİKAYEYİ OKU</Link>
            </div>
          </div>
        </div>
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
      </div>
    </>
  )
}

export default App
