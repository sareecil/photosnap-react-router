import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'
import hero from "../assets/img/stories.png"
import story1 from '../assets/img/one.png'
import story2 from '../assets/img/two.png'
import story3 from '../assets/img/three.png'
import story4 from '../assets/img/four.png'
import '../App.css'

export default function Stories() { 
    return (
        <> 
            <div className="container">
                <Navbar/>
                <div className="s-content">
                    <div className="hero">
                        <img src={hero} alt="" />
                        <div className="h-content ">
                            <h3>GEÇEN AYIN ÖNE ÇIKAN HİKAYESİ</h3>
                            <h1>APALACHIA'NIN PUSLU DOLUNAYI</h1>
                            <p>Parçalara ayrılmış plato alanı, aslında jeolojik dağlardan oluşmasa da, özellikle doğu Kentucky ve Batı Virginia'da halk arasında "dağlar" olarak adlandırılıyor ve sırtlar yüksek olmasa da arazi son derece engebeli.</p>
                            <Link to={"/stories"} className='underline'>HİKAYELERE GÖZ ATIN</Link>
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
                <Footer/>
            </div>
        </>
    )
}