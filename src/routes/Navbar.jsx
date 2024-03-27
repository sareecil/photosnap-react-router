import logo from '../assets/img/logo.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import hmbrg from '../assets/img/hamburger.svg'


export default function Navbar() {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }
  const activeClas = isActive ? 'active' : 'dropdown'


    return (
        <>
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
                <div className="mobile">
                  <a><img src={hmbrg} alt="" onClick={handleClick}/></a>
                </div>
            </div>
            {
              isActive &&
              <div className={activeClas}>
               <ul className='mbl'>
                 <li><Link to={"/stories"} className='hover-grey'>HİKAYELER</Link></li>
                 <li><Link to={"/features"} className='hover-grey'>ÖZELLİKLER</Link></li>
                 <li><Link to={"/pricing"} className='hover-grey'>FİYATLANDIRMA</Link></li>
               </ul>
               <div className="h-btn block">
                 <Link to={"/"}>DAVET AL</Link>
               </div>
              </div>
            }
        </>
    )
}