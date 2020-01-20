import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Carroussel from '../styles/elements/carroussel'
import Opnions from '../styles/elements/opnions'

import Effect from '../styles/images/home_effect.png'
import bg_placa from '../styles/images/bg_placa.png'
import capacete from '../styles/images/capacete.png'
import logos from '../styles/images/tools_logo.png'
import bv from '../styles/images/bv.png'
import portal_solar from '../styles/images/portal_solar.png'
import aldo_solar from '../styles/images/aldo_solar.png'
import santander from '../styles/images/santander.png'
import house from '../styles/images/icons/home.svg'
import invest from '../styles/images/icons/invest.svg'
import adjust from '../styles/images/icons/adjust.svg'
import clean from '../styles/images/icons/clean.svg'
import tools from '../styles/images/icons/tools.svg'
import face from '../styles/images/icons/face.svg'
import insta from '../styles/images/icons/insta.svg'
import tele from '../styles/images/icons/tele.svg'
import whats from '../styles/images/icons/whats.svg'



class home extends Component {

    constructor() {
        super()
        this.state = {
            popup: false,
            users: [
                {user: 'Cid', date: '04 de Setembro de 2019', desc: 'Estou muito satisfeito com a equipe da sunrise solutions. Profissionais de alta qualificação técnica e de grande responsabilidade, tendo cumprido com todas as etapas dos serviços antes do prazo fixado. Equipe educada e de bom trato com o cliente.'},
                {user: 'Marcus', date: '04 de Setembro de 2019', desc: ' "Trabalho todo muito bem executado. Instalação feita com todo o capricho. O fornecimento aconteceu dentro do prazo combinado. Recomendo!!!'},
                {user: 'Jose', date: '11 de Fevereiro de 2019', desc: ' "Muito bem feito e bastante profissionalismo”'},
                {user: 'Francisco', date: '04 de Setembro de 2019', desc: 'O sócio da empresa marcou presença do início até o fim do projeto, dando toda atenção as dúvidas e minhas necessidades como cliente. '},
                {user: 'Pereira', data: '24 de Março de 2019', desc: 'Foi um trabalho perfeito desde a apresentação da proposta até a execução final e também o acompanhamento diário da concessionária de energia relativo ao prazo para a aprovação e instalação do novo medidor de energia. Pra resumir: perfeito na abordagem inicial da apresentação do produto e serviço, na execução e no pós venda e serviço. Parabéns Sunrise' }
            ]
        }

        this.handlePopup = this.handlePopup.bind(this)
    }

    handlePopup() {
        this.setState({popup: !this.state.popup})
    }

  
    render() {

        const user = this.state.users
        const popup = this.state.popup
        const bgStyle = { background: `url(${bg_placa})` };

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

        return (
            <div className='content'>
                <Carroussel/>
                
                { popup ? popupLayout : null }
                <div className='container-default'>
                    <section className='energy'>
                        <img src={Effect} alt=''/>
                        <div className='title'>Por que energia solar?</div>
                        <p className='text'> As energias renováveis são a grande tendência para atender a crescente demanda de eletricidade nos próximos anos. </p>
                        <p className='text'> Especialmente no Brasil, onde temos a maior taxa de irradiação solar do mundo, e no Rio de Janeiro, onde temos as mais 
                                    altas tarifas e variações, a energia solar se apresenta como a solução ideal, tanto em termos de economia quanto de sustentabilidade. </p>
                         
                    </section>
                </div>

                
                <section className='why'>

                    <img src={capacete} className='why-bg' alt=''/>

                    <div className='container-default'>
                        <ul>
                            <li> <img src={house} alt=''></img> valorização do imóvel</li>
                            <li> <img src={invest} alt=''></img> Investimento se paga entre 2 e 5 anos</li>
                            <li> <img src={adjust} alt=''></img> Sem reajuste tarifário</li>
                            <li> <img src={clean} alt=''></img> Energia limpa e renovável</li>
                            <li> <img src={tools} alt=''></img> Mínima manutenção</li>
                        </ul>
                        <div className='economy'>
                            <div className='text-1'>Redução de até:</div>
                            <div className='text-2'>95%</div>
                            <div className='text-3'>na conta de luz</div>
                        </div>
                    </div>
                </section>


                <div className='container-default'>
                    <section className='tools'>
                        <div className='title'>ESCOLHA SEU SISTEMA DE ENERGIA SOLAR</div>
                        <div className='tools-content'>
                            <div className='group-text'>
                                <p className='text'> A Sunrise elabora projeto personalizado ao perfil do cliente, adequando às suas necessidades às soluções mais econômicas e eficientes. </p>
                                <p className='text'> Trabalhamos em parceria com os melhores e mais referenciados fornecedores de painéis e 
                                        inversores solares do mercado, fortalecendo e elevando a qualidade dos nossos serviços. </p>
                            </div>                        
                            <img src={logos} alt=''/>
                        </div>

                    </section>
                </div>


                <section className='value'>
                    <div className='container-default'>
                        <div>
                            <div className='header-responsive'>
                                <div className='title'>PREÇO</div>
                                <div className='desc'>Não tenha medo de entrar em contato conosco, nossos especialistas 
                                    conseguem adequar o seu sistema à sua realidade financeira.</div>
                            </div>
                            <div className='btn-group'>
                                    <Link to='/budget' className='yellow-btn'>FAZER ORÇAMENTO</Link>
                                    <ul className='social-network'>
                                        <a href='https://www.facebook.com/sunrisesolutionsbr/'  rel="noopener noreferrer" target='_blank'><li><img src={face} alt=''/></li></a>
                                        <a href='https://www.instagram.com/sunrisesolutionsbr/'  rel="noopener noreferrer" target='_blank' ><li><img src={insta} alt=''/></li></a>
                                        <a href='#' onClick={this.handlePopup}><li><img src={tele} alt=''/></li></a>
                                        <a href="https://wa.me/5521975803541"  rel="noopener noreferrer" target="_blank"> <li><img src={whats} alt=''/></li> </a>
                                    </ul>
                            </div>
                       </div> 
                    </div>
                </section>


                <section className='critics'>
                    <div className='title'>O QUE FALAM SOBRE NÓS?</div>

                    <Opnions user={user}/>
                </section>
                

                <section className='partners'>
                    <div className='title'>CONHEÇA NOSSOS PARCEIROS</div>
                    <div className='partners-logos'>
                        <a href='https://www.bv.com.br/'  rel="noopener noreferrer" target='_blank'> <img src={bv} alt=''/> </a>
                        <a href='https://www.portalsolar.com.br/'  rel="noopener noreferrer" target='_blank'> <img id='p-solar' src={portal_solar} alt=''/> </a>
                        <a href='https://www.aldo.com.br/'  rel="noopener noreferrer" target='_blank'> <img src={aldo_solar} alt=''/> </a>
                        <a href='https://www.santander.com.br/'  rel="noopener noreferrer" target='_blank'> <img id='santander' src={santander} alt=''/> </a>
                    </div>
                </section>
            
                <section className='number' style={bgStyle}>
                    <div className='number-content'>
                        <div>
                            <div className='big'>ENERGIA GERADA <span>19.02 Mwh</span>  </div>
                            <div className='co2'>REDUÇÃO DE CO2  <span>6651 kg</span>  </div>
                        </div>                        
                   </div>
                </section>


            </div>
        );
    }
}

export default home;