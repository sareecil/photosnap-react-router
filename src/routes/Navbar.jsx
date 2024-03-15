import logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom'



export default function Navbar() {
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
            </div>
        </>
    )
}