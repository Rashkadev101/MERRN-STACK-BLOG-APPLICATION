 const Reducer = (state, action) =>{
     {/** login Start user=0 isfetching=true error=false*/}
     {/**login  si default ah ayuu null uyahay marku start yahay. */}
    switch(action.type) {
       
        case "LOGIN_START":
            return{
                user:null,
                isFetching:true,
                error:false

            };
            {/**login success marku yahay, user ka wala gudbinaya */}
            case "LOGIN_SUCCESS":
                return{
                    user:action.payload,
                    isFetching:false,
                    error:false
    
                };
                {/**login failure marku yahay waxa soo baxayo disabled */}
                case "LOGIN_FAILURE":
                    return{
                        user:null,
                        isFetching:false,
                        error:true,
        
                    };
                    
                    case "UPDATE_START":
                        return{
                            ...state,
                            isFetching:true
            
                        };
                        {/**login success marku yahay, user ka wala gudbinaya */}
                        case "UPDATE_SUCCESS":
                            return{
                                user:action.payload,
                                isFetching:false,
                                error:false
                
                            };
                            {/**login failure marku yahay waxa soo baxayo disabled */}
                            case "UPDATE_FAILURE":
                                return{
                                    user:state.user,
                                    isFetching:false,
                                    error:true,
                    
                                };
                                case "LOGOUT":
                                    return{
                                         user:null,
                                          isFetching:false,
                                           error:false,
        
                    };
                    default:
                        return state;
    }
 };

 export default Reducer;