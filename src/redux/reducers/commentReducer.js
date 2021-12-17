// no rating 
const initialState = { firstName:"", lastName:"", comment:""};


const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case "ADD":
            console.log("action is INCREMENT");
            return { ...state, counter: state.counter + 1 };
        case "DELETE":
            console.log("action is DECREMENT");
            return { ...state, counter: state.counter - 1 };
        case "RESET":
            console.log("action is RESET");
            return { ...state, counter: 0 };
        default:
            return state;
    }
};

export default reducer; 