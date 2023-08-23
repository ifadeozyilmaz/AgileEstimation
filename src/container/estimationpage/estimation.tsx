import {useSelector} from "react-redux";
import {State} from "../../store";
import {Fragment, useState, useEffect} from "react";
import {CardTypes} from "../../enums";
import {useNavigate} from "react-router-dom";
import {RouteTypes} from "../../enums/routes";
import SocketIO from "socket.io-client";
const socket = SocketIO("http://localhost:3001", {transports: ["websocket"]})


const numbers: CardTypes[] = [
    CardTypes.UNKNOWN,
    CardTypes.ONE,
    CardTypes.TWO,
    CardTypes.THREE,
    CardTypes.FIVE,
    CardTypes.EIGHT,
    CardTypes.THIRTEEN,
    CardTypes.TWENTY_ONE,
    CardTypes.COFFEE,
];


export function Estimation() {
    const [selectedCard, setSelectedCard] = useState<CardTypes | null>(null);
    const [show, setShow] = useState(true);
    const [isCardSelected, setIsCardSelected] = useState(false);
    const [average, setAverage] = useState(null);
    const roomId = useSelector((state: State) => state.room.room);
    const usersInRoom = useSelector((state: State) => state.user.usersInRoom);
    const navigate = useNavigate();

    useEffect(() => {
        socket.on('selectedCardsResponse', ({ selectedCards, averageSelectedCards }) => {
            console.log(selectedCards);
            setAverage(averageSelectedCards)
        });
    }, []);

    const handleCardClick = (card: CardTypes) => {
        if (!isCardSelected){
            setSelectedCard(card);
            setIsCardSelected(true);
            setShow(false);
            socket.emit("selectedCard", {card, roomId});
            socket.emit('getSelectedCards', { roomId: roomId });
        }
    };
    const handleReset = () => {
        setSelectedCard(null);
        setAverage(null);
        setIsCardSelected(false);
        setShow(true);
    };
    return (
        <Fragment>
            <div className="container">
                <div className="header">
                    Users:
                    <div className="users">
                        {usersInRoom.map((user, index) => (
                            <li key={index}>{user}</li>
                        ))}
                   </div>
                </div>
                <div className="header">
                    Average
                    <div className="selected-card">
                        {show ?
                            <p>{average}</p>
                            : <p>👍</p>
                        }
                    </div>
                </div>
            </div>
            <div className="card">
                {numbers.map((number, item) => (
                    <div key={item} className={`numbers ${isCardSelected ? 'disabled' : ''}`}
                         onClick={() => isCardSelected ? null : handleCardClick(number)}>
                        <h1>
                            {number}
                        </h1>
                    </div>
                ))}
            </div>
            <div className="btn">
                <button onClick={() => setShow((selectedCard !== null) === !show)}>Reveal</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={() => navigate(RouteTypes.Home)}>Exit</button>
            </div>
        </Fragment>
    )
}



