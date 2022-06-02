import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import classes from './AddUser.module.css';

import React, { useState } from 'react';
import ErrorModel from "../../UI/ErrorModel/ErrorModel";
function AddUser ( props){
   
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState('');
    function addUserHandelr (event){
        event.preventDefault();
       
        if (enteredUsername.trim().length=== 0 || 
        enteredAge.trim().length=== 0
        || +enteredAge<0
        )
        setError({title:'Invalid input' , message:'Please Enter a valid Data  '});
        props.onAddUsers([enteredUsername,enteredAge]);
        setEnteredUsername("");
        setEnteredAge("");
       
    }
    function UserNamechangeHandelr(event){
        setEnteredUsername(event.target.value);
    }
    function AgechangeHandelr(event){
        setEnteredAge(event.target.value);
    }
    function errorhandelr (){
        setError(null);
    }
    return( 
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorhandelr}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandelr}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={UserNamechangeHandelr}/>
       
        <label htmlFor="Age" >Age(Years)</label>
        <input type="number" id="Age" value={enteredAge} onChange={AgechangeHandelr}/>
        <Button type="submit">Add User</Button>
        
    </form>
   
    </Card>
  </div>
    )
}
export default AddUser;