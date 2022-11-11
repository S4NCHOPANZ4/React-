import React, {useEffect, useState} from 'react'

export const Forms = () => {

    const [password, setPaswrd] = useState('')
    const [userName, setUserName] = useState('default')
    const [validLength, setValidLength] = useState(false)
    const [validCapital, setValidCapital] = useState(false)
    const [validLower, setValidLower] = useState(false)
    const [validNumbers, setValidNumbers] = useState(false)

    const sendForm = e => {
        e.preventDefault();
        if(validCapital && validLength && validNumbers && validLower){
            alert('validation checks are good')
        }else{
            alert('Wrong Validation')
        }
      
        
    }
    const checkPsw = e => {
        setPaswrd(e.target.value)
    }

    useEffect(()=>{  
         //Length
        console.log(password) 
        if(password.length >= 8){
            setValidLength(true)
        }else{
            setValidLength(false)
        }
        //LowerCase
        const lowerCaseLetters = /[a-z]/g;
        if(password.match(lowerCaseLetters)){
            setValidLower(true)
        }else{
            setValidLower(false)
        }
        //Capital
        const upperCaseLetters = /[A-Z]/g;
        if(password.match(upperCaseLetters)){
            setValidCapital(true)
        }else{
            setValidCapital(false)
        }
        //Numbers
        const numbers = /[0-9]/g;
        if(password.match(numbers)){
            setValidNumbers(true)
        }else{
            setValidNumbers(false)
        }
    },[password])



  return (
   <>
   <form className='form' onSubmit={sendForm} >

        <div className='sub-container'>
            <label htmlFor="usrname">Username</label>
            <input type="text" id="usrname" name="usrname" required></input>
        </div>
    
        <div className='sub-container'>
            <label htmlFor="psw">Password</label>
            <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
            onChange={checkPsw}  required></input>
        </div>

        <input type="submit" value="Submit" className="button-display" onClick={sendForm}></input>

   </form>
   <div id="message">   
        <h3>Password must contain the following:</h3>
        <p id="letter" className={validLower === true ? "valid":"invalid"}>A <b>lowercase</b> letter</p>
        <p id="capital" className={validCapital === true ? "valid":"invalid"}>A <b>capital (uppercase)</b> letter</p>
        <p id="number" className={validNumbers === true ? "valid":"invalid"}>A <b>number</b></p>
        <p id="length" className={validLength === true ? "valid":"invalid"}>Minimum <b>8 characters</b></p>
    </div>
   </>
  )
}
