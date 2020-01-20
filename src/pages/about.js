import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

import bg from '../styles/images/quem_somos_1.png'
import effect from '../styles/images/about_effect.png'
import check from '../styles/images/icons/check-solid.svg'

class about extends Component {

    constructor() {
        super()
        this.state = {
            certifications: [
                {cert: 'Experiência de mais de 20 anos  em engenharia'},
                {cert: 'Equipe certificada e com experiência garantida (NR-10 e NR-35)'},
                {cert: 'Equipamentos modernos'},
                {cert: 'Garantia dos equipamentos'},
                {cert: 'Acompanhamento e monitoramento da sua geração de energia'},
                {cert: 'Regularização do sistema junto à Concessionária'},
                {cert: 'Execução rápida da instalação'},
                {cert: 'Projeto personalizado'},

            ]
        }
    }

    render() {
        
        const bgStyle = { background: `url(${effect})` };
        const cert = this.state.certifications
        return (
            <div className='content about'>

                <div className='container-default'>
                    <div className='effect' style={bgStyle}></div>
                    <div className='title'>Quem Somos?</div>
                    <p>

                        A empresa Sunrise Solutions Ltda. (Sunrise) é uma empresa carioca com o propósito de desenvolver soluções inovadoras em energia solar.
                        Com a fundação da Sunrise, nossos fundadores buscaram expandir alternativas de inovações sustentáveis ao mercado de energia elétrica pois acreditavam 
                        que o caminho para o desenvolvimento orgânico da sociedade deveria passar pela preocupação ambiental. Dessa forma, a Sunrise passou a fazer diferença no mercado 
                        de energia sustentável pois vem associando a prática dos conhecimentos técnicos de seus fundadores às estratégias de energia inovadoras e sustentáveis, prestando 
                        assim um serviço de excelência diferenciado, personalizado e preocupado com o meio ambiente. 

                    </p>

                    <div className='cert-group'>

                            <div className='title'>Cerfitificações</div>

                            <Row>
                               {cert.map((item, index) => {

                                   return (
                                       <Col md={6} sm={12} lg={4} key={index} className='cert'>
                                            <img src={check} alt=''></img>
                                            {item.cert}
                                       </Col>
                                   )
                               })}
                            </Row>

                    </div>

                </div>

                
                <img className='footer' src={bg} alt=''></img>
              
            </div>
        );
    }
}

export default about;