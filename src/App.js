
//import Card from './components/UI/Card';
import { useState } from 'react';
import AddUser from './components/Users/AddUser/addUser';
import UserList from './components/Users/UserList/userList';
function App() {
  const[users,setUsersList]=useState([]);
 
   function  addUserHandelr(uName,uAge){
      setUsersList( prevstate =>{
        return [...prevstate ,{name:uName,age:uAge} ]
      });
   }
      
     
  
  return (
      <div>

<AddUser onAddUsers={addUserHandelr}></AddUser> 
    <UserList items={users}></UserList> 
      </div>
    
  );
}

export default App;
