import React from 'react';
import { useRef, useState } from 'react';
import stayle from "./stayle/LoginForm.module.css"



const Entrance = (formButton) => {

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
      PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
      NAME_REGEXP = /^[a-zA-Z]{3,}$/;




const chekLabel = formButton.formButton === 'SIGN IN'?
                 'Remember me': 
                 'I want to receive inspiration, marketing promotions and updades via email';



const checkForm = (inputFirstName, inputLastName) => { return formButton.formButton === 'SIGN IN'? 
                        null:
                    <> <input ref={inputFirstName} type="text" className="form-control" 
                        style={{"width": "195px", "display":'inline'}} onChange= {onChangeFirstName}
                        placeholder="First Name*"></input>

                        <input ref={inputLastName} type="text" className="form-control" onChange= {onChangeLastName}
                        style={{"width": "195px", "display":'inline', "marginLeft":"10px"}}
                        placeholder="Last Name*"></input> </>};



const inputEmailAddrese = useRef(),
           inputPassword =useRef(),
         inputFirstName = useRef(),
           inputLastName =useRef();


           
const [onCheckbox, setOnCheckbox]= useState(false),
                  [onEmail, setOnEmail]= useState(),
             [onPassword, setOnPasword]= useState(),
           [onFirsName, setOnFirstName]= useState(),
            [onLastName, setOnLastName]= useState();




const onClikEntrance = ()=>{
                            onEmail == inputEmailAddrese.current.value || 
                            onPassword == inputPassword.current.value ?
                            alert ('Hello '+onFirsName+' '+onLastName) :
                            alert ('Invalid data entered')
                        },

      onClikRegistr =()=>{
                            setOnEmail(inputEmailAddrese.current.value);
                            setOnPasword(inputPassword.current.value);
                            setOnFirstName(inputFirstName.current.value);
                            setOnLastName(inputFirstName.current.value);
                           
                        },

     onEntrance = ()=>   { setOnCheckbox(true) },

    onChangeEmail =()=>   {   EMAIL_REGEXP.test(inputEmailAddrese.current.value) ?
                          inputEmailAddrese.current.style.border= '3px solid rgb(10, 248, 50)':
                          inputEmailAddrese.current.style.border= '3px solid rgb(248, 10, 141)';
                        },
    onChangePassword =()=>   {                     PASSWORD_REGEXP.test(inputPassword.current.value) ?        
                          inputPassword.current.style.border= '3px solid rgb(10, 248, 50)':
                          inputPassword.current.style.border= '3px solid rgb(248, 10, 141)';
                          },
    onChangeFirstName =()=>   {                     NAME_REGEXP.test(inputFirstName.current.value) ?
                          inputFirstName.current.style.border= '3px solid rgb(10, 248, 50)':
                          inputFirstName.current.style.border= '3px solid rgb(248, 10, 141)';
                          },
    onChangeLastName =()=>   {                     NAME_REGEXP.test(inputLastName.current.value) ?
                          inputLastName.current.style.border= '3px solid rgb(10, 248, 50)':
                          inputLastName.current.style.border= '3px solid rgb(248, 10, 141)';
                            };
                        
                        

    return (
            
                <><div className={stayle["form-group"]}> 
                        {checkForm(inputFirstName, inputLastName)}
                    </div>

                    <div className={stayle["form-group"]}>                 
                        <input onChange={onChangeEmail} ref={inputEmailAddrese} 
                         type="email" className="form-control" placeholder="Email addres*"></input>
                    </div>

                    <div className={stayle["form-group"]}>                 
                      <input onChange={onChangePassword} ref={inputPassword} 
                      type="password" className="form-control" placeholder="Password*"></input>
                    </div>

                    <div className={stayle["form-check"]}>
                      <input onClick={onEntrance} type="checkbox" defaultChecked={onCheckbox} className="form-check-input" ></input>
                      <label className="form-check-label" >{chekLabel}</label>                      
                    </div>                  
                    
                    <span onClick={formButton.formButton === 'SIGN IN'?onClikEntrance:onClikRegistr} 
                    type="submit" style={{"width": "400px", "fontSize": "20px"}}
                    className="btn btn-primary">{formButton.formButton}</span>
                    
                </>              
    );
};



export default Entrance;