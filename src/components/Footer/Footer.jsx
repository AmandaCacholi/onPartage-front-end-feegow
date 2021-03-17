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
                <img className="footer__redes" src={instagram} />
                <img className="footer__redes" src={facebook} />
                <img className="footer__redes" src={twitter} />
            </nav>
            <img className="footer__logo" src={logoBranco} />
        </footer>
    )
}
