
const initialState = { id:0, firstName:"", lastName:"", comment:""};


const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case "ADD":
            console.log("Add Comment");
            return { ...state };
        case "DELETE":
            console.log("Delete Comment");
            return { ...state };
        case "Update":
            console.log("Update Comment");
            return { ...state };
        default:
            return state;
    }
};

export default reducer; 