import React from 'react'
import logoBranco from '../../assets/images/logo-branca.png'
import './Footer.css'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

export const Footer = () => {
    return (
        <footer>
            <nav>
                <img alt="" className="footer__redes" src={instagram} />
                <img alt="" className="footer__redes" src={facebook} />
                <img alt="" className="footer__redes" src={twitter} />
            </nav>
            <img alt="" className="footer__logo" src={logoBranco} />
        </footer>
    )
}
