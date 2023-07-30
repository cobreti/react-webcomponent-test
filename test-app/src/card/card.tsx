import "./card.scss"


interface CardProps {
    name: string
}

function Card(props: CardProps): JSX.Element {

    return (
        <>
            <div className="card">Card
                <div></div>
                <div className="name">{props.name}</div>
            </div>
        </>
    )
}


export default Card;
