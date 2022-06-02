import styles from './Card.module.css';
function Card(props){
    //const classes=styles.Card + props.className;
return <div className={`${styles.card} ${props.className}`}>
    {props.children}
</div>
}
export default Card;