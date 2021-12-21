import React,{useEffect} from 'react'
import '../styles/home.css'
import Logo from '../imgs/logo.svg'
import Triangle from '../imgs/bg-triangle.svg'
import Paper from '../imgs/icon-paper.svg'
import Rock from '../imgs/icon-rock.svg'
import Scissor from '../imgs/icon-scissors.svg'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment,mypick,housepick,result } from "../store/action";
import { useHistory } from 'react-router'

export default function Home(props) {
    
    const count = useSelector(state => state.count) 
    const pick = useSelector(state => state.myPick)
    const res = useSelector(state => state.result)
    const house = useSelector(state => state.housePick)
    
    const dispatch = useDispatch()
    const history = useHistory()
    


  const HousePicks = ['paper','rock','scissor']

  function handleHouse(){
  dispatch(housepick(HousePicks[Math.floor(Math.random() * 3)]))
   
  }

  function handleWin(){
      dispatch(result())
      
      

    
  }
  function handlePick(event){
      event.preventDefault()
    
    dispatch(mypick(event.target.id))
    handleHouse()
    handleWin()
    setTimeout(() => {
        props.history.push('result')
        
    }, 100);



  }

 

 


    return (
        <div className="principal">
                <div className='items'>
                        <div  className="center-block">
                        <img className="logo" src={Logo}/>
                                <div className="botao">
                                    <span className="score">score</span>        
                                    <span className="value">{count}</span>
                                    </div>
                        
                        </div>
                    <div className="block-tri">
                                    <img className="triangle" src={Triangle}/>

                                                <div className="up">
                                                   
                                                    
                                                <div className='block-scissor'>
                                                <img className="scissor" id='scissor' 
                                                onClick={ event => handlePick(event)} 
                                                 src={Scissor}/> 
                                                </div>
                                                </div>
                                                <div className="up2">
                                                

                                                <div className='block-rock'>
                                                <img className="rock" id='rock' 
                                               onClick={ event => handlePick(event)} 
                                                src={Rock} alt="rock"/>
                                                </div>
                                                </div>
                                    </div>
                                                <div className="up3">
                                                <div className='block-scissor'>
                                                <img className="paper" id='paper' 
                                               onClick={ event => handlePick(event)} 
                                                  src={Paper}/>
                                                </div>
                                                </div>

                
                   
                </div>


            
            </div>
       
    )
}
