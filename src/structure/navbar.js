import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../styles/images/icons/logo_white.svg'
import arrow from '../styles/images/icons/arrow.svg'
import bars from '../styles/images/icons/bars-solid.svg'

class navbar extends Component {

    constructor() {
        super()
        this.state = {
            toggleMenu: false
        }

        this.handleMenu = this.handleMenu.bind(this)
    }


    handleMenu() {
        this.setState({toggleMenu: !this.state.toggleMenu})
    }


    render() {
        const menu = this.state.toggleMenu
              
        return (
            <div className='navbar'>

                <div className='nav-container'>
                        <Link to='/'><img src={logo} alt=''/></Link>
                    <ul className='web-menu'>           
                        <Link to='/'>Início</Link>            
                        <Link to='/budget'><li>Orçamento</li></Link>
                        <Link to='/about'><li>Sobre nós</li></Link>
                        <Link to='/services'><li>Outros Serviços</li></Link>
                        <Link to='/contact'><li>Contato</li></Link>
                    </ul>

                    <div className='bars' onClick={this.handleMenu}> <img src={bars} alt=''/> </div>

                    {
                        menu ?
                            <div className='mobile-menu' onClick={this.handleMenu}>                                               
                                <ul>
                                    <Link to='/'><li className='logo'><img src={logo} alt=''/></li></Link>            
                                    <Link to='/budget'><li>Orçamento</li></Link>
                                    <Link to='/about'><li>Sobre nós</li></Link>
                                    <Link to='/services'><li>Outros Serviços</li></Link>
                                    <Link to='/contact'><li>Contato</li></Link>
                                </ul>    

                                <div className='arrow-container' onClick={this.handleMenu}><img className='arrow' src={arrow} alt=''></img></div>

                                
                            </div> 
                        : null
                    }
                    
                    
                    
                    </div>
                
            </div>
        );
    }
}

export default navbar;