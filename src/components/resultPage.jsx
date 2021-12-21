import React from 'react'
import { Fragment } from 'react'
import '../styles/result.css'
import '../styles/home.css'
import Logo from '../imgs/logo.svg'
import Triangle from '../imgs/bg-triangle.svg'
import Paper from '../imgs/icon-paper.svg'
import Rock from '../imgs/icon-rock.svg'
import Scissor from '../imgs/icon-scissors.svg'
import { useSelector } from "react-redux";
import { useHistory } from 'react-router'

export default function ResultPage(props) {
    const count = useSelector(state => state.count) 
    const pick = useSelector(state => state.myPick)
    const res = useSelector(state => state.result)
    const house = useSelector(state => state.housePick)

   
    return (
       <Fragment>
             <div className="principal">
                <div className='items'>
                        <div  className="center-block2">
                        <img className="logo" src={Logo}/>
                                <div className="botao">
                                    <span className="score">score</span>        
                                    <span className="value">{count}</span>
                                    </div>
                        
                        </div>
                    <div className="block-tri">
                                    

                                <div className="pg2">
                                
                             <div className="m-pick">
                                <span className="you">you picked</span>
                                <img className={pick} id='rock'  src={pick === 'paper'? Paper : pick ==='rock'? Rock : Scissor} alt="rock"/>
                                </div>
                                    <div className='middle'>

                                    <p className="message">YOU {res}</p>
                                    <button className="retry" onClick={() =>  props.history.push('') }>play again</button>
                                    </div>
                                    <div className="c-pick">
                                <span className="cpu">cpu pick</span>
                                <img className={house} id='paper' src={house === 'paper'? Paper : house ==='rock'? Rock : Scissor}/>
                            </div>
                            
                            </div>
                    </div>
                                

                
                   
                </div>


            
            </div>
       
           



       </Fragment>
    )
}
