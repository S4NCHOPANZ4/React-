const persons = (state = [] , action)=>{
    switch (action.type) {
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'John',
                age: Math.floor( Math.random() * 40 )
            }
    
            return [
                  ...state,
                  newPerson
            ]
        case 'DELETE_PERSON':
            return state.filter(person => person.id !== action.payload)
        default:
            return state
        
    }
        
}
export default persons