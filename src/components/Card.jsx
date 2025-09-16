import { useNavigate } from "react-router-dom";
import useSound from "use-sound"
import sound from '../../sounds/sound.wav'

function Card(card) {
    let Title = card.title
    let Image = card.image
    let Id = card.id
    const navigate = useNavigate();
    const [play] = useSound(sound)

    return (
        <div className="card" id={Title}>
            <h2>
                {Title}
            </h2>
            <img src={Image} alt={Title} />
            <button className="goButton" onClick={() => {
                navigate(`${Id}Chart`);
                play()
            }}>Let's Go</button>
        </div>
    )
}

export default Card;