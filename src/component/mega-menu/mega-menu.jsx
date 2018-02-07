import React, { Component } from 'react';
import axios from 'axios';
import DropDownHolder from '../drop-down-holder';
import './mega-menu.css';

const URL_PREFIX = 'http://localhost:3456/';

class MegaMenu extends Component {

    state = {
        megaMenu:[],
        currentList: null
    }
  

    componentDidMount() {
        axios.get(`${URL_PREFIX}coolmenu`).then(({data}) => {
            this.setState({
                megaMenu: data
            })
        })
    }

    handleOME = (ev, k) => {
        this.setState({
            
            currentList: this.state.megaMenu[k]
        })
    }

    renderMegaMenu() {
        return this
            .state
            .megaMenu
            .map((mm, k) => 
                <li 
                    onMouseEnter={ ev => {this.handleOME(ev, k)}}
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

        const {currentList} = this.state

        return (
            [
                <ul className="mega-menu">
                    {this.renderMegaMenu()}
                </ul>,
                <DropDownHolder 
                    somethingNew={currentList} />
            ]            
        );
    }
}

export default MegaMenu;