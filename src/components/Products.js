import React from 'react';
import { ImMobile } from 'react-icons/im';
import { IoDesktopOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';
import './Products.css';

function Products() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className="products__section">
                    <div className="products__wrapper">
                        <h1 className="products__heading">Productos</h1>
                        <div className="products__container">
                            <Link to="/products" className="products__container-card">
                                <div className="products__container-cardInfo">
                                    <div className="icon">
                                        <ImMobile />
                                    </div>
                                    <h3>Mobile Wallet</h3>
                                    <h4>Gratis</h4>
                                    <p>Para siempre</p>
                                    <ul className="products__container-features">
                                        <li>Transacciones ilimitadas</li>
                                        <li>2% Cash Back</li>
                                        <li>Android / IOS</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Descargar
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/products" className="products__container-card">
                                <div className="products__container-cardInfo">
                                    <div className="icon">
                                        <IoDesktopOutline />
                                    </div>
                                    <h3>Desktop Wallet</h3>
                                    <h4>Gratis</h4>
                                    <p>Para siempre</p>
                                    <ul className="products__container-features">
                                        <li>Transacciones ilimitadas</li>
                                        <li>2% Cash Back</li>
                                        <li>Linux / Mac / Windows</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Descargar
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Products;
