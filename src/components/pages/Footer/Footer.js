import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { GiSplitCross } from 'react-icons/gi';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Regístrese para recibir nuestro boletín de noticias con actualizaciones sobre su billetera.
        </p>
        <p className='footer-subscription-text'>
            Puede darse de baja en cualquier momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Su Email'
            />
            <Button buttonStyle='btn--outline'>Suscribirse</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Compañía</h2>
            <Link to='/sign-up'>Sobre Nosotros</Link>
            <Link to='/'>Carreras</Link>
            <Link to='/'>Inversores</Link>
            <Link to='/'>Terminos y Condiciones</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contáctenos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte</Link>
            <Link to='/'>Destinatarios</Link>
            <Link to='/'>Sponsors</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Productos</h2>
            <Link to='/'>Desktop Wallet</Link>
            <Link to='/'>Mobile Wallet</Link>
            <Link to='/'>Trezor Hardware Wallet</Link>
            <Link to='/'>Cross-Bit Apps</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <GiSplitCross className='navbar-icon' />
              Cross-Bit
            </Link>
          </div>
          <small className='website-rights'>Cross-Bit © 2021 by Adrián Gette</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.algo.com'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;