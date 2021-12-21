
import { INCREMENT,MYPICK,HOUSEPICK,RESULT } from "./action"

    
    
    
const initialState = {
    count : 0,
    result : '',
    myPick : '',
    housePick : '',


}
    
        




export default function reducer(state = initialState,action){
    switch(action.type){
       

        case MYPICK :
            return {...state,myPick: action.payload}    
        

        case HOUSEPICK:
            return {...state,housePick: action.payload}    
            

        case RESULT:
            if(state.myPick&&state.housePick){
                
            if(state.myPick === state.housePick){
                state.result = 'DRAW'
            }else{
                if(state.myPick === 'rock'){
                    if(state.housePick == 'paper'){
                        state.result = 'LOSE'
                    }else{

                        state.result = 'WIN'
                    }

                }
                if(state.myPick === 'paper'){
                    if(state.housePick == 'scissor'){
                        state.result = 'LOSE'
                    }else{

                        state.result = 'WIN'
                    }

                }
                if(state.myPick === 'scissor'){
                    if(state.housePick == 'rock'){
                        state.result = 'LOSE'
                    }else{

                        state.result = 'WIN'
                    }

                }
            }
        }
        if(state.myPick&&state.housePick){
        if(state.result == 'DRAW'){
             state.count =  state.count + 0
            }else if (state.result == 'WIN'){
                 state.count = state.count + 1
            }else{
                state.count = state.count - 1

            }
        }
            return {...state}    
        default:
            return state
    }
}