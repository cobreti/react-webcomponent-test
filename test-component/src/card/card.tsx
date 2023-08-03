import styles from "./card.module.scss";


interface CardProps {
    name: string
}

function Card(props: CardProps): JSX.Element {

    return (
        <>
            <div className={styles.card}>Card
                <div></div>
                <div className={styles.name}>{props.name}</div>
            </div>
        </>
    )
}


export default Card;
