export const addPerson = ()=>{
    return{
        type: 'ADD_PERSON'
    }
}
export const delPerson = (id=1) =>{
    return{
        type: 'DELETE_PERSON',
        payload: id
    }
}