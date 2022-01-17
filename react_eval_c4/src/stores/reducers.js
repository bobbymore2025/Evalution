import  {ADD_JOB} from "./actionsTypes"
 
const init={Jobs:[]};
export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case ADD_JOB:
            return{
                ...state,
                Jobs:[...state,payload]
            }
            default:
                return{
                    state
                }
    }


};