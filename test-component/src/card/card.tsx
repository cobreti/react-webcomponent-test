import styles from "./card.module.scss";


interface CardProps {
    name: string,
    card?: string
}

function Card(props: CardProps): JSX.Element {

    const cardClass = props.card || styles.card;
    console.log('styles.card : ', styles.card);
    console.log('props.cardClassname : ', props.card);
    console.log('props : ', props);

    return (
        <>
            <div className={cardClass}>Card
                <div></div>
                <div className={styles.name}>{props.name}</div>
            </div>
        </>
    )
}


export default Card;
