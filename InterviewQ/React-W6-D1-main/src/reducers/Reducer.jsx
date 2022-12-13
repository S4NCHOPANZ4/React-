const modifiers = (state = 0, action) =>{
    switch (action.type){
        case 'ADD_VALUE':
            return state + 1
        case 'SUBSTRACT_VALUE':
            return state - 1;
        default: 
            return state;
    }
}
export default modifiers;