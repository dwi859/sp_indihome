import React, {Component} from 'react';
import { BrowserRouter as Router,Link } from "react-router-dom";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: "PROMO",
            nav2: "PAKET & ADD-ON",
            nav3: "PUSAT BANTUAN",
            nav4: "INFO TERKINI"

        };

    }

    render() {
        return (
            <Router>
            <div className="header">
                <div className="container warna">
                <nav className="navbar navbar-expand-lg navbar-light warna">
                    <Link className="navbar-brand" to=""><img className="logo" src={require('../logo/logo.png')}/></Link>
                

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.nav1}
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="">PROMO</Link>
                            <Link class="dropdown-item" to="">Partnership</Link>

                        </div>
                        </li>
                        <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.nav2}
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="">Action</Link>
                            <Link class="dropdown-item" to="">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link class="dropdown-item" to="">Something else here</Link>
                        </div>
                        </li>
                        
                        <li class="nav-item">
                        <Link className="nav-link text-white"> {this.state.nav3}</Link>
                        </li>
                        <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.nav4}
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="">PROMO</Link>
                            <Link class="dropdown-item" to="">Partnership</Link>

                        </div>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            
                
            
            </div>
            </Router>


        );
    }
}

export default Navbar;