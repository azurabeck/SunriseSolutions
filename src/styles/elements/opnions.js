import React, {Component} from 'react'
import arrow from '../images/icons/arrow.svg'

class opnions extends Component {    

    state = {
        fn: 0,
        sn: 3,
    }


    handleChange = (e) => {
        const value = e.target.value

        switch(value) {
            case 1: 
                this.setState({fn: 0, sn: 3})
                break;
            case 2:
                this.setState({fn: 1, sn: 5})
                break;
            default:
                break
        }

    }

    handleNext = (e) => {
        const {fn , sn} = this.state
        const nextFn = fn + 1;
        const nextSn = sn + 1
        
        if((nextFn === 3 || nextFn < 3) && (nextSn === 5 || nextSn < 5)) {         
            this.setState({fn: nextFn, sn: nextSn})
        } else {
            this.setState({fn: 0, sn: 3})
        }
    }

    handlePrev = (e) => {
        const {fn , sn} = this.state
        const prevFn = fn - 1;
        const prevSn = sn - 1
        if((prevFn === 0 || prevFn > 0) && (prevSn === 1 || prevSn > 1)) {            
            this.setState({fn: prevFn, sn: prevSn})
        } else {
            this.setState({fn: 3, sn: 6})
        }
    }

     render() {       
        
        const { user } = this.props
        const { fn , sn } = this.state

                    
        return (
              
            <div className='container-default'> 
                <img src={arrow} className='left' alt='' onClick={this.handlePrev}></img> 
                <div className='opnions'>
                    
                {
                      user && user.slice(fn,sn).map((item, index) => {
                        return (

                             
                                    
                                    <div className='block' key={index} onClick={this.handleChange} id={(this.state.sn === 1) ? "active" : ""}>
                                        <div className='user'>{item.user}</div>
                                        <div className='date'>{item.date}</div>
                                        <div className='desc'>{item.desc}</div>
                                    </div>

                                
                        )
                      })   
                } 
                   
                </div> 
                <img src={arrow} className='right' alt='' onClick={this.handleNext}></img> 
            </div>
        )
    }
}


export default (opnions)