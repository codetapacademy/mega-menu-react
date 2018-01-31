import React, { Component } from 'react';
import axios from 'axios';
import './mega-menu.css';

const URL_PREFIX = 'http://localhost:3456/';

class MegaMenu extends Component {

    state = {
        megaMenu:[]
    }
  

    componentDidMount() {
        axios.get(`${URL_PREFIX}coolmenu`).then(({data}) => {
            this.setState({
                megaMenu: data
            })
        })
    }

    renderMegaMenu() {
        return this
            .state
            .megaMenu
            .map((mm, k) => 
                <li 
                    className="mega-menu__list-item" 
                    key={k}>
                    <a 
                        href={mm.dropdownHeaderHref} 
                        title={mm.dropdownHeaderText}>
                        {mm.parentLink}
                    </a>
                </li>
            );
    }

    render() {
        return (
            <ul className="mega-menu">
                {this.renderMegaMenu()}
            </ul>
        );
    }
}

export default MegaMenu;