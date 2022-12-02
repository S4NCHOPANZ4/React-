import React from 'react';

import { addPerson , delPerson } from '../actions';
import {useSelector , useDispatch} from 'react-redux'

import Person from '../components/Person/Person';

const People = () => {
    const persons = useSelector(state => state.persons)
    const dispatch = useDispatch()

    return (

        <div>
            <button onClick={()=>{
                dispatch(addPerson())
            }}>{console.log(persons)}
            Add Person
            </button>
            {persons.map(person => (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => dispatch(delPerson(person.id))}/>
            ))}
        </div>
    );
}

export default People;