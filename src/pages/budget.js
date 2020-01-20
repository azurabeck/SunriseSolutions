import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import { renderEmail } from 'react-html-email'
import axios from 'axios';

import face from '../styles/images/icons/face.svg'
import insta from '../styles/images/icons/insta.svg'
import tele from '../styles/images/icons/tele.svg'
import whats from '../styles/images/icons/whats.svg'

class budget extends Component {

    constructor() {
        super()
        this.state = {
            popup: false,
            popupBud: false,
            email: '',
            name: '',
            media: '',
            mobile: ''
        }

        this.handlePopup = this.handlePopup.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handlePopupBud = this.handlePopupBud.bind(this)
        this.closeBud = this.closeBud.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    

    handlePopup() {
        this.setState({popup:  !this.state.popup})
    }

    closeBud() {        
        this.setState({popupBud: !this.state.popupBud})
    }

    handlePopupBud() {
        this.setState({popupBud: !this.state.popupBud})
    }

    handleSubmit = ( event ) => {
        
        event.preventDefault();


        const messageHtml =  renderEmail(
            <div> {this.state.name} {this.state.email} {this.state.mobile} {this.state.media}</div>
        );

        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
            name: this.state.name,
            email: this.state.email,
            messageHtml: messageHtml
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Email sent, awesome!"); 
                    this.resetForm()
                }else if(response.data.msg === 'fail'){
                    alert("Oops, something went wrong. Try again")
                }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', mobile: '', media: ''});
    }


    render() {

        const popup = this.state.popup
        const bud = this.state.popupBud
        const popupLayout = <div className='popup'>
                <div className='popup-container'>
                    <div className='btn-close' onClick={this.handlePopup}>x</div>
                    <div className='title'>Nosso Telefone.</div>
                    <div className='desc'>Entre em contato a qualquer momento conosco e faça seus orçamento direto conosco!</div>
                    <a href='tel:+552197580-3541' className='tel call-area'>
                        <img src={tele} alt=''/>+55 21 97580-3541
                    </a>
                    
                </div>
        </div>

        const popupBud =  <div className='popup'>
            <div className='popup-container'>
                <div className='btn-close' onClick={this.closeBud}>x</div>
                <div className='title'>Ferramenta em manutenção!</div>
                <div className='desc'>Entre em contato a qualquer momento conosco e faça seus orçamento direto conosco!</div>
                <a href='tel:+552197580-3541' className='tel call-area'>
                    <img src={tele} alt=''/>+55 21 97580-3541
                </a>
                
            </div>
        </div>


        return (
            <div className='content budget'>
                 <div className='container-default'>


                        <div className='title'>ORÇAMENTO FACILITADO!</div>
                        <Row>

                            <Col md={6} sm={12}>
                                <form method="post" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <input id='name' placeholder='Name' onChange={this.handleChange}></input>
                                    <input id='email' type='email' placeholder='Email' onChange={this.handleChange}></input>
                                    <input id='mobile' type='telefone' placeholder='Celular' onChange={this.handleChange}></input>

                                    <select className='media'>
                                        <option value='' disabled selected>Média de consumo mensal</option>
                                        <option>até R$250</option>
                                        <option>entre R$250 e R$500</option>
                                        <option>entre R$500 e R$750</option>
                                        <option>entre R$750 e R$1000</option>                                        
                                        <option>entre R$1000 e R$1500</option>
                                        <option>acima de R$1500</option>
                                    </select>
                                    <div className='btn-area'><button className='yellow-btn'  onClick={this.handlePopupBud}>Fazer orçamento</button></div>
                                </form>                               
                            </Col>

                            <Col md={6} sm={12} className='network'>
                                <div className='desc'>
                                     Estamos em qualquer lugar, residência, empresas, condomínios e muito mais!
                                </div>
                                <div className='desc'>
                                    Preencha o formulário ao lado e já retornaremos com seu orçamento personalizado! 
                                </div>

                                <ul className='social-network'>
                                    <a href='https://www.facebook.com/sunrisesolutionsbr/'  rel="noopener noreferrer" target='_blank'><li><img src={face} alt=''/></li></a>
                                    <a href='https://www.instagram.com/sunrisesolutionsbr/'  rel="noopener noreferrer" target='_blank' ><li><img src={insta} alt=''/></li></a>
                                    <a href='#' onClick={this.handlePopup}><li><img src={tele} alt=''/></li></a>
                                    <a href="https://wa.me/5521975803541"  rel="noopener noreferrer" target="_blank"> <li><img src={whats} alt=''/></li> </a>
                                </ul>

                            </Col>

                        </Row>



                 </div>
           
                { bud ? popupBud : null }
                { popup ? popupLayout : null }
           
           
            </div>
        );
    }
}

export default budget;