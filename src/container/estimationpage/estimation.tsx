import {useSelector} from "react-redux";
import {State} from "../../store";
import {Fragment, useState, useEffect} from "react";
import {CardTypes} from "../../enums";
import {useNavigate} from "react-router-dom";
import {RouteTypes} from "../../enums/routes";
import SocketIO from "socket.io-client";
const socket = SocketIO("http://localhost:3001",{transports:["websocket"]})


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
    const [show,setShow] = useState(true);
    const username = useSelector((state: State) => state.user.username);
    const usersInRoom = useSelector((state: State) => state.user.usersInRoom);
    const navigate = useNavigate();


    const calculateAverage = (array: CardTypes[]) =>{
        const values = array.filter((value) => !isNaN(Number(value)));
        const sum = values.reduce((acc, val) => acc + Number(val), 0);
        return sum / values.length;
    };

   // const averageCard = users.map((user)=>user.selectedCard)
   // const average = calculateAverage(averageCard).toFixed(1)
    const average = calculateAverage(numbers).toFixed(1)

    useEffect(() => {
        socket.on("cardSelected", (selectedCard) => {
            setSelectedCard(selectedCard);
        });
    }, []);
    const handleCardClick = (card: CardTypes) => {
        setSelectedCard(card);
        setShow(false);
        socket.emit("selectedCard", {card,username});
        console.log(`${username} selected ${card}`)
    };
    const handleReset = () => {
        setSelectedCard(null);
        setShow(true);
    };
    return (
            <Fragment>
            <div className="container">
                <div className="header">
                    Users:
                   <div className="users">
                        {usersInRoom.map((user,index) => (
                            <li key={index}>{user}</li>
                        ))}
                   </div>
                </div>
                <div className="header">
                    Average
                <div className="selected-card">
                    {show ?
                        <p>{selectedCard},{average}</p>
                        :<p>👍</p>
                    }
                </div>
                </div>
            </div>
            <div className="card">
                {numbers.map((number,item) => (
                    <div key={item} className="numbers"
                onClick={() => handleCardClick(number)}>
                        <h1>
                            {number}
                        </h1>
                    </div>
                ))}
            </div>
                <div className="btn">
                <button onClick={() => setShow((selectedCard !==null)===!show)}>Reveal</button>
                <button onClick={handleReset}>Reset</button>
                    <button onClick={()=>navigate(RouteTypes.Home)}>Exit</button>
                </div>
            </Fragment>
        )
}



