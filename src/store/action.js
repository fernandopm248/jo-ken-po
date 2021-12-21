
export const MYPICK = 'MYPICK'
export const HOUSEPICK = 'HOUSEPICK'
export const RESULT ='RESULT'





 export function mypick(payload){
    return{
     type: MYPICK,   
     payload 
 
 
    }
}


export function housepick(payload){
        return{
         type: HOUSEPICK,    
         payload 
     
     
        }
 }
 
export function result(){
    return{
     type: RESULT,    
     
 

    }
}




