import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.svg';
import { FaCartArrowDown } from 'react-icons/fa';

export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: 'navbar-collapse collapse w-100',
        links: [
            {
                id: 1,
                path: '/beans',
                text: 'coffee beans',
            },
            {
                id: 2,
                path: '/equipment',
                text: 'brewing equipment',
            },
            {
                id: 2,
                path: '/about',
                text: 'our guide',
            },
        ],
    };

    navbarHandler = () => {
        this.state.navbarOpen
            ? this.setState({
                  navbarOpen: false,
                  css: 'collapse navbar-collapse',
              })
            : this.setState({
                  navbarOpen: true,
                  css: 'collapse navbar-collapse show',
              });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md bg-light navbar-light">
                <Link to="/" className="navbar-brand">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ height: '32px', width: '32px' }}
                    />
                    <text className="ml-2">Javaroma</text>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.navbarHandler}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav w-100 justify-content-center">
                        {this.state.links.map(link => {
                            return (
                                <li key={link.id} className="nav-item">
                                    <Link
                                        to={link.path}
                                        className="nav-link text-capitalize"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="nav navbar-nav ml-auto justify-content-end">
                        <li className="nav-item">
                            <FaCartArrowDown className="cart-icon snipcart-checkout" />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
