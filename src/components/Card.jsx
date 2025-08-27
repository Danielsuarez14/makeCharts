function Card(card) {
    let Title = card.title
    let Image = card.image
    return (
        <div className="card" id={Title}>
            <h2>
                {Title}
            </h2>
            <img src={Image} alt={Title} />
            <button className="goButton">Let's Go</button>
        </div>
    )
}

export default Card;