import Card from "../../UI/Card/Card";
import classes from './userlist.module.css';
function UserList (props){
return(
    <Card className={classes.users}>
    <ul>
        {props.items.map(user=>(
            <li key={user.id}>{user.name}  ( { user.age} years old) </li>   
            ))}
    </ul>
    </Card>);
}

export default UserList;